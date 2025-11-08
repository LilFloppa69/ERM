import {
  Home,
  Users,
  CalendarDays,
  FlaskConical,
  Pill,
  User,
  ClipboardClock,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images.png";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menus = [
    { name: "Dashboard", path: "/patient/dashboardpasien", icon: <Home size={22} /> },
    { name: "Jadwal Praktik", path: "/patient/jadwal", icon: <CalendarDays size={22} /> },
    { name: "Riwayat Medis", path: "/patient/riwayat", icon: <ClipboardClock size={22} /> },
    { name: "Hasil Lab", path: "/patient/lab", icon: <FlaskConical size={22} /> },
    { name: "Obat", path: "/patient/obat", icon: <Pill size={22} /> },
  ];

  return (
    <>
      {/* ====== DESKTOP SIDEBAR ====== */}
      <div
        className={`hidden md:flex bg-white shadow-md h-screen flex-col transition-all duration-500 ease-in-out ${
          isExpanded ? "w-60" : "w-20"
        }`}
      >
        {/* Logo Section */}
        <div className="relative flex items-center justify-center py-5">
          <div
            className="relative group cursor-pointer transition-all duration-500"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div
              className="absolute inset-0 rounded-full bg-blue-100 opacity-0 scale-0 
                group-hover:scale-125 group-hover:opacity-100 transition-all duration-500 ease-out"
            ></div>

            <img
              src={Logo}
              alt="logo"
              className={`relative z-10 rounded-full object-cover transition-all duration-500 ${
                isExpanded ? "w-16 h-16" : "w-10 h-10"
              }`}
            />
          </div>

          {isExpanded && (
            <h1 className="ml-3 text-lg font-bold text-gray-800 whitespace-nowrap transition-all duration-500">
              KLINIK NAKITA
            </h1>
          )}
        </div>

        {/* Menu Section */}
        <nav className="flex-1 mt-4 space-y-2">
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg my-4 mx-2 transition-all duration-300 ${
                location.pathname === menu.path
                  ? "bg-blue-200 text-blue-700 font-semibold"
                  : "text-gray-600 hover:bg-blue-100"
              }`}
            >
              {menu.icon}
              <span
                className={`text-sm transition-all duration-300 ease-in-out ${
                  isExpanded
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-3 hidden"
                }`}
              >
                {menu.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Border separator */}
        <div className="mx-4 mb-3 border-t border-gray-300"></div>

        {/* Profil Section */}
        <div className="mb-6">
          <Link
            to="/patient/profilpasien"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg mx-2 transition-all duration-300 ${
              location.pathname === "/patient/profilpasien"
                ? "bg-blue-200 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-blue-100"
            }`}
          >
            <User size={22} />
            <span
              className={`text-sm transition-all duration-300 ease-in-out ${
                isExpanded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-3 hidden"
              }`}
            >
              Profil
            </span>
          </Link>
        </div>
      </div>

      {/* ====== MOBILE NAVBAR ====== */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo dan Judul */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
            <h1 className="text-lg font-bold text-gray-800">KLINIK NAKITA</h1>
          </div>

          {/* Tombol Hamburger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="bg-white border-t border-gray-200 shadow-md">
            {menus.map((menu, index) => (
              <Link
                key={index}
                to={menu.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 border-b border-gray-100 transition-all duration-200 ${
                  location.pathname === menu.path
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {menu.icon}
                <span className="text-sm">{menu.name}</span>
              </Link>
            ))}

            {/* Profil Pasien */}
            <Link
              to="/patient/profilpasien"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 transition-all duration-200 ${
                location.pathname === "/patient/profilpasien"
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <User size={22} />
              <span className="text-sm">Profil</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
