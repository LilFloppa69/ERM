import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://127.0.0.1:8000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setMessage(
                    data.error ||
                        "Login gagal. Periksa kembali email dan password."
                );
                return;
            }

            // ✅ simpan token
            const token = data.token;
            localStorage.setItem("token", token);

            // ✅ fetch /me untuk ambil role
            const meRes = await fetch("http://127.0.0.1:8000/api/me", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const meData = await meRes.json();

            if (!meRes.ok) {
                setMessage("Gagal mengambil data user.");
                return;
            }

            const role = meData.data.role;
            localStorage.setItem("role", role);

            setMessage("Login berhasil!");

            // ✅ Redirect sesuai role
            if (role === "admin") navigate("/home");
            else if (role === "doctor") navigate("/doctor/dashboarddokter");
            else navigate("/patient/dashboardpasien");
        } catch (err) {
            console.error(err);
            setMessage("Gagal terhubung ke server backend");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-96"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 mb-3 border rounded"
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 mb-3 border rounded"
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>

                {message && (
                    <p className="text-center text-sm text-gray-700 mt-4">
                        {message}
                    </p>
                )}

                <p className="text-center text-sm text-gray-700 mt-6">
                    Belum punya akun?{" "}
                    <span
                        className="text-blue-600 hover:underline cursor-pointer"
                        onClick={() => navigate("/register")}
                    >
                        Daftar di sini
                    </span>
                </p>
            </form>
        </div>
    );
}
