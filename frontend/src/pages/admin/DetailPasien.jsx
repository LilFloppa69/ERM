import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const DetailPasien = () => {
  const [activeTab, setActiveTab] = useState("info");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("semua");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Detail pasien:", id);
  }, [id]);

  // 🔹 Data dummy pasien (pindahkan ke atas)
  const pasien = {
    id: "P001",
    nama: "Budi Santoso",
    umur: 39,
    gender: "Laki-Laki",
    goldar: "A+",
    rm: "RM-2024-001",
    telepon: "081269042067",
    email: "BudiSantoso@gmail.com",
    nik: "333333",
    tglLahir: "9 Februari 2005 (20 Tahun)",
    alamat: "Jl. Jenderal Sudirman",
    kontakDarurat: {
      nama: "Mberegh",
      hubungan: "Abang Kandung",
      telepon: "0813-9876-5432",
    },
    riwayatPenyakit: ["Hipertensi", "Diabetes Tipe 2"],
    transaksi: [
      {
        id: "TRX-001",
        tanggal: "10 Des 2024",
        waktu: "09:00",
        jenis: "Konsultasi Umum",
        dokter: "Dr. Sarah Wahyuni",
        biaya: 150000,
        status: "Lunas",
        metodeBayar: "Tunai",
      },
      {
        id: "TRX-002",
        tanggal: "8 Des 2024",
        waktu: "10:30",
        jenis: "Tes Darah Lengkap",
        dokter: "Dr. Aditya",
        biaya: 250000,
        status: "Pending",
        metodeBayar: "Transfer Bank",
      },
    ],
  };

  // 🔹 Utility format rupiah
  const formatRupiah = (angka) => {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  // 🔹 Filter dan total transaksi
  const filteredTransaksi = pasien.transaksi.filter((item) => {
    const matchSearch = item.jenis.toLowerCase().includes(searchTerm.toLowerCase()) || item.dokter.toLowerCase().includes(searchTerm.toLowerCase()) || item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchFilter = filterStatus === "semua" || item.status.toLowerCase() === filterStatus.toLowerCase();
    return matchSearch && matchFilter;
  });

  const totalTransaksi = pasien.transaksi.reduce((sum, item) => sum + item.biaya, 0);
  const totalLunas = pasien.transaksi.filter((item) => item.status === "Lunas").reduce((sum, item) => sum + item.biaya, 0);
  const totalPending = pasien.transaksi.filter((item) => item.status === "Pending").reduce((sum, item) => sum + item.biaya, 0);

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6">
      {/* Tombol Kembali */}
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-600 hover:text-black mb-4">
        <ArrowLeft size={20} />
        <span>Kembali</span>
      </button>

      {/* Header */}
      <div className="border border-gray-200 rounded-xl p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-blue-100 flex items-center justify-center rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0" />
              </svg>
            </div>
            <div className=" mb-5">
              <h2 className="text-2xl font-semibold">{pasien.nama}</h2>
              <p className="text-sm text-gray-600">
                {pasien.gender}, {pasien.umur} Tahun · Gol. Darah {pasien.goldar}
              </p>
              <p className="text-sm text-gray-600">No. RM: {pasien.rm}</p>
              <p className="text-sm font-medium mt-1">📞 {pasien.telepon}</p>
              <p className="text-sm text-gray-600">{pasien.email}</p>
            </div>
          </div>
        </div>

        {/* Statistik */}
        <div className="flex gap-6 border-b border-gray-300 text-sm font-medium">
          <button onClick={() => setActiveTab("info")} className={`pb-2 ${activeTab === "info" ? "border-b-2 border-purple-500 text-purple-600" : "text-gray-600 hover:text-black"}`}>
            Informasi Pribadi
          </button>

          <button onClick={() => setActiveTab("riwayat")} className={`pb-2 ${activeTab === "riwayat" ? "border-b-2 border-purple-500 text-purple-600" : "text-gray-600 hover:text-black"}`}>
            Riwayat Kunjungan
          </button>

          <button onClick={() => setActiveTab("resep")} className={`pb-2 ${activeTab === "resep" ? "border-b-2 border-purple-500 text-purple-600" : "text-gray-600 hover:text-black"}`}>
            Resep & Obat
          </button>

          <button onClick={() => setActiveTab("lab")} className={`pb-2 ${activeTab === "lab" ? "border-b-2 border-purple-500 text-purple-600" : "text-gray-600 hover:text-black"}`}>
            Hasil Lab
          </button>

          <button onClick={() => setActiveTab("pembayaran")} className={`pb-2 ${activeTab === "pembayaran" ? "border-b-2 border-purple-500 text-purple-600" : "text-gray-600 hover:text-black"}`}>
            Pembayaran
          </button>
        </div>

        {/* Tabs */}
        <div>
          {/* Konten Tab: Informasi Pribadi */}
          <div className="mt-4">
            {/* Informasi Pribadi */}
            {activeTab === "info" && (
              <div className="grid grid-cols-3 gap-6 text-sm mb-4">
                <div className="space-y-1.5">
                  <h4 className="font-semibold">Data Pribadi</h4>
                  <p>NIK: {pasien.nik}</p>
                  <p>Tanggal Lahir: {pasien.tglLahir}</p>
                  <p>Jenis Kelamin: {pasien.gender}</p>
                  <p>Alamat: {pasien.alamat}</p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-semibold">Kontak Darurat</h4>
                  <p>Nama: {pasien.kontakDarurat.nama}</p>
                  <p>Hubungan: {pasien.kontakDarurat.hubungan}</p>
                  <p>No. Telp: {pasien.kontakDarurat.telepon}</p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-semibold">Informasi Medis</h4>
                  <div className="flex gap-2 flex-wrap">
                    {pasien.riwayatPenyakit.map((penyakit, i) => (
                      <span key={i} className="border px-3 py-1 rounded-md text-gray-700 bg-gray-100 text-xs">
                        {penyakit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* Konten Tab: Riwayat Kunjungan */}
            {activeTab === "riwayat" && (
              <div className="gap-6 text-sm mb-3">
                <div>
                  <h3 className="font-semibold">Hipertensi Stage 1</h3>
                </div>
                <div className="grid grid-cols-6 font-semibold text-xs mt-2">
                  <p>10 Desember 2024</p>
                  <p>09:00</p>
                  <p>Dr. Sarah Wahyuni</p>
                </div>
                <div className="grid grid-cols-3 gap-6 text-sm mt-8">
                  <div>
                    <h4 className="font-semibold mb-2">Keluhan</h4>
                    <p>Sakit Kepala yang Berkelanjutan</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Diagnosa</h4>
                    <p>Hipertensi Stage 1</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Tindakan</h4>
                    <p>Pemeriksaan tekanan darah, konseling gaya hidup</p>
                  </div>
                </div>
              </div>
            )}

            {/* Konten Tab: Resep dan Obat */}
            {activeTab === "resep" && (
              <div className="text-sm mb-3">
                <div className="max-h-64 overflow-y-auto divide-y divide-gray-200  rounded-lg">
                  {/* Obat 1 */}
                  <div className="p-4">
                    <h3 className="font-semibold text-base">Amlodipine 5mg</h3>
                    <p className="text-xs text-gray-600 mb-3">Diresepkan pada: 10 Desember 2024</p>

                    <div className="grid grid-cols-4 gap-6 text-sm">
                      <div>
                        <h4 className="mb-1 text-xs text-gray-500">Dosis</h4>
                        <p className="font-semibold">1x1 Tablet</p>
                      </div>

                      <div>
                        <h4 className="mb-1 text-xs text-gray-500">Waktu Konsumsi</h4>
                        <p className="font-semibold">Pagi Hari Setelah Makan</p>
                      </div>

                      <div className="col-span-2">
                        <h4 className="mb-1 text-xs text-gray-500">Tindakan</h4>
                        <p className="font-semibold">Pemeriksaan tekanan darah, konseling gaya hidup</p>
                      </div>
                    </div>
                  </div>

                  {/* Obat 2 */}
                  <div className="p-4">
                    <h3 className="font-semibold text-base">Metformin 500mg</h3>
                    <p className="text-xs text-gray-600 mb-3">Diresepkan pada: 8 Desember 2024</p>

                    <div className="grid grid-cols-4 gap-6 text-sm">
                      <div>
                        <h4 className="mb-1 text-xs text-gray-500">Dosis</h4>
                        <p className="font-semibold">2x1 Tablet</p>
                      </div>

                      <div>
                        <h4 className="mb-1 text-xs text-gray-500">Waktu Konsumsi</h4>
                        <p className="font-semibold">Pagi dan Malam Setelah Makan</p>
                      </div>

                      <div className="col-span-2">
                        <h4 className="mb-1 text-xs text-gray-500">Tindakan</h4>
                        <p className="font-semibold">Kontrol gula darah rutin</p>
                      </div>
                    </div>
                  </div>

                  {/* Obat 3 */}
                  <div className="p-4">
                    <h3 className="font-semibold text-base">Metformin 500mg</h3>
                    <p className="text-xs text-gray-600 mb-3">Diresepkan pada: 8 Desember 2024</p>

                    <div className="grid grid-cols-4 gap-6 text-sm">
                      <div>
                        <h4 className="mb-1 text-xs text-gray-500">Dosis</h4>
                        <p className="font-semibold">2x1 Tablet</p>
                      </div>

                      <div>
                        <h4 className="mb-1 text-xs text-gray-500">Waktu Konsumsi</h4>
                        <p className="font-semibold">Pagi dan Malam Setelah Makan</p>
                      </div>

                      <div className="col-span-2">
                        <h4 className="mb-1 text-xs text-gray-500">Tindakan</h4>
                        <p className="font-semibold">Kontrol gula darah rutin</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Konten Tab: Hasil Lab */}
            {activeTab === "lab" && (
              <div className="text-sm mb-3">
                {/* Bungkus hasil lab */}
                <div className="max-h-64 overflow-y-auto divide-y divide-gray-200 rounded-lg">
                  {/* Pemeriksaan 1 */}
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-gray-800">Pemeriksaan Darah Lengkap</h3>
                    <p className="text-xs text-gray-500 mb-3">10 Des 2024</p>

                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b text-gray-600">
                          <th className="pb-2">Parameter</th>
                          <th className="pb-2">Hasil</th>
                          <th className="pb-2">Nilai Normal</th>
                          <th className="pb-2">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b">
                          <td className="py-2">Hemoglobin</td>
                          <td className="py-2 font-semibold">14.2 g/dL</td>
                          <td className="py-2">13–17 g/dL</td>
                          <td className="py-2">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Normal</span>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Leukosit</td>
                          <td className="py-2 font-semibold">7.500 /uL</td>
                          <td className="py-2">4000–10.000 /uL</td>
                          <td className="py-2">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Normal</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2">Gula Darah Puasa</td>
                          <td className="py-2 font-semibold">110 mg/dL</td>
                          <td className="py-2">70–100 mg/dL</td>
                          <td className="py-2">
                            <span className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-xs font-medium">Tinggi</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Pemeriksaan 2 (dummy tambahan biar bisa di-scroll) */}
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-gray-800">Tes Urin Lengkap</h3>
                    <p className="text-xs text-gray-500 mb-3">8 Nov 2024</p>

                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b text-gray-600">
                          <th className="pb-2">Parameter</th>
                          <th className="pb-2">Hasil</th>
                          <th className="pb-2">Nilai Normal</th>
                          <th className="pb-2">Status</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr className="border-b">
                          <td className="py-2">pH Urin</td>
                          <td className="py-2 font-semibold">6.5</td>
                          <td className="py-2">5.0–8.0</td>
                          <td className="py-2">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Normal</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2">Protein</td>
                          <td className="py-2 font-semibold">Negatif</td>
                          <td className="py-2">Negatif</td>
                          <td className="py-2">
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Normal</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Transaction List */}
          {activeTab === "pembayaran" && (
            <div className="text-sm mb-3">
              <div className="max-h-64 overflow-y-auto divide-y divide-gray-200 rounded-lg">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Transaksi</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jenis Layanan</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dokter/Unit</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Biaya</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metode</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTransaksi.map((transaksi) => (
                      <tr key={transaksi.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{transaksi.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          <div>{transaksi.tanggal}</div>
                          <div className="text-xs text-gray-500">{transaksi.waktu}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{transaksi.jenis}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{transaksi.dokter}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{formatRupiah(transaksi.biaya)}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${transaksi.status === "Lunas" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}>{transaksi.status}</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{transaksi.metodeBayar}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-800 font-medium">Detail</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 text-sm">Edit Data</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPasien;
