import {
  Home,
  Users,
  CalendarDays,
  FlaskConical,
  Pill,
  CreditCard,
  User,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images.png";
import LogoutButton from "../components/LogoutButton";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menus = [
    { name: "Dashboard", path: "/home", icon: <Home size={22} /> },
    { name: "Data Pasien", path: "/pasien", icon: <Users size={22} /> },
    {
      name: "Jadwal & Appointment",
      path: "/jadwalappointment",
      icon: <CalendarDays size={22} />,
    },
    { name: "Hasil Lab", path: "/lab", icon: <FlaskConical size={22} /> },
    { name: "Obat", path: "/obat", icon: <Pill size={22} /> },
    {
      name: "Pembayaran",
      path: "/pembayaran",
      icon: <CreditCard size={22} />,
    },
    { name: "Stok Obat", path: "/stokobat", icon: <Pill size={22} /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
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
            {/* Hover effect circle */}
            <div className="absolute inset-0 rounded-full bg-blue-100 opacity-0 scale-0 group-hover:scale-125 group-hover:opacity-100 transition-all duration-500 ease-out"></div>

            {/* Logo */}
            <img
              src={Logo}
              alt="logo"
              className={`relative z-10 rounded-full object-cover transition-all duration-500 ${
                isExpanded ? "w-16 h-16" : "w-10 h-10"
              }`}
            />
          </div>

          {/* Clinic name */}
          {isExpanded && (
            <h1 className="ml-3 text-lg font-bold text-gray-800 whitespace-nowrap transition-all duration-500">
              KLINIK NAKITA
            </h1>
          )}
        </div>

        {/* Menu */}
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

          <LogoutButton
            className={`flex items-center gap-3 px-4 py-2 rounded-lg my-4 mx-16 transition-all duration-300`}
          />
        </nav>

        <div className="mx-4 mb-3 border-t border-gray-300"></div>

        {/* Profile */}
        <div className="mb-6">
          <Link
            to="/profiladmin"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg mx-2 transition-all duration-300 ${
              location.pathname === "/profiladmin"
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

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-10 h-10 rounded-full" />
          <h1 className="font-bold text-gray-800 text-lg">KLINIK NAKITA</h1>
        </div>

        {/* Hamburger Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-lg z-40 p-4 animate-slideDown">
          {menus.map((menu, index) => (
            <Link
              key={index}
              to={menu.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
                location.pathname === menu.path
                  ? "bg-blue-200 text-blue-700 font-semibold"
                  : "text-gray-600 hover:bg-blue-100"
              }`}
            >
              {menu.icon}
              <span className="text-sm">{menu.name}</span>
            </Link>
          ))}

          <div className="border-t border-gray-300 my-3"></div>

          <Link
            to="/profiladmin"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${
              location.pathname === "/profiladmin"
                ? "bg-blue-200 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-blue-100"
            }`}
          >
            <User size={22} />
            <span className="text-sm">Profil</span>
          </Link>

          <div className="mt-3">
            <LogoutButton className="flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
