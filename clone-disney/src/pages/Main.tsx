import Header from "../components/header";
import Slider from "../components/Slider";
import ProductionHouse from "../components/ProductionHouse";
import { GENRE_LIST } from "../constants/GenreList";
import GenreMovieList from "../components/GenreMovieList";

export default function Main() {
    return (
        <div className="">
            <Header />
            <Slider />
            <ProductionHouse />
            <>
                {GENRE_LIST.map((genre, index) => (
                    <GenreMovieList key={genre.id} genreId={genre.id} index={index} />
                ))}
            </>
        </div>
    )
};
      