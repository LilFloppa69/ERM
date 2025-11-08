<?php

namespace Database\Seeders;

use App\Models\User;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'username' => 'test',
            'phone' => '1234567890',
        ]);

          User::factory()->create([
            'name' => 'Test Admin',
            'email' => 'admin@example.com',
            'username' => 'Admin',
            'role' => 'admin',
            'phone' => '1234567890',
        ]);

        $this->call(AdminSeeder::class);
    }
}
