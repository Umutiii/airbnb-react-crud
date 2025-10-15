import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import type { Home } from "../types/home";
import {
  FaMapMarkerAlt,
  FaUserFriends,
  FaBed,
  FaBath,
  FaTrash,
  FaEdit,
} from "react-icons/fa";

export default function HomeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [home, setHome] = useState<Home | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    axios
      .get(`http://localhost:5000/homes/${id}`)
      .then((res) => setHome(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  const handleDelete = () => {
    if (!id) return;
    if (!confirm("Bu ilanı silmek istediğinizden emin misiniz?")) return;

    axios.delete(`http://localhost:5000/homes/${id}`).then(() => {
      navigate("/");
    });
  };

  if (loading)
    return <div className="text-center text-gray-500">Yükleniyor...</div>;
  if (!home)
    return <div className="text-center text-red-500">İlan bulunamadı.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      {/* Başlık */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{home.title}</h1>

      {/* Görsel */}
      <img
        src={home.imageUrl}
        alt={home.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />
      <div className="border-t border-gray-300/50 my-6" />

      {/* Bilgiler + Butonlar aynı satırda */}
      <div className="flex flex-wrap justify-between items-center mb-6">
        {/* Bilgi kısmı */}
        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <FaUserFriends className="text-base" />
            <span>{home.guests} guests</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBed className="text-base" />
            <span>{home.bedrooms} bed</span>
          </div>
          <div className="flex items-center gap-2">
            <FaBath className="text-base" />
            <span>{home.bathrooms} bath</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-base" />
            <span>{home.location}</span>
          </div>
        </div>

        {/* Butonlar sağda */}
        <div className="flex gap-2 mt-4 sm:mt-0">
          <Link
            to={`/homes/${home.id}/edit`}
            className="flex items-center gap-1 px-3 py-1.5 bg-green-400 text-white rounded-md hover:bg-green-700 text-sm transition"
          >
            <FaEdit /> Düzenle
          </Link>
          <button
            onClick={handleDelete}
            className="flex items-center gap-1 px-3 py-1.5 bg-red-400 text-white rounded-md hover:bg-red-700 text-sm transition"
          >
            <FaTrash /> Sil
          </button>
        </div>
      </div>
      <div className="border-t border-gray-300/50 my-6" />

      {/* Açıklama */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          About this place
        </h2>
        <p className="text-gray-700 leading-relaxed">{home.description}</p>
      </div>
      <div className="border-t border-gray-300/50 my-6" />
      {/* Özellikler */}
      {home.amenities.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Amenities
          </h3>
          <ul className="flex flex-wrap gap-2">
            {home.amenities.map((a) => (
              <li
                key={a}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="border-t border-gray-300/50 my-6" />
      {/* Fiyat */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-xl font-semibold text-gray-900">
          ${home.pricePerNight}{" "}
          <span className="text-base font-normal text-gray-500">/night</span>
        </p>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
          Reserve
        </button>
      </div>
    </div>
  );
}
