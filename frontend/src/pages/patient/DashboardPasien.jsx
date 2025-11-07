import { useEffect, useState } from "react";

export default function DashboardPasien() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test-db")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) setStatus(data.message);
        else setStatus("Connected but no message.");
      })
      .catch((err) => {
        console.error(err);
        setStatus("Failed to connect to backend.");
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Dashboard Pasien</h1>
      <p className="text-lg text-gray-600">Status koneksi: {status}</p>
    </div>
  );
}
