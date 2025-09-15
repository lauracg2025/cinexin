import MoviesPopular from "./MoviesPopular";
import MoviesVideo from "./MoviesVideo";
import SectionComponent from "./SectionComponent";
import MoviesWeek from "./MoviesWeek";
import MoviesRecommendations from "./MoviesRecommendations";
import HeaderComponent from "./HeaderComponent";

export default function Home() {
  return (
    <>
      <MoviesPopular />
      <MoviesVideo />
      <SectionComponent />
      <MoviesWeek />
      <MoviesRecommendations />
    </>
  );
}
