import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import GenreSection from "./components/GenreSection";
import SearchResultsComponent from "./components/SearchResultComponent";
import "./index.css";
import MovieDetails from "./components/MovieDetails";
import MoviesPopular from "./components/MoviesPopular";

function App() {
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const navigate = useNavigate();

  const handleGenreSelect = (genreId, genreName) => {
    setSelectedGenre({ id: genreId, name: genreName });
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout
            query={query}
            setQuery={setQuery}
            selectedGenre={selectedGenre}
            handleGenreSelect={handleGenreSelect}
          />
        }>
        <Route index element={<Home />} />

        <Route
          path="search"
          element={<SearchResultsComponent query={query} />}
        />

        <Route path="genre" element={<GenreSection genre={selectedGenre} />} />

        <Route path="/movie/:movie_id" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
