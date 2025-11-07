import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, Filter, Eye, Edit2, ChevronLeft, ChevronRight } from "lucide-react";

const JadwalAppointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2024, 11, 20)); // Default: 20 Desember 2024
  const [showPicker, setShowPicker] = useState(false);

  const appointments = [
    {
      id: 1,
      time: "08:00",
      patient: "Budi Santoso",
      status: "Confirmed",
      consultation: "Konsultasi - Dr. Hitler",
      type: "Kontrol Tekanan Darah",
      recordNumber: "RM-2024-001",
      phone: "0812-3456-7890",
      duration: "60 Menit",
    },
    {
      id: 2,
      time: "09:00",
      patient: "Rudi Hermawan",
      status: "Checked-in",
      consultation: "Pemeriksaan Rutin - Dr. Hitler",
      type: "Follow Up Diabetes",
      recordNumber: "RM-2024-002",
      phone: "0812-9876-5432",
      duration: "30 Menit",
    },
    {
      id: 3,
      time: "09:30",
      patient: "Budi Santoso",
      status: "Checked-in",
      consultation: "Pemeriksaan Rutin - Dr. Hitler",
      type: "Kontrol Tekanan Darah",
      recordNumber: "RM-2024-003",
      phone: "0812-1111-2222",
      duration: "45 Menit",
    },
  ];

  const formatDate = (date) => {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const changeDate = (days) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "text-purple-600 bg-purple-50";
      case "Checked-in":
        return "text-green-600 bg-green-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Jadwal dan Appointment</h1>
          <p className="text-gray-600">Kelola jadwal dokter dan appointment pasien</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">Total Hari Ini</p>
            <p className="text-4xl font-bold text-gray-900 mb-1">24</p>
            <p className="text-sm text-gray-500">Pasien</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">Confirmed</p>
            <p className="text-4xl font-bold text-gray-900 mb-1">15</p>
            <p className="text-sm text-gray-500">Pasien</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
            <p className="text-sm text-gray-600 mb-2">Checked-in</p>
            <p className="text-4xl font-bold text-gray-900 mb-1">5</p>
            <p className="text-sm text-gray-500">Pasien</p>
          </div>
        </div>

        {/* Date Navigator and Filter */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6 border border-gray-100 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button onClick={() => changeDate(-1)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-900">{formatDate(selectedDate)}</span>
              </div>

              <button onClick={() => changeDate(1)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Filter Button */}
            <div className="relative">
              <button onClick={() => setShowPicker(!showPicker)} className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" />
                <span className="font-medium">Filter</span>
              </button>

              {showPicker && (
                <div className="absolute right-0 mt-2 z-50 bg-white border rounded-lg shadow-lg">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => {
                      setSelectedDate(date);
                      setShowPicker(false);
                    }}
                    inline
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Appointments List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-pink-50 px-6 py-4 border-b border-pink-100">
            <h2 className="font-semibold text-gray-900">Jadwal Hari Ini</h2>
          </div>

          <div className="divide-y divide-gray-100">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex gap-6 flex-1">
                    {/* Time */}
                    <div className="w-16">
                      <p className="font-semibold text-gray-900">{appointment.time}</p>
                    </div>

                    {/* Patient Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{appointment.patient}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>{appointment.status}</span>
                      </div>

                      <p className="text-gray-700 font-medium mb-1">{appointment.consultation}</p>
                      <p className="text-gray-600 text-sm mb-3">{appointment.type}</p>

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{appointment.recordNumber}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{appointment.phone}</span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                        <span>{appointment.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Lihat Detail">
                      <Eye className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Edit">
                      <Edit2 className="w-5 h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JadwalAppointment;
