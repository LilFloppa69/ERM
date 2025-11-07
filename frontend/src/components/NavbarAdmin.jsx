import {
    Home,
    Users,
    CalendarDays,
    FlaskConical,
    Pill,
    CreditCard,
    User,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images.png";

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
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
        <div
            className={`bg-white shadow-md h-screen flex flex-col transition-all duration-500 ease-in-out ${
                isExpanded ? "w-60" : "w-20"
            }`}
        >
            {/* Logo Section (jadi tombol collapse/expand) */}
            <div className="relative flex items-center justify-center py-5">
                <div
                    className="relative group cursor-pointer transition-all duration-500"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {/* Efek hover bulatan */}
                    <div
                        className="absolute inset-0 rounded-full bg-blue-100 opacity-0 scale-0 
                          group-hover:scale-125 group-hover:opacity-100 transition-all duration-500 ease-out"
                    ></div>

                    {/* Logo */}
                    <img
                        src={Logo}
                        alt="logo"
                        className={`relative z-10 rounded-full object-cover transition-all duration-500 ${
                            isExpanded ? "w-16 h-16" : "w-10 h-10"
                        }`}
                    />
                </div>

                {/* Nama Klinik */}
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
    );
};

export default Navbar;
