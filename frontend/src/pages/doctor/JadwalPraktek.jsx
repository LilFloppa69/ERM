import { useState } from "react";

export default function JadwalPraktek() {
  const [jadwalList, setJadwalList] = useState([
    { hari: "Senin", pagi: "08:00 - 12:00", sore: "14:00 - 17:00", status: "Aktif" },
    { hari: "Selasa", pagi: "08:00 - 12:00", sore: "14:00 - 17:00", status: "Aktif" },
    { hari: "Rabu", pagi: "08:00 - 12:00", sore: "14:00 - 17:00", status: "Libur" },
  ]);

  const toggleStatus = (index) => {
    const newList = [...jadwalList];
    newList[index].status =
      newList[index].status === "Aktif" ? "Nonaktif" : "Aktif";
    setJadwalList(newList);
  };

  const tambahJadwal = () => {
    setJadwalList([
      ...jadwalList,
      { hari: "Hari Baru", pagi: "08:00 - 12:00", sore: "14:00 - 17:00", status: "Aktif" },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Jadwal Praktek</h1>
          <p className="text-gray-600">
            Selamat Datang, <span className="font-medium">Dr. Nabila Huwaida</span>
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="font-semibold">Nabila Huwaida</p>
            <p className="text-sm text-gray-500">Dokter</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        </div>
      </div>

      {/* Card utama */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Jadwal Praktek</h2>
          <button
            onClick={tambahJadwal}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Tambah Jadwal
          </button>
        </div>

        {/* Grid jadwal */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {jadwalList.map((jadwal, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-lg">{jadwal.hari}</h3>
                  <span
                    className={`text-sm px-3 py-1 rounded-full ${
                      jadwal.status === "Aktif"
                        ? "bg-green-100 text-green-700"
                        : jadwal.status === "Libur"
                        ? "bg-red-100 text-red-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {jadwal.status}
                  </span>
                </div>
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-medium">Pagi:</span> {jadwal.pagi}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-medium">Sore:</span> {jadwal.sore}
                </p>
              </div>

              <button
                onClick={() => toggleStatus(index)}
                className={`mt-4 rounded-lg py-2 text-white font-medium transition ${
                  jadwal.status === "Aktif"
                    ? "bg-purple-600 hover:bg-purple-700"
                    : "bg-gray-500 hover:bg-gray-600"
                }`}
              >
                {jadwal.status === "Aktif" ? "Nonaktifkan" : "Aktifkan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
