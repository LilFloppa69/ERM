<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::post('/login', [AuthController::class, 'loginUser']);
Route::post('/register', [AuthController::class, 'registerUser']);

Route::middleware(['jwt.auth'])->group(function () {
    Route::get('/me', [AuthController::class, 'getMe']);
    Route::post('/logout', [AuthController::class, 'logoutUsers']);
    Route::post('/refresh', [AuthController::class, 'refreshToken']);
});
