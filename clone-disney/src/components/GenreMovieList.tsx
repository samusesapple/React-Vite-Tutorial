import { useEffect, useState } from "react";
import { GENRE_LIST } from "../constants/GenreList";
import MovieAPI from "../services/MovieAPI";
import { Movie } from "../models/Movie";
import MovieContainer from './MovieContainer'
import MovieCard from './MovieCard'

interface GenreMovieListProps {
    genreId: number;
}

export default function GenreMovieList({ genreId}: GenreMovieListProps) {
    const [movieList, setMovieList] = useState<Movie[]>([]);

    useEffect(() => {
        MovieAPI.getMoviesByGenre(genreId).then((data) => {
            setMovieList(data.results);
        });
    }, [genreId]);

    return (
        <MovieContainer 
            title={GENRE_LIST.find((genre) => genre.id === genreId)?.title}
        >
            {movieList.map((item, index) => (
                <MovieCard 
                    movie={item}
                    index={index}
                />
            ))}
        </MovieContainer>       
    );
}