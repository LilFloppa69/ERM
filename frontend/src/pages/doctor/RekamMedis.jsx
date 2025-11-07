import React, { useState } from "react";

export default function RekamMedis() {
  const [pasienDipilih, setPasienDipilih] = useState("Budi Santoso");

  const pasien = [
    { nama: "Siti Nurhaliza", rm: "RM-001234" },
    { nama: "Budi Santoso", rm: "RM-001235" },
    { nama: "Maria Gonzalez", rm: "RM-001236" },
  ];

  const rekamMedis = {
    "Budi Santoso": [
      {
        tanggal: "15 Januari 2024",
        keluhan: "Kontrol rutin diabetes",
        diagnosa: "Diabetes Mellitus Tipe 2 terkontrol",
        tindakan: "Pemeriksaan gula darah, konseling diet",
        resep: "Metformin 500mg 2x1, Glimepiride 2mg 1x1",
      },
      {
        tanggal: "10 Januari 2024",
        keluhan: "Sakit kepala, pusing",
        diagnosa: "Hipertensi grade 1",
        tindakan: "Pemeriksaan tekanan darah, EKG",
        resep: "Amlodipine 5mg 1x1, Captopril 25mg 2x1",
      },
    ],
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen text-gray-800">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-1">Rekam Medis</h1>
      <p className="text-gray-600 mb-6">Selamat datang, <span className="font-medium">dr. Nabila Huwaida</span></p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sidebar Pasien */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
          <h3 className="font-semibold text-gray-900 mb-4">Pilih Pasien</h3>
          <div className="space-y-3">
            {pasien.map((p) => (
              <div
                key={p.rm}
                onClick={() => setPasienDipilih(p.nama)}
                className={`p-3 border rounded-lg cursor-pointer transition ${
                  pasienDipilih === p.nama
                    ? "bg-blue-50 border-blue-400 text-blue-700"
                    : "hover:bg-gray-50"
                }`}
              >
                <p className="font-medium">{p.nama}</p>
                <p className="text-sm text-gray-600">{p.rm}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rekam Medis */}
        <div className="md:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="font-semibold text-gray-900 mb-1">
            Rekam Medis - {pasienDipilih}
          </h3>
          <p className="text-sm text-gray-600 mb-4">{pasien.find(p => p.nama === pasienDipilih)?.rm}</p>
          <hr className="mb-4 border-gray-200" />

          {/* Daftar Rekam Medis */}
          <div className="space-y-4">
            {rekamMedis[pasienDipilih]?.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-2">
                  <p className="font-semibold text-gray-800">{item.tanggal}</p>
                  <p className="text-sm text-gray-500">dr. Nabila Huwaida</p>
                </div>
                <div className="text-sm leading-relaxed">
                  <p><span className="font-semibold">Keluhan:</span> {item.keluhan}</p>
                  <p><span className="font-semibold">Diagnosa:</span> {item.diagnosa}</p>
                  <p><span className="font-semibold">Tindakan:</span> {item.tindakan}</p>
                  <p><span className="font-semibold">Resep:</span> {item.resep}</p>
                </div>
              </div>
            )) || (
              <p className="text-gray-500 italic">Belum ada catatan medis.</p>
            )}
          </div>

          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition">
            + Tambah Catatan Baru
          </button>
        </div>
      </div>
    </div>
  );
}
