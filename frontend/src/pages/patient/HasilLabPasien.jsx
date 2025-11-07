import { FileDown, Calendar, Clock, User } from "lucide-react";

export default function HasilLabPasien() {
  const results = [
    { parameter: "Kolesterol Total", hasil: 180, satuan: "mg/dl", normal: "<200", status: "Sedikit Tinggi" },
    { parameter: "HDL Kolesterol", hasil: 55, satuan: "mg/dl", normal: ">40", status: "Normal" },
    { parameter: "LDL Kolesterol", hasil: 110, satuan: "mg/dl", normal: "<100", status: "Sedikit Tinggi" },
    { parameter: "Trigliserida", hasil: 140, satuan: "mg/dl", normal: "<150", status: "Normal" },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Sedikit Tinggi":
        return "bg-green-100 text-green-700 border border-green-300";
      case "Normal":
        return "bg-green-200 text-green-800 border border-green-400";
      default:
        return "bg-gray-100 text-gray-700 border border-gray-300";
    }
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold text-gray-800">Hasil Lab</h1>
      <p className="text-gray-500 mt-1 mb-6">Pantau hasil pemeriksaan laboratorium Anda</p>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-green-100 p-4 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Profil Lipid</h2>
            <div className="flex items-center gap-4 text-gray-600 text-sm mt-1">
              <div className="flex items-center gap-1">
                <Calendar size={15} />
                <span>30 Lol 1900 BC</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={15} />
                <span>25:00</span>
              </div>
              <div className="flex items-center gap-1">
                <User size={15} />
                <span>Dr. Gio</span>
              </div>
            </div>
          </div>
          <button className="text-gray-600 hover:text-gray-800"></button>
        </div>

        {/* Table */}
        <div className="p-6 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="text-gray-600 border-b border-gray-400">
                <th className="pb-2">Parameter</th>
                <th className="pb-2">Hasil</th>
                <th className="pb-2">Satuan</th>
                <th className="pb-2">Nilai Normal</th>
                <th className="pb-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {results.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-300 last:border-none">
                  <td className="py-2 text-gray-800">{row.parameter}</td>
                  <td className="py-2 text-gray-800">{row.hasil}</td>
                  <td className="py-2 text-gray-800">{row.satuan}</td>
                  <td className="py-2 text-gray-800">{row.normal}</td>
                  <td className="py-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusStyle(row.status)}`}>{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6">
            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg shadow">
              <FileDown size={16} />
              Download Hasil PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
