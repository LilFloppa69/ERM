import React from "react";
import { Eye, Trash2, Plus } from "lucide-react";

const StokObat = () => {
    const dataObat = [
        {
            code: "OB001",
            name: "Paracetamol 500mg",
            stock: 120,
            unit: "Tablet",
            purchase_price: "Rp 500",
            selling_price: "Rp 1.000",
            expiry_date: "2026-03-10",
        },
        {
            code: "OB002",
            name: "Amoxicillin 500mg",
            stock: 80,
            unit: "Kapsul",
            purchase_price: "Rp 700",
            selling_price: "Rp 1.500",
            expiry_date: "2025-09-22",
        },
        {
            code: "OB003",
            name: "Vitamin C 1000mg",
            stock: 60,
            unit: "Tablet",
            purchase_price: "Rp 900",
            selling_price: "Rp 2.000",
            expiry_date: "2027-01-15",
        },
    ];

    return (
        <div className="w-full min-h-screen bg-white px-6 py-10 flex flex-col items-center">
            <div className="w-full max-w-6xl bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-800">
                        Data Stok Obat
                    </h1>
                    <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition text-sm font-medium">
                        <Plus className="w-4 h-4" /> Tambah Obat
                    </button>
                </div>

                {/* Tabel */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-blue-100 text-blue-900">
                                <th className="py-3 px-4 text-sm font-semibold rounded-tl-lg">
                                    Kode
                                </th>
                                <th className="py-3 px-4 text-sm font-semibold">
                                    Nama Obat
                                </th>
                                <th className="py-3 px-4 text-sm font-semibold">
                                    Stok
                                </th>
                                <th className="py-3 px-4 text-sm font-semibold">
                                    Satuan
                                </th>
                                <th className="py-3 px-4 text-sm font-semibold">
                                    Harga Beli
                                </th>
                                <th className="py-3 px-4 text-sm font-semibold">
                                    Harga Jual
                                </th>
                                <th className="py-3 px-4 text-sm font-semibold">
                                    Kadaluarsa
                                </th>
                                <th className="py-3 px-4 text-sm font-semibold rounded-tr-lg text-center">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataObat.map((obat, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-100 hover:bg-blue-50 transition"
                                >
                                    <td className="py-3 px-4 text-gray-800">
                                        {obat.code}
                                    </td>
                                    <td className="py-3 px-4 text-gray-800">
                                        {obat.name}
                                    </td>
                                    <td className="py-3 px-4 text-gray-800">
                                        {obat.stock}
                                    </td>
                                    <td className="py-3 px-4 text-gray-800">
                                        {obat.unit}
                                    </td>
                                    <td className="py-3 px-4 text-gray-800">
                                        {obat.purchase_price}
                                    </td>
                                    <td className="py-3 px-4 text-gray-800">
                                        {obat.selling_price}
                                    </td>
                                    <td className="py-3 px-4 text-gray-800">
                                        {obat.expiry_date}
                                    </td>
                                    <td className="py-3 px-4 flex justify-center gap-2">
                                        <button className="bg-yellow-100 hover:bg-yellow-200 text-yellow-700 p-2 rounded-lg transition">
                                            <Eye className="w-4 h-4" />
                                        </button>
                                        <button className="bg-red-100 hover:bg-red-200 text-red-700 p-2 rounded-lg transition">
                                            <Trash2 className="w-4 h-4" />
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
};

export default StokObat;
