import HeaderComponent from "../components/HeaderComponent";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout({
  query,
  setQuery,
  selectedGenre,
  handleGenreSelect,
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <HeaderComponent
        query={query}
        setQuery={setQuery}
        selectedGenre={selectedGenre}
        handleGenreSelect={handleGenreSelect}
      />
      <main className="flex-1">{<Outlet />}</main>

      <Footer />
    </div>
  );
}
