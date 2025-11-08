<?php


namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;


class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Admin::factory()->create([
            'pengguna_id' => '12345',
            'nama_lengkap' => 'Admin',
            'no_telepon' => '08123456789',
            'email' => 'admin@example.com',
            'alamat' => 'Jl. Admin',
        ]);
        Admin::factory(10)->create();
    }
}
