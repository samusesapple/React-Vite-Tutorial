import React, { useEffect, useState, useRef } from "react";
import MovieAPI from "../services/MovieAPI";
import { Movie } from "../models/Movie";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const elementRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        getPopularMovies();
    }, []);

    const getPopularMovies = async () => {
        MovieAPI.getPopularMovies().then((res) => {
            setMovieList(res.results);
        });
    }

    return (
        <div className="flex items-center relative">
            <HiChevronLeft className="hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer" />
            <HiChevronRight className="hidden md:block text-white text-[30px] absolute right-0 mr-8 cursor-pointer" />
            <div className="flex overflow-x-auto scrollbar-none w-full px-16 py-4">
                {movieList.map((movie, index) => (
                    <img
                        className="min-w-full md:h-[310px] object-cover object-top mr-5 rounded-md"
                        ref={elementRef}
                        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                        key={index}
                    />  
                ))}
            </div>
        </div>
    );
}

export default Slider;