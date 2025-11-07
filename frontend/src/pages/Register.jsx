import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        role: "patient",
        email: "",
        phone: "",
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://127.0.0.1:8000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage(data.message);
            } else {
                console.log("Validation error => ", data);
                setMessage(
                    data?.errors
                        ? Object.values(data.errors).join(", ")
                        : data.error || "Registration failed"
                );
            }
        } catch (err) {
            console.error(err);
            setMessage("Failed to connect to backend");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg p-8 w-96"
            >
                <h2 className="text-2xl font-bold text-center mb-6">
                    Register
                </h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full p-2 mb-3 border rounded"
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
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

                <select
                    name="role"
                    className="w-full p-2 mb-3 border rounded"
                    onChange={handleChange}
                >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                    <option value="admin">Admin</option>
                </select>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 mb-3 border rounded"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    className="w-full p-2 mb-3 border rounded"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Register
                </button>

                {message && (
                    <p className="text-center text-sm text-gray-700 mt-4">
                        {message}
                    </p>
                )}

                {/* Link ke halaman login */}
                <p className="text-center text-sm text-gray-700 mt-6">
                    Sudah punya akun?{" "}
                    <span
                        className="text-blue-600 hover:underline cursor-pointer"
                        onClick={() => navigate("/login")}
                    >
                        Login di sini
                    </span>
                </p>
            </form>
        </div>
    );
}
