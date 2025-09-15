import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import { FaStar } from "react-icons/fa";
import { Dialog } from "@headlessui/react";

export default function MoviesVideo() {
  const [moviesWithTrailer, setMoviesWithTrailer] = useState([]);
  const apiKey = "bb5952953cea0a2262950a3ad06e12e7";
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  const closeModal = () => {
    setSelectedTrailer(null);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchMoviesAndTrailers = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=es-ES&page=1&sort_by=popularity.desc&api_key=${apiKey}`
        );
        const data = await response.json();
        const movies = data.results.slice(8, 30);

        const moviesWithVideos = await Promise.all(
          movies.map(async (movie) => {
            const videoRes = await fetch(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=es-ES`
            );
            const videoData = await videoRes.json();
            const trailer = videoData.results.find(
              (vid) =>
                vid.site === "YouTube" &&
                vid.type === "Trailer" &&
                vid.official === true
            );

            return {
              ...movie,
              trailerKey: trailer ? trailer.key : null,
            };
          })
        );

        setMoviesWithTrailer(moviesWithVideos);
      } catch (error) {
        console.error("Error al obtener trailers:", error);
      }
    };

    fetchMoviesAndTrailers();
  }, []);

  return (
    <div className="relative px-4 sm:px-24 lg:px-48 py-12">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold mt-6 mb-2 text-gray-800">
          Últimos trailers
        </h3>
      </div>

      <Swiper
        modules={[Scrollbar, A11y]}
        scrollbar={{ draggable: true }}
        spaceBetween={16}
        slidesPerView={5}
        speed={600}
        loop={true}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 1.5 },
          480: { slidesPerView: 2.5 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}>
        {moviesWithTrailer.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="p-2 relative group cursor-pointer">
              <div
                className="relative aspect-[/3] w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => {
                  if (movie.trailerKey) {
                    setSelectedTrailer(movie.trailerKey);
                    setIsOpen(true);
                  }
                }}>
                <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/500x750?text=Sin+imagen"
                    }
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                {/* Overlay oscurecido */}
                {movie.trailerKey && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-4xl">▶</div>
                  </div>
                )}
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

      {/* MODAL */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
          aria-hidden="true"
        />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-4xl max-h-[80vh] bg-black rounded overflow-hidden shadow-xl">
            <div className="relative pb-[56.25%] h-0">
              {selectedTrailer && (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedTrailer}?autoplay=1`}
                  title="Trailer"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              )}
            </div>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-xl bg-black/50 px-2 py-1 rounded hover:bg-black">
              ✕
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
      {/* Línea de paginación personalizada */}
      <div className="swiper-pagination"></div>
    </div>
  );
}
