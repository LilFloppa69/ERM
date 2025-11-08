import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

export default function Unauthorized() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Akses Ditolak</h1>
      <p className="text-gray-600 mb-6">Anda tidak memiliki izin untuk mengakses halaman ini.</p>

      <Link
        to="/login"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-4"
      >
        Kembali ke Login
      </Link>

      <LogoutButton>Logout dari semua</LogoutButton>
    </div>
  );
}
