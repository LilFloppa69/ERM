import { Calendar, Clock, User, Pill } from "lucide-react";

export default function ObatPasien() {
  const prescription = {
    penyakit: "Malaria",
    tanggal: "30 Lol 1900 BC",
    waktu: "25:00",
    dokter: "Dr. Hitler",
    obat: {
      nama: "Doxycycline 100 mg",
      jumlah: 10,
      dosis: "1 x 1 Tablet",
      waktuKonsumsi: "Siang hari setelah makan",
      sisa: 8,
    },
  };

  const { obat } = prescription;

  const progress = (obat.sisa / obat.jumlah) * 100;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-800">Resep dan Obat</h1>
      <p className="text-gray-500 mt-1 mb-6">Pantau Resep dan Obat Anda</p>

      {/* Reminder */}
      <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6 shadow-sm">
        <h3 className="font-semibold text-green-700 flex items-center gap-2">💊 Reminder untuk minum Obat!</h3>
        <p className="text-sm mt-1">Anda memiliki 1 obat yang perlu diminum hari ini</p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-green-100 p-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{prescription.penyakit}</h2>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-1">
              <div className="flex items-center gap-1">
                <Calendar size={15} />
                <span>{prescription.tanggal}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={15} />
                <span>{prescription.waktu}</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={15} />
                <span>{prescription.dokter}</span>
              </div>
            </div>
          </div>
          <button className="text-gray-600 hover:text-gray-800"></button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Daftar Obat</h3>

          <div className="border rounded-xl p-5 shadow-sm bg-white">
            <div className="flex items-start gap-3 mb-3">
              <Pill size={22} className="text-green-600 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-800">{obat.nama}</p>
                <p className="text-sm text-gray-600">{obat.jumlah} Kapsul</p>
              </div>
            </div>

            <div className="grid grid-cols-2 text-sm mb-4">
              <div>
                <p className="font-semibold text-gray-800">Dosis:</p>
                <p className="text-gray-600">{obat.dosis}</p>
              </div>
              <div>
                <p className="font-semibold text-gray-800">Waktu Konsumsi:</p>
                <p className="text-gray-600">{obat.waktuKonsumsi}</p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mb-4">
              <p className="font-semibold text-gray-800 mb-1">Sisa Obat:</p>
              <div className="relative w-full h-5 bg-gray-100 rounded-full overflow-hidden">
                <div className="absolute left-0 top-0 h-full bg-green-500 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
              </div>
              <p className="text-right text-sm text-gray-700 mt-1">
                {obat.sisa}/{obat.jumlah}
              </p>
            </div>

            {/* Button */}
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2.5 rounded-xl font-semibold shadow">Minum</button>
          </div>
        </div>
      </div>
    </div>
  );
}
