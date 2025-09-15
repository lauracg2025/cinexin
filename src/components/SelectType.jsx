import { useState, useEffect } from "react";
import { Menu } from "@headlessui/react";

export default function SelectType({ onSelect }) {
  const apiKey = "bb5952953cea0a2262950a3ad06e12e7";
  const [genres, setGenres] = useState([]);

  // Traer géneros al cargar
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error("Error cargando géneros", err));
  }, []);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
        ☰
      </Menu.Button>

      <Menu.Items className="absolute right-0 mt-2  max-w-xs sm:w-56 max-h-60 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none z-10">
        <div className="p-1">
          {genres.length === 0 && (
            <p className="p-2 text-gray-500">Cargando géneros...</p>
          )}
          {genres.map((genre) => (
            <Menu.Item key={genre.id}>
              {({ active }) => (
                <button
                  onClick={() => onSelect(genre.id, genre.name)}
                  className={`${
                    active ? "bg-blue-600 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-3 py-2 text-sm`}>
                  {genre.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}
