import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GenreSection({ genre }) {
  const apiKey = "bb5952953cea0a2262950a3ad06e12e7";
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!genre) return;

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.id}&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error("Error cargando películas", err));
  }, [genre]);

  if (!genre) return null;

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <section className="mb-20">
      <h3 className="text-xl font-semibold mt-6 mb-10 text-gray-800 px-20 text-left ">
        Películas de {genre.name}
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-8 px-20 ">
        {movies.length === 0 && <p>Cargando películas...</p>}
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="p-4 cursor-pointer hover aspect-[2/3] w-full sm:h-full"
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
