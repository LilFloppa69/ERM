import React, { useEffect, useState } from 'react';

const ProfilAdmin = () => {
  const savedUser = localStorage.getItem('user');
  const user = savedUser ? JSON.parse(savedUser) : null;

  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    if (user) {
      setAdmin({
        nama_lengkap: user.name || 'Admin',
        jabatan: user.role || 'Administrator',
        email: user.email || '-',
        no_telepon: user.phone || '-',
        alamat: user.address || '-',
      });
    }
  }, [user]);

  if (!admin) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Profil Admin</h1>

      <div className="space-y-4">
        <InfoRow label="Nama Lengkap" value={admin.nama_lengkap} />
        <InfoRow label="Jabatan" value={admin.jabatan} />
        <InfoRow label="Email" value={admin.email} />
        <InfoRow label="No Telepon" value={admin.no_telepon} />
        <InfoRow label="Alamat" value={admin.alamat} />
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Edit Profil</button>
      </div>
    </div>
  );
};

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="font-semibold">{label}</span>
    <span>{value ?? '-'}</span>
  </div>
);

export default ProfilAdmin;
