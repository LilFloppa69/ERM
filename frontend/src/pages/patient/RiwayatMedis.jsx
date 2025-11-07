import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, ChevronDown } from "lucide-react";

const medicalData = [
  {
    title: "Kontrol Rutin",
    date: "30 Lol 1900 BC",
    time: "25:00",
    doctor: "Dr. Adolf",
    specialty: "Dokter Gigi",
    complaint: "Nyeri di Gigi Bagian Atas",
    diagnosis: "Karang Gigi",
    action: "Pemeriksaan Gigi dan Pembersihan Karang Gigi",
    result: {
      description: "Karang Gigi Hingga Akar",
      status: "Berat",
    },
  },
  {
    title: "Pemeriksaan Lab",
    date: "25 Lol 1900 BC",
    time: "13:00",
    doctor: "Dr. Gio",
    specialty: "Dokter Patologi",
    complaint: "Pemeriksaan Darah Rutin",
    diagnosis: "Anemia Ringan",
    action: "Pengambilan Sampel dan Analisa Darah",
    result: {
      description: "Hb Rendah",
      status: "Ringan",
    },
  },
  {
    title: "Konsultasi",
    date: "23 Lol 1900 BC",
    time: "21:00",
    doctor: "Dr. Gio",
    specialty: "Dokter Umum",
    complaint: "Sakit Kepala dan Pusing",
    diagnosis: "Migrain",
    action: "Konsultasi dan Pemberian Obat",
    result: {
      description: "Migrain Sisi Kiri",
      status: "Sedang",
    },
  },
  {
    title: "Berobat",
    date: "03 Lol 1900 BC",
    time: "19:00",
    doctor: "Dr. Nabila",
    specialty: "Dokter Umum",
    complaint: "Demam dan Batuk",
    diagnosis: "ISPA",
    action: "Pemeriksaan dan Pemberian Antibiotik",
    result: {
      description: "Infeksi Ringan",
      status: "Ringan",
    },
  },
];

const detailVariants = {
  closed: {
    height: 0,
    y: -10, // Mulai sedikit di atas untuk efek push ke atas saat collapse
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    height: "auto",
    y: 0, // Kembali ke posisi normal
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

export default function MedicalHistory() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="p-8 w-full">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800">Riwayat Medis</h2>
      <p className="text-gray-500 mt-1">Lihat seluruh riwayat dan kunjungan pemeriksaan anda</p>

      {/* Cards */}
      <div className="mt-6 space-y-4">
        {medicalData.map((item, index) => (
          <div key={index} className="rounded-2xl shadow-sm border border-gray-200 bg-white hover:shadow-md transition">
            {/* Card Header */}
            <div className="flex items-center justify-between p-5">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-xl text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 17v-6h6v6m2 4H7a2 2 0 
                      01-2-2V7a2 2 0 012-2h3V3h4v2h3a2 2 0 
                      012 2v12a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {item.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" /> {item.doctor}
                    </span>
                  </div>
                </div>
              </div>

              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="p-2 rounded-full hover:bg-gray-100 transition">
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Animated Detail */}
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  variants={detailVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  style={{ transformOrigin: "top" }} // Efek pull dari atas ke bawah
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-300 bg-gray-50 p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
                    {/* Informasi Kunjungan */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Informasi Kunjungan</h4>
                      <p>
                        <span className="font-medium">Dokter:</span> {item.doctor}
                        <br />
                        <span className="text-sm text-gray-500">{item.specialty}</span>
                      </p>
                      <p className="mt-3">
                        <span className="font-medium">Keluhan:</span> {item.complaint}
                      </p>
                      <p className="mt-1">
                        <span className="font-medium">Diagnosa:</span> {item.diagnosis}
                      </p>
                      <p className="mt-1">
                        <span className="font-medium">Tindakan:</span> {item.action}
                      </p>
                    </div>

                    {/* Hasil Pemeriksaan */}
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Hasil Pemeriksaan</h4>
                      <div className="border border-gray-300 rounded-xl p-4 bg-white shadow-sm">
                        <p className="text-gray-700">{item.result.description}</p>

                        <span
                          className={`inline-block mt-3 px-3 py-1 text-sm font-medium rounded-full
                                ${
                                  item.result.status === "Berat"
                                    ? "bg-red-100 text-red-600 border border-red-300"
                                    : item.result.status === "Sedang"
                                    ? "bg-yellow-100 text-yellow-700 border border-yellow-300"
                                    : "bg-green-100 text-green-700 border border-green-300"
                                }`}
                        >
                          {item.result.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
