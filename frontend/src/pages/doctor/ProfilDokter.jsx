import React from "react";
import { Mail, Phone, Building2 } from "lucide-react";

const ProfileDokter = () => {
    return (
        <div className="w-full bg-white flex flex-col items-start justify-start">
            {/* Header Profil */}
            <div className="flex flex-col items-center w-full border-b bg-blue-100 border-gray-200 py-20">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/387/387561.png"
                    alt="Dokter"
                    className="w-24 h-24 rounded-full border-2 border-gray-200 object-cover mb-1 p-2"
                />
                <h1 className="text-xl p-1 font-semibold text-gray-800 leading-tight">
                    Dr. Nabila Huwaida, Sp.A
                </h1>
                <p className="text-gray-500 p-1 text-sm mt-px">
                    Spesialis Anak
                </p>
                <span className="inline-block mt-[3px] bg-green-100 text-green-700 text-xs font-medium px-3 py-px rounded-full">
                    Aktif
                </span>
            </div>

            {/* Informasi Kontak */}
            <div className="flex-1 flex flex-col items-center justify-start w-full mt-4 p-10">
                <div className="w-full max-w-3xl grid sm:grid-cols-2 gap-4 px-8">
                    {/* Nomor HP */}
                    <div className="flex items-center gap-10 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-gray-100 transition">
                        <div className="bg-gray-200 p-2 rounded-full">
                            <Phone className="w-5 h-5 text-gray-700" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Nomor HP</p>
                            <p className="font-medium text-gray-800">
                                +62 812-3456-7890
                            </p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-10 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-gray-100 transition">
                        <div className="bg-gray-200 p-2 rounded-full">
                            <Mail className="w-5 h-5 text-gray-700" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <p className="font-medium text-gray-800">
                                nabilahdaa@kliniknakita.com
                            </p>
                        </div>
                    </div>

                    {/* Klinik */}
                    <div className="flex items-center gap-10 bg-gray-50 rounded-xl p-4 border border-gray-100 hover:bg-gray-100 transition sm:col-span-2">
                        <div className="bg-gray-200 p-2 rounded-full">
                            <Building2 className="w-5 h-5 text-gray-700" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Klinik</p>
                            <p className="font-medium text-gray-800">
                                Klinik Nakita
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tombol */}
            <div className="w-full flex justify-center gap-4 border-t border-gray-200 py-3 mt-2">
                <button className="w-36 bg-blue-100 text-blue-800 py-2.5 rounded-lg font-medium text-sm hover:bg-blue-400 transition">
                    Edit Profil
                </button>
                <button className="w-36 bg-gray-100 text-gray-800 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-200 transition">
                    Lihat Jadwal
                </button>
            </div>
        </div>
    );
};

export default ProfileDokter;
