import { useEffect, useState } from "react";

import { getHomes } from "../api/homes";
import { Link } from "react-router-dom";
import HomeCard from "../components/HomeCard";
import type { Home } from "../types/home";
export default function HomeList() {
  const [homes, setHomes] = useState<Home[]>([]);

  useEffect(() => {
    getHomes().then(setHomes);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">🏠 Available Homes</h1>
        <Link
          to="/homes/new"
          className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700"
        >
          + New Listing
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {homes.map((home) => (
          <HomeCard
            key={home.id}
            home={home}
            onDelete={function (id: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </div>
    </div>
  );
}
