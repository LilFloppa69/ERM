import { UserRound, CheckCircle, Clock, Mail } from "lucide-react";

export default function DashboardDokter() {
  const statistik = [
    { label: "Pasien Hari Ini", value: 12, icon: <UserRound className="text-blue-500 w-6 h-6" />, color: "bg-blue-50" },
    { label: "Konsultasi Selesai", value: 8, icon: <CheckCircle className="text-green-500 w-6 h-6" />, color: "bg-green-50" },
    { label: "Menunggu", value: 4, icon: <Clock className="text-yellow-500 w-6 h-6" />, color: "bg-yellow-50" },
    { label: "Pesan Baru", value: 3, icon: <Mail className="text-purple-500 w-6 h-6" />, color: "bg-purple-50" },
  ];

  const janjiTemu = [
    { nama: "Siti Nurhaliza", jenis: "Kontrol Rutin", waktu: "09:00", hari: "Hari Ini" },
    { nama: "Siti Nurhaliza", jenis: "Kontrol Rutin", waktu: "09:00", hari: "Hari Ini" },
    { nama: "Siti Nurhaliza", jenis: "Kontrol Rutin", waktu: "09:00", hari: "Hari Ini" },
  ];

  const notifikasi = [
    { pesan: "Hasil lab Ahmad Rizki sudah keluar", waktu: "5 Menit yang lalu" },
    { pesan: "Pasien baru: Linda Sari mendaftar", waktu: "15 Menit yang lalu" },
    { pesan: "Resep untuk Tono Wijaya telah dikirim", waktu: "30 Menit yang lalu" },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-gray-800">Beranda</h1>
      <p className="text-gray-500 mb-8">
        Selamat Datang, <span className="font-medium text-gray-700">dr. Aditya Hutagalung</span>
      </p>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {statistik.map((item, index) => (
          <div key={index} className={`flex items-center gap-3 p-4 rounded-xl border border-gray-300 shadow-sm ${item.color}`}>
            <div className="bg-white p-2 rounded-full shadow-sm">{item.icon}</div>
            <div>
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="text-2xl font-semibold text-gray-800">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Grid untuk Janji Temu & Notifikasi */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Janji Temu */}
        <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Janji Temu Berikutnya</h3>
          <div className="space-y-3">
            {janjiTemu.map((temu, index) => (
              <div key={index} className="flex justify-between items-center border border-gray-300 rounded-lg px-4 py-3 hover:bg-gray-50 transition">
                <div>
                  <p className="font-semibold text-gray-800">{temu.nama}</p>
                  <p className="text-sm text-gray-600">{temu.jenis}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-800">{temu.waktu}</p>
                  <p className="text-sm text-gray-600">{temu.hari}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifikasi */}
        <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-5">
          <h3 className="font-semibold text-gray-800 mb-4">Notifikasi Terbaru</h3>
          <ul className="space-y-3">
            {notifikasi.map((notif, index) => (
              <li key={index} className="flex justify-between items-start border-b border-gray-300 pb-2 last:border-none">
                <div className="flex items-start gap-2">
                  <span className="mt-1 w-2 h-2 bg-red-500 rounded-full"></span>
                  <p className="text-gray-800">{notif.pesan}</p>
                </div>
                <p className="text-sm text-gray-500 whitespace-nowrap">{notif.waktu}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
