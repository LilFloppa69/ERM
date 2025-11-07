import React from "react";
import { Filter, RefreshCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function JadwalPraktikPasien() {
  const navigate = useNavigate();
  const jadwalDokter = [
    {
      nama: "dr. Gio",
      dokter: "Dokter Umum",
      jadwal: "Senin–Kamis, 09.00 – 17.00",
      status: "Offline",
    },
    {
      nama: "dr. Hitler",
      dokter: "Dokter Gigi",
      jadwal: "Rabu–Jumat, 09.00 – 17.00",
      status: "Online",
    },
    {
      nama: "dr. Adolf",
      dokter: "Dokter Gigi",
      jadwal: "Rabu–Jumat, 09.00 – 17.00",
      status: "Online",
    },
  ];

  const getStatusColor = (status) => {
    return status === "Online" ? "text-green-500" : "text-red-500";
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Jadwal Praktik Dokter</h1>
          <button className="flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-100 transition">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left border-collapse">
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-3 px-4">Nama</th>
                <th className="py-3 px-4">Dokter</th>
                <th className="py-3 px-4">Jadwal</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {jadwalDokter.map((item, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{item.nama}</td>
                  <td className="py-3 px-4">{item.dokter}</td>
                  <td className="py-3 px-4">{item.jadwal}</td>
                  <td className={`py-3 px-4 font-medium ${getStatusColor(item.status)}`}>{item.status}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => navigate(`/patient/detail-jadwal/${item.id}`)} // arahkan ke halaman detail
                      className="p-2 bg-blue-100 rounded-md hover:bg-blue-200 transition"
                    >
                      <RefreshCcw className="w-4 h-4 text-blue-700" />
                    </button>
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
