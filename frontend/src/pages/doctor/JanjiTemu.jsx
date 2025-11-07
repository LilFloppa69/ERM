import React, { useState } from "react";

export default function JanjiTemu() {
  const [selectedDate, setSelectedDate] = useState("2024-01-15");
  const [selectedStatus, setSelectedStatus] = useState("Semua Status");

  const data = [
    {
      time: "09:00",
      name: "Siti Nurhaliza",
      phone: "0812-3456-7890",
      complaint: "Kontrol rutin diabetes",
      status: "Menunggu",
    },
    {
      time: "09.30",
      name: "Jeffrey Epstein",
      phone: "0813-4567-8901",
      complaint: "Sakit kepala dan demam",
      status: "Selesai",
    },
    {
      time: "10:00",
      name: "Jeffrey Epstein",
      phone: "0813-4567-8901",
      complaint: "Pemeriksaan kesehatan rutin",
      status: "Menunggu",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Menunggu":
        return "bg-blue-100 text-blue-600";
      case "Selesai":
        return "bg-green-100 text-green-600";
      case "Batal":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const filteredData = selectedStatus === "Semua Status" ? data : data.filter((item) => item.status === selectedStatus);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-1">Janji Temu</h2>
      <p className="text-gray-600 mb-6">Selamat Datang, dr. Aditya Hutagalung</p>

      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Daftar Janji Temu</h3>

          <div className="flex items-center gap-3">
            <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Semua Status</option>
              <option>Menunggu</option>
              <option>Selesai</option>
              <option>Batal</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead>
              <tr className="bg-gray-100 text-gray-700 font-semibold">
                <th className="py-3 px-4 rounded-tl-xl">Waktu</th>
                <th className="py-3 px-4">Pasien</th>
                <th className="py-3 px-4">Keluhan</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 rounded-tr-xl">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="border-t border-gray-300 hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-4">{item.time}</td>
                  <td className="py-3 px-4">
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    <p className="text-xs text-gray-500">{item.phone}</p>
                  </td>
                  <td className="py-3 px-4">{item.complaint}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(item.status)}`}>{item.status}</span>
                  </td>
                  <td className="py-3 px-4 flex gap-3 text-sm">
                    <button className="text-green-600 font-medium hover:underline">Konfirmasi</button>
                    <button className="text-red-500 font-medium hover:underline">Batalkan</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
