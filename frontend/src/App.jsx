import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import NavbarAdmin from "./components/NavbarAdmin";
import NavbarPasien from "./components/NavbarPasien";
import NavbarDokter from "./components/NavbarDokter";

// Register / Login
import Register from "./pages/Register";
import Login from "./pages/Login";

// Admin Page
import HomeAdmin from "./pages/admin/Home";
import DataPasien from "./pages/admin/DataPasien";
import JadwalAppointment from "./pages/admin/JadwalAppointment";
import DetailPasien from "./pages/admin/DetailPasien";
import ProfilAdmin from "./pages/admin/ProfilAdmin";
import StokObat from "./pages/admin/StokObat";

// Patient Page
import DashboardPasien from "./pages/patient/DashboardPasien";
import JadwalPraktikPasien from "./pages/patient/JadwalPraktik";
import DetailJadwal from "./pages/patient/DetailJadwal";
import RiwayatMedis from "./pages/patient/RiwayatMedis";
import HasilLabPasien from "./pages/patient/HasilLabPasien";
import ObatPasien from "./pages/patient/ObatPasien";
import ProfilPasien from "./pages/patient/ProfilPasien";

// Doctor Page
import DashboardDokter from "./pages/doctor/DashboardDokter";
import JanjiTemu from "./pages/doctor/JanjiTemu";
import DataPasien2 from "./pages/doctor/DataPasien2";
import RekamMedis from "./pages/doctor/RekamMedis";
import TulisResep from "./pages/doctor/TulisResep";
import JadwalPraktek from "./pages/doctor/JadwalPraktek";
import ProfilDokter from "./pages/doctor/ProfilDokter";

export default function App() {
    const location = useLocation();

    const isPatientPage = location.pathname.startsWith("/patient");
    const isDoctorPage = location.pathname.startsWith("/doctor");
    const isRegisterPage = location.pathname.startsWith("/register");
    const isLoginPage = location.pathname.startsWith("/login");

    const hideNavbar = isRegisterPage || isLoginPage;

    return (
        <div className="flex h-screen">
            {!hideNavbar &&
                (isPatientPage ? (
                    <NavbarPasien />
                ) : isDoctorPage ? (
                    <NavbarDokter />
                ) : (
                    <NavbarAdmin />
                ))}

            {/* ===== KONTEN UTAMA ===== */}
            <div className="grow bg-gray-50 p-4 sm:p-6 overflow-y-auto scroll-smooth">
                <Routes>
                    {/* ===== LOGIN / REGISTER ===== */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* ===== ADMIN ===== */}
                    <Route path="/home" element={<HomeAdmin />} />
                    <Route path="/pasien" element={<DataPasien />} />
                    <Route path="/datapasien/:id" element={<DetailPasien />} />
                    <Route
                        path="/jadwalappointment"
                        element={<JadwalAppointment />}
                    />
                    <Route path="/profiladmin" element={<ProfilAdmin />} />
                    <Route path="/stokobat" element={<StokObat />} />

                    {/* ===== PASIEN ===== */}
                    <Route
                        path="/patient/dashboardpasien"
                        element={<DashboardPasien />}
                    />
                    <Route
                        path="/patient/jadwal"
                        element={<JadwalPraktikPasien />}
                    />
                    <Route
                        path="/patient/detail-jadwal/:id"
                        element={<DetailJadwal />}
                    />
                    <Route path="/patient/riwayat" element={<RiwayatMedis />} />
                    <Route path="/patient/lab" element={<HasilLabPasien />} />
                    <Route path="/patient/obat" element={<ObatPasien />} />
                    <Route
                        path="/patient/profilpasien"
                        element={<ProfilPasien />}
                    />

                    {/* ===== DOKTER ===== */}
                    <Route
                        path="/doctor/dashboarddokter"
                        element={<DashboardDokter />}
                    />
                    <Route path="/doctor/janjitemu" element={<JanjiTemu />} />
                    <Route
                        path="/doctor/datapasien2"
                        element={<DataPasien2 />}
                    />
                    <Route path="/doctor/rekammedis" element={<RekamMedis />} />
                    <Route path="/doctor/tulisresep" element={<TulisResep />} />
                    <Route
                        path="/doctor/jadwalpraktek"
                        element={<JadwalPraktek />}
                    />
                    <Route
                        path="/doctor/profildokter"
                        element={<ProfilDokter />}
                    />
                </Routes>
            </div>
        </div>
    );
}
