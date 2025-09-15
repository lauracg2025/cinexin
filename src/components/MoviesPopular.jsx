import { use, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function MoviesPopular() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const apiKey = "bb5952953cea0a2262950a3ad06e12e7";

  useEffect(() => {
    const fetchMovies = async () => {
      let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES`;

      try {
        const response = await fetch(url);
        const data = await response.json();
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
    <div className="relative px-4 sm:px-24 lg:px-48 py-12">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          Lo más popular
        </h3>
        {/*}  <button
          className="text-sm font-semibold text-blue-500 hover:text-blue-700"
          onClick={() => navigate("/movies/popular")}>
          Ver más
        </button>*/}
      </div>
      <Swiper
        modules={[Scrollbar, A11y, Autoplay]}
        scrollbar={{ draggable: true, dragSize: "auto" }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={2}
        speed={600}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 2.5 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 6 },
          1280: { slidesPerView: 8 },
        }}>
        {movies.map((movie, index) => (
          <SwiperSlide
            key={movie.id}
            className={`${index === 0 ? "ml-1 sm:ml-4" : ""} ${
              index === movies.length - 1 ? "mr-1 sm:mr-4" : ""
            }`}>
            <div
              className="p-2 relative group cursor-pointer"
              onClick={() => handleMovieClick(movie.id)}>
              <div className="aspect-[2/3] w-full">
                <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://via.placeholder.com/500x750?text=Sin+imagen"
                  }
                  alt={movie.title}
                  className="w-full h-full object-cover rounded shadow-md"
                />
              </div>

              <div className="absolute top-2 right-2 w-12 h-12 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow">
                {movie.vote_average?.toFixed(1)}
                <FaStar className="ml-1" />
              </div>

              <h2 className="text-center text-sm mt-2 text-gray-800 font-semibold">
                {movie.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Línea de paginación personalizada */}
      <div className="swiper-pagination"></div>
    </div>
  );
}
