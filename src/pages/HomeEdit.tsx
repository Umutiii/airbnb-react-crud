import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HomeForm from "../components/HomeForm";
import { getHomeById, updateHome } from "../api/homes";
import type { Home } from "../types/home";

export default function HomeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [home, setHome] = useState<Home | null>(null);

  useEffect(() => {
    if (id) getHomeById(Number(id)).then(setHome);
  }, [id]);

  const handleSubmit = async (data: Home) => {
    await updateHome(Number(id), data);
    navigate(`/homes/${id}`);
  };

  if (!home) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Home</h1>
      <HomeForm initial={home} onSubmit={handleSubmit} />
    </div>
  );
}
