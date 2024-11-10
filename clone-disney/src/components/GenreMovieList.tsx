import { useEffect, useState } from "react";

import MovieAPI from "../services/MovieAPI";
import { Movie } from "../models/Movie";
import { GENRE_LIST } from "../constants/GenreList";

// components
import MovieContainer from './MovieContainer'
import MovieCard from './MovieCard'
import HrMovieCard from './HrMovieCard'

interface GenreMovieListProps {
    genreId: number;
    index: number;
}

export default function GenreMovieList({ genreId, index }: GenreMovieListProps) {
    const [movieList, setMovieList] = useState<Movie[]>([]);

    useEffect(() => {
        MovieAPI.getMoviesByGenre(genreId).then((data) => {
            setMovieList(data.results);
        });
    }, [genreId]);

    return (
        <MovieContainer 
            title={GENRE_LIST.find((genre) => genre.id === genreId)?.title}
            index={index}
        >
            {movieList.map((item) => (
                index > 0 && index % 3 === 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />
            ))}
        </MovieContainer>
    );
}