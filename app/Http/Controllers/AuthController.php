<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use App\Models\User;
use Illuminate\Validation\ValidationException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{

    // LOGIN  
    public function loginUser(Request $request)
    {
        $credentials = $request->validate([
            'email'    => 'required|email',
            'password' => 'required'
        ]);

        // Use JWTAuth facade to create token (avoids Guard::attempt undefined error)
        if (! $token = JWTAuth::attempt($credentials)) {
            return response()->json(['message' => 'Email atau password salah'], 401);
        }

        return $this->respondWithToken($token);
    }

    // REGISTER  
    public function registerUser(Request $request)
    {
        try {
            $validated = $request->validate([
                'name'     => 'required|string|max:255',
                'email'    => 'required|string|email|max:255|unique:users,email',
                'password' => 'required|string|min:6',
                'username' => 'sometimes|string|max:50|unique:users,username',
                'role'     => 'required|string|in:admin,doctor,patient',
                'phone'    => 'sometimes|string|max:20',
            ]);

            $userCode = Str::random(10);
            $user = User::create([
                'name'     => $validated['name'],
                'email'    => $validated['email'],
                'password' => Hash::make($validated['password']),
                'role'     => $validated['role'],
                'username' => $validated['username'] ?? null,
                'phone'    => $validated['phone'] ?? null,
            ]);

            $token = JWTAuth::fromUser($user);

            return response()->json([
                'message' => 'User registered successfully',
                'token'   => $token,
                'token_type' => 'bearer',
                'expires_in' => JWTAuth::factory()->getTTL() * 60,
            ], 201);
        } catch (ValidationException $e) {
            return response()->json(['message' => 'Validation failed','errors' => $e->errors()], 422);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Terjadi kesalahan pada server.','error' => $e->getMessage()], 500);
        }
    }

    // GET ME
    public function getMe(Request $request)
    {
        return response()->json([
            'code' => 200,
            'message' => 'User ditemukan',
            'data' => auth('api')->user(),
        ]);
    }

    // LOGOUT (invalidate token)
    public function logoutUsers(Request $request)
    {
        try {
            JWTAuth::invalidate(JWTAuth::getToken());
            return response()->json(['code' => 200,'message' => 'Logged out successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['code' => 500, 'message' => 'Logout failed', 'error' => $e->getMessage()], 500);
        }
    }

    // REFRESH TOKEN
    public function refreshToken(Request $request)
    {
        $newToken = JWTAuth::refresh(JWTAuth::getToken());
        return $this->respondWithToken($newToken);
    }

    private function respondWithToken($token)
    {
        return response()->json([
            'code'       => 200,
            'token'      => $token,
            'token_type' => 'bearer',
            'expires_in' => JWTAuth::factory()->getTTL() * 60,
        ]);
    }
}