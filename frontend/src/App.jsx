import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import NavbarAdmin from './components/NavbarAdmin';
import NavbarPasien from './components/NavbarPasien';
import NavbarDokter from './components/NavbarDokter';
import ProtectedRoute from './components/ProtectedRoute';
import ProtectedAdmin from './components/ProtectedAdmin';

// Register / Login
import Register from './pages/Register';
import Login from './pages/Login';
import Unauthorized from './pages/Unauthorized';

// Admin Page
import HomeAdmin from './pages/admin/Home';
import DataPasien from './pages/admin/DataPasien';
import JadwalAppointment from './pages/admin/JadwalAppointment';
import DetailPasien from './pages/admin/DetailPasien';
import ProfilAdmin from './pages/admin/ProfilAdmin';
import StokObat from './pages/admin/StokObat';

// Patient Page
import DashboardPasien from './pages/patient/DashboardPasien';
import JadwalPraktikPasien from './pages/patient/JadwalPraktik';
import DetailJadwal from './pages/patient/DetailJadwal';
import RiwayatMedis from './pages/patient/RiwayatMedis';
import HasilLabPasien from './pages/patient/HasilLabPasien';
import ObatPasien from './pages/patient/ObatPasien';
import ProfilPasien from './pages/patient/ProfilPasien';

// Doctor Page
import DashboardDokter from './pages/doctor/DashboardDokter';
import JanjiTemu from './pages/doctor/JanjiTemu';
import DataPasien2 from './pages/doctor/DataPasien2';
import RekamMedis from './pages/doctor/RekamMedis';
import TulisResep from './pages/doctor/TulisResep';
import JadwalPraktek from './pages/doctor/JadwalPraktek';
import ProfilDokter from './pages/doctor/ProfilDokter';

export default function App() {

  const isPatientPage = location.pathname.startsWith('/patient');
  const isDoctorPage = location.pathname.startsWith('/doctor');
  const isRegisterPage = location.pathname.startsWith('/register');
  const isLoginPage = location.pathname.startsWith('/login');

  const hideNavbar = isRegisterPage || isLoginPage;

  return (
    <Routes>
      {/* ===== LOGIN / REGISTER ===== */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      
      {/* ===== ADMIN ===== */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={
            <ProtectedAdmin>
              <NavbarAdmin />
            </ProtectedAdmin>
          }
        >
          <Route index element={<HomeAdmin />} />
          <Route path="home" element={<HomeAdmin />} />
          <Route path="pasien" element={<DataPasien />} />
          <Route path="jadwalappointment" element={<JadwalAppointment />} />
          <Route path="profiladmin" element={<ProfilAdmin />} />
          <Route path="stokobat" element={<StokObat />} />
        </Route>
      </Route>

      {/* ===== PASIEN ===== */}
      <Route
        path="/patient"
        element={
          <ProtectedRoute>
            <NavbarPasien />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPasien />} />
        <Route path="dashboardpasien" element={<DashboardPasien />} />
        <Route path="jadwal" element={<JadwalPraktikPasien />} />
        <Route path="detail-jadwal/:id" element={<DetailJadwal />} />
        <Route path="riwayat" element={<RiwayatMedis />} />
        <Route path="lab" element={<HasilLabPasien />} />
        <Route path="obat" element={<ObatPasien />} />
        <Route path="profilpasien" element={<ProfilPasien />} />
      </Route>

      {/* ===== DOKTER ===== */}
      <Route
        path="/doctor"
        element={
          <ProtectedRoute>
            <NavbarDokter />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardDokter />} />
        <Route path="dashboarddokter" element={<DashboardDokter />} />
        <Route path="janjitemu" element={<JanjiTemu />} />
        <Route path="datapasien2" element={<DataPasien2 />} />
        <Route path="rekammedis" element={<RekamMedis />} />
        <Route path="tulisresep" element={<TulisResep />} />
        <Route path="jadwalpraktek" element={<JadwalPraktek />} />
        <Route path="profildokter" element={<ProfilDokter />} />
      </Route>
    </Routes>
  );
}
