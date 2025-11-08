import { Bed, User2, CalendarCheck, Package } from 'lucide-react';

const Home = () => {
  const savedUser = localStorage.getItem('user');
  const user = savedUser ? JSON.parse(savedUser) : null;

  const cards = [
    {
      title: 'Total Pasien',
      value: 1220,
      details: [
        { label: 'Total pasien', value: 21 },
        { label: '30 Hari Terakhir', value: 231 },
      ],
      icon: <Bed className="text-blue-600" size={36} />,
    },
    {
      title: 'Total Dokter',
      value: 21,
      details: [
        { label: 'Spesialis', value: 21 },
        { label: 'Umum', value: 21 },
      ],
      icon: <User2 className="text-blue-600" size={36} />,
    },
    {
      title: 'Total Janji',
      value: 1220,
      details: [
        { label: 'Registrasi Hari Ini', value: 21 },
        { label: 'Last 30 days', value: 231 },
      ],
      icon: <CalendarCheck className="text-blue-600" size={36} />,
    },
    {
      title: 'Stok Obat',
      value: 67,
      details: [],
      icon: <Package className="text-blue-600" size={36} />,
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <a href="logout">
              <p className="font-semibold text-gray-700">{user ? user.name : 'Memuat...'}</p>
            </a>
            <p className="text-sm text-gray-500">{user ? user.role : 'Memuat...'}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="bg-pink-100 p-2 rounded-lg">{card.icon}</div>
              <h3 className="text-sm text-gray-500 font-medium">{card.title}</h3>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">{card.value}</h2>
            <div className="mt-2 text-sm text-gray-600">
              {card.details.map((d, i) => (
                <div key={i} className="flex justify-between">
                  <span>{d.label}:</span>
                  <span>{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
