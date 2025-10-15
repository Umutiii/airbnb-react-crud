import { useNavigate } from "react-router-dom";
import { createHome } from "../api/homes";
import HomeForm from "../components/HomeForm";

export default function HomeNew() {
  const navigate = useNavigate();

  const handleSubmit = async (home: any) => {
    await createHome(home);
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Home</h1>
      <HomeForm onSubmit={handleSubmit} />
    </div>
  );
}
