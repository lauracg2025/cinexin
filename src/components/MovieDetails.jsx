import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Para obtener el movie_id desde la URL
import { FaStar } from "react-icons/fa";

import MoviesWeek from "./MoviesWeek";
import SectionComponent1 from "./SectionComponent1";

export default function MovieDetails() {
  const { movie_id } = useParams(); // Obtener el movie_id de la URL
  const apiKey = "bb5952953cea0a2262950a3ad06e12e7";
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=es-ES`
        );
        const data = await response.json();
        setMovie(data);
      } catch (err) {
        setError("Error cargando los detalles de la película.");
        console.error("Error cargando detalles de la película", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movie_id]);

  if (loading) return <div>Cargando detalles...</div>;
  if (error) return <div>{error}</div>;
  if (!movie) return <div>No se encontraron detalles para esta película.</div>;

  const formattedDate = new Intl.DateTimeFormat("es-ES").format(
    new Date(movie.release_date)
  );

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-24 py-8 bg-gray-50 ">
        {/* Imagen */}
        <div className="relative flex justify-center items-start">
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/400x600?text=Sin+imagen"
            }
            alt={`Póster de ${movie.title}`}
            className="w-full max-w-[330px] object-cover rounded-lg shadow-lg"
          />
          {/* Valoración */}
          <div className="relative mb-4">
            <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
              {movie.vote_average?.toFixed(1)}
              <FaStar className="ml-1" />
            </div>
          </div>
        </div>
        {/* titulo */}
        <div className="flex flex-col justify-start mt-4 sm:mt-0">
          <h3 className="text-3xl sm:text-4xl font-bold text-center sm:text-left mb-4 font-roboto text-gray-800">
            {movie.title}
          </h3>

          <div className="text-gray-700 leading-relaxed sm:text-md space-y-1 mb-4">
            <p>
              🗓️ <strong>Fecha de estreno:</strong>{" "}
              {new Intl.DateTimeFormat("es-ES").format(
                new Date(movie.release_date)
              )}
            </p>

            <p>
              📽️ <strong>Género:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              🕒 <strong>Duración:</strong> {movie.runtime} minutos
            </p>
          </div>

          {/* linea con la puntación */}

          <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
            <div
              className="bg-yellow-500 h-3 rounded-full"
              style={{ width: `${movie.vote_average * 10}%` }}></div>
          </div>

          {/* Descripción de la película */}
          <p className="text-justify text-gray-700 leading-relaxed sm:text-md pt-10 mb-4">
            {movie.overview}
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-24">
        <SectionComponent1 />

        <MoviesWeek />
      </div>
    </div>
  );
}
