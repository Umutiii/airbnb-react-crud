import { useState } from "react";
import type { Home } from "../types/home";

interface Props {
  initial?: Home;
  onSubmit: (home: Home) => void;
}

export default function HomeForm({ initial, onSubmit }: Props) {
  const [form, setForm] = useState<Home>(
    initial || {
      title: "",
      description: "",
      pricePerNight: 0,
      location: "",
      imageUrl: "",
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      amenities: [],
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="space-y-6 bg-white p-6 rounded-2xl shadow-md max-w-xl mx-auto"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {initial ? "Edit Home" : "Add New Home"}
      </h2>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={3}
          className="border border-gray-300 px-4 py-2 w-full rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Price per night ($)
          </label>
          <input
            type="number"
            name="pricePerNight"
            value={form.pricePerNight}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Guests
          </label>
          <input
            type="number"
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Bedrooms
          </label>
          <input
            type="number"
            name="bedrooms"
            value={form.bedrooms}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">
            Bathrooms
          </label>
          <input
            type="number"
            name="bathrooms"
            value={form.bathrooms}
            onChange={handleChange}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Amenities (comma-separated)
        </label>
        <input
          type="text"
          name="amenities"
          value={form.amenities.join(", ")}
          onChange={(e) =>
            setForm({
              ...form,
              amenities: e.target.value.split(",").map((a) => a.trim()),
            })
          }
          className="border border-gray-300 px-4 py-2 w-full rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium text-lg hover:bg-blue-700 transition"
      >
        {initial ? "Update Home" : "Create Home"}
      </button>
    </form>
  );
}
