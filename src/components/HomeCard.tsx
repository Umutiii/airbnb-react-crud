import type { Home } from "../types/home";
import { Link } from "react-router-dom";

interface Props {
  home: Home;
  onDelete: (id: string) => void;
}

export default function HomeCard({ home, onDelete }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
      <img
        src={home.imageUrl}
        alt={home.title}
        className="w-full h-48 object-cover rounded-xl mb-3"
      />

      <h2 className="text-xl font-semibold mb-1">{home.title}</h2>
      <p className="text-gray-500 mb-2">{home.location}</p>
      <p className="text-gray-700 mb-2">{home.description}</p>

      <div className="text-gray-800 font-bold mb-3">
        ${home.pricePerNight}/night
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
        <span>Guests: {home.guests}</span>
        <span>Bedrooms: {home.bedrooms}</span>
        <span>Bathrooms: {home.bathrooms}</span>
      </div>

      {home.amenities.length > 0 && (
        <ul className="flex flex-wrap gap-2 mb-3">
          {home.amenities.map((a) => (
            <li key={a} className="px-2 py-1 bg-gray-200 rounded text-xs">
              {a}
            </li>
          ))}
        </ul>
      )}

      <div className="flex justify-between items-center">
        <Link
          to={`/homes/${home.id}`}
          className="text-blue-500 hover:underline font-medium"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
}
