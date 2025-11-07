import React, { useState } from "react";

const DataPasien2 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
    const pasien = [
      {
        nama: "Siti Nurhaliza",
        telp: "0812-3456-7890",
        umur: "45 tahun",
        jenisKelamin: "Perempuan",
        rekamMedis: "RM-001234",
        terakhir: "12 Jan 2024",
      },
      {
        nama: "Budi Santoso",
        telp: "0813-4567-8901",
        umur: "32 tahun",
        jenisKelamin: "Laki-laki",
        rekamMedis: "RM-001235",
        terakhir: "15 Jan 2024",
      },
      {
        nama: "Maria Gonzalez",
        telp: "0814-5678-9012",
        umur: "28 tahun",
        jenisKelamin: "Perempuan",
        rekamMedis: "RM-001236",
        terakhir: "10 Jan 2024",
      },
    ];
  
    const filteredPasien = pasien.filter((p) =>
      p.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">Data Pasien</h1>
          <p className="text-gray-600">Selamat datang, <span className="font-medium">Dr. Ahmad Wijaya</span></p>
        </div>
  
        {/* Card utama */}
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3 md:mb-0">
              Data Pasien
            </h2>
  
            {/* Search bar */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Cari pasien..."
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm">
                Cari
              </button>
            </div>
          </div>
  
          {/* Tabel */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b text-gray-600">
                  <th className="py-3 px-2">Nama</th>
                  <th className="py-3 px-2">Umur</th>
                  <th className="py-3 px-2">Jenis Kelamin</th>
                  <th className="py-3 px-2">No. Rekam Medis</th>
                  <th className="py-3 px-2">Terakhir Berkunjung</th>
                  <th className="py-3 px-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredPasien.map((p, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-2">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">{p.nama}</span>
                        <span className="text-gray-500 text-xs">{p.telp}</span>
                      </div>
                    </td>
                    <td className="py-3 px-2">{p.umur}</td>
                    <td className="py-3 px-2">{p.jenisKelamin}</td>
                    <td className="py-3 px-2">{p.rekamMedis}</td>
                    <td className="py-3 px-2">{p.terakhir}</td>
                    <td className="py-3 px-2 text-blue-600 font-medium hover:underline cursor-pointer">
                      Lihat Detail
                    </td>
                  </tr>
                ))}
                {filteredPasien.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      Tidak ada data pasien ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

export default DataPasien2;
