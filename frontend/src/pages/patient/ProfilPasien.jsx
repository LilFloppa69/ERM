import { useEffect, useState } from "react";
import axios from "axios";

export default function ProfilPasien() {
    const [formData, setFormData] = useState({
        nama_lengkap: "",
        nik: "",
        jenis_kelamin: "",
        tanggal_lahir: "",
        usia: "",
        gol_darah: "",
        no_telepon: "",
        email: "",
        alamat: "",
        nomor_rm: "",
    });
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    const token = localStorage.getItem("token"); // Pastikan login nyimpan token

    // Fetch data pasien
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:8000/api/pasien/me",
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );
                setFormData(res.data);
            } catch (err) {
                console.error(err);
                setMessage("Gagal memuat data pasien");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [token]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(
                "http://localhost:8000/api/pasien/update",
                formData,
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setMessage(res.data.message);
        } catch (err) {
            console.error(err);
            setMessage("Gagal memperbarui data pasien");
        }
    };

    if (loading) return <p className="text-center mt-10">Memuat data...</p>;

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-2xl font-bold mb-4">Profil Pasien</h2>

            {message && <p className="mb-4 text-blue-600">{message}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nomor RM */}
                <div>
                    <label className="block font-semibold">Nomor RM</label>
                    <input
                        type="text"
                        name="nomor_rm"
                        value={formData.nomor_rm || ""}
                        disabled
                        className="w-full border rounded p-2 bg-gray-100"
                    />
                </div>

                <div>
                    <label className="block font-semibold">Nama Lengkap</label>
                    <input
                        type="text"
                        name="nama_lengkap"
                        value={formData.nama_lengkap || ""}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold">NIK</label>
                    <input
                        type="text"
                        name="nik"
                        value={formData.nik || ""}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold">Jenis Kelamin</label>
                    <select
                        name="jenis_kelamin"
                        value={formData.jenis_kelamin || ""}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    >
                        <option value="">Pilih</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold">
                            Tanggal Lahir
                        </label>
                        <input
                            type="date"
                            name="tanggal_lahir"
                            value={formData.tanggal_lahir || ""}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">Usia</label>
                        <input
                            type="number"
                            name="usia"
                            value={formData.usia || ""}
                            onChange={handleChange}
                            className="w-full border rounded p-2"
                        />
                    </div>
                </div>

                <div>
                    <label className="block font-semibold">
                        Golongan Darah
                    </label>
                    <input
                        type="text"
                        name="gol_darah"
                        value={formData.gol_darah || ""}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold">No Telepon</label>
                    <input
                        type="text"
                        name="no_telepon"
                        value={formData.no_telepon || ""}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>

                <div>
                    <label className="block font-semibold">Alamat</label>
                    <textarea
                        name="alamat"
                        value={formData.alamat || ""}
                        onChange={handleChange}
                        className="w-full border rounded p-2"
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md"
                >
                    Simpan Perubahan
                </button>
            </form>
        </div>
    );
}
