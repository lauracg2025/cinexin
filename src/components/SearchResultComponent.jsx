import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchResultsComponent({ query }) {
  console.log("Query recibido:", query);

  const [movies, setMovies] = useState([]);

  const apiKey = "bb5952953cea0a2262950a3ad06e12e7";

  useEffect(() => {
    const fetchMovies = async () => {
      let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${encodeURIComponent(
        query
      )}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Datos recibidos:", data);
        setMovies(data.results || []);
      } catch (error) {
        console.error("Error al obtener películas:", error);
      }
    };

    fetchMovies();
  }, [query]);

  const navigate = useNavigate();

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <section className="mb-20">
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-8 px-20 ">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className=" p-4 cursor-pointer hover aspect-[2/3] w-full sm:h-full"
            onClick={() => handleMovieClick(movie.id)}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=Sin+imagen"
              }
              alt={movie.title}
              className="w-full h-full object-cover rounded shadow-md"
            />
            <h2 className="text-center text-sm mt-2 text-gray-800 font-semibold">
              {movie.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
