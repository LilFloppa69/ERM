// src/pages/patient/DetailJadwal.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailJadwal() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "User Pasien", // nanti bisa autofill dari login pasien
    rekamMedis: "RM-00123",
    telepon: "08123456789",
    tanggalKunjungan: "",
    jamBerobat: "",
    keluhan: "",
    metodePembayaran: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data dikirim:", formData);
    alert("Pendaftaran berhasil!");
    navigate("/patient/jadwal-praktik");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Tombol kembali */}

      {/* Card utama */}
      <div className="w-full max-w-5xl bg-white p-10 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-center mb-6">Registrasi</h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* Nama Lengkap */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Nama Lengkap <span className="text-gray-400">(Autofill sesuai Registrasi Pasien)</span>
            </label>
            <input type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full border rounded-md px-3 py-2" readOnly />
          </div>

          {/* Nomor Rekam Medis */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Nomor Rekam Medis <span className="text-gray-400">(Autofill)</span>
            </label>
            <input type="text" name="rekamMedis" value={formData.rekamMedis} onChange={handleChange} className="w-full border rounded-md px-3 py-2" readOnly />
          </div>

          {/* Nomor Telepon */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Nomor Telepon (Autofill)</label>
            <input type="text" name="telepon" value={formData.telepon} onChange={handleChange} className="w-full border rounded-md px-3 py-2" readOnly />
          </div>

          {/* Info Dokter */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Detail Dokter</label>
            <div className="w-full border rounded-md px-3 py-2 bg-gray-100 text-sm leading-relaxed">
              <p>Poliklinik: Poli Gigi (tergantung dokter)</p>
              <p>Dokter: dr. Hitler</p>
              <p>Jadwal Praktik: Rabu–Jumat, 09.00–17.00</p>
            </div>
          </div>

          {/* Tanggal Kunjungan */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Tanggal Kunjungan</label>
            <input type="date" name="tanggalKunjungan" value={formData.tanggalKunjungan} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required />
          </div>

          {/* Jam Berobat */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Jam Berobat</label>
            <select name="jamBerobat" value={formData.jamBerobat} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required>
              <option value="">Pilih Jam</option>
              <option value="09.00">09.00</option>
              <option value="10.00">10.00</option>
              <option value="11.00">11.00</option>
              <option value="13.00">13.00</option>
              <option value="15.00">15.00</option>
            </select>
          </div>

          {/* Keluhan */}
          <div className="col-span-2">
            <label className="block text-sm text-gray-600 mb-1">Keluhan</label>
            <textarea name="keluhan" value={formData.keluhan} onChange={handleChange} className="w-full border rounded-md px-3 py-2 h-24 resize-none" required />
          </div>

          {/* Metode Pembayaran */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">Metode Pembayaran</label>
            <select name="metodePembayaran" value={formData.metodePembayaran} onChange={handleChange} className="w-full border rounded-md px-3 py-2" required>
              <option value="">Pilih Metode</option>
              <option value="Tunai">Tunai</option>
              <option value="BPJS">BPJS</option>
              <option value="Asuransi">Asuransi</option>
            </select>
          </div>

          {/* Tombol Aksi */}
          <div className="col-span-2 flex justify-end gap-3 mt-4">
            <button type="button" onClick={() => navigate("/patient/jadwal")} className="px-6 py-2 border rounded-md hover:bg-gray-100">
              Batal
            </button>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
