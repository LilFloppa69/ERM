import { useState } from "react";

export default function TulisResep() {
  const [obatList, setObatList] = useState([{ nama: "", dosis: "", frekuensi: "" }]);

  const tambahObat = () => {
    setObatList([...obatList, { nama: "", dosis: "", frekuensi: "" }]);
  };

  const hapusObat = (index) => {
    const newList = obatList.filter((_, i) => i !== index);
    setObatList(newList);
  };

  return (
    <div className="p-6 text-gray-900">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Tulis Resep</h1>
        <p className="text-gray-600">
          Selamat datang, <span className="font-medium">Dr. Nabila Huwaida</span>
        </p>
      </div>

      {/* Card */}
      <div className="bg-white shadow rounded-2xl p-6">
        <h2 className="text-lg font-semibold mb-4">Tulis Resep Baru</h2>

        {/* Pilih Pasien & Tanggal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-1">Pilih Pasien</label>
            <select className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>Pilih pasien...</option>
              <option>Budi Santoso</option>
              <option>Rina Wati</option>
              <option>Andi Rahman</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tanggal Kunjungan</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              defaultValue="2024-01-15"
            />
          </div>
        </div>

        {/* Diagnosa */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Diagnosa</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Masukkan diagnosa..."
            rows="3"
          ></textarea>
        </div>

        {/* Resep Obat */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Resep Obat</label>

          {obatList.map((obat, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-2 mb-2">
              <input
                type="text"
                placeholder="Nama obat"
                className="flex-1 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Dosis"
                className="w-32 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Frekuensi"
                className="w-36 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <button
                onClick={() => hapusObat(index)}
                className="bg-red-100 text-red-600 rounded-lg px-4 py-2 hover:bg-red-200 transition"
              >
                Hapus
              </button>
            </div>
          ))}

          <button
            onClick={tambahObat}
            className="mt-2 bg-green-100 text-green-700 rounded-lg px-4 py-2 hover:bg-green-200 transition"
          >
            + Tambah Obat
          </button>
        </div>

        {/* Instruksi Tambahan */}
        <div>
          <label className="block text-sm font-medium mb-1">Instruksi Tambahan</label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Instruksi untuk pasien..."
            rows="2"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
