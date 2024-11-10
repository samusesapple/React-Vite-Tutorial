import Header from "./components/header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import { GENRE_LIST } from "./constants/GenreList";
import GenreMovieList from "./components/GenreMovieList";

function App() {
  return (
    <div className="">
      <Header />
      <Slider />
      <ProductionHouse />
      <div>
        {GENRE_LIST.map((genre) => (
          <GenreMovieList key={genre.id} genreId={genre.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
