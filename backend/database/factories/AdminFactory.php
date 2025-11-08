<?php

namespace Database\Factories;

use App\Models\Admin;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Admin>
 */
class AdminFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Admin::class;

    public function definition(): array
    {
        $faker = \Faker\Factory::create('id_ID');
        return [
            'pengguna_id' => $faker->unique()->randomNumber(5),
            'nama_lengkap' => $faker->name(),
            'no_telepon' => $faker->phoneNumber(),
            'email' => $faker->unique()->safeEmail(),
            'alamat' => $faker->address(),
 
        ];
    }
}
