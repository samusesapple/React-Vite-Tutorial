import React, { useEffect, useState, useRef } from "react";
import MovieAPI from "../services/MovieAPI";
import { Movie } from "../models/Movie";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const Slider = () => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const elementRef = useRef<HTMLDivElement>(null);
    const screenWidth = window.innerWidth;
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);


    useEffect(() => {
        getPopularMovies();
    }, []);

    const getPopularMovies = async () => {
        MovieAPI.getPopularMovies().then((res) => {
            setMovieList(res.results);
        });
    }

    const sliderRight = (element: HTMLDivElement) => {
        element.scrollLeft += screenWidth-108;
        setIsButtonDisabled(true);
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 500);
    }

    const sliderLeft = (element: HTMLDivElement) => {
        element.scrollLeft -= screenWidth-108;
        setIsButtonDisabled(true);
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 500);
    }

    return (
        <div className="flex items-center relative">
            <HiChevronLeft 
                className={`hidden md:block text-white text-[30px] absolute mx-8 cursor-pointer ${isButtonDisabled ? 'opacity-30' : ''}`}
                onClick={() => elementRef.current && sliderLeft(elementRef.current)} 
            />
            <HiChevronRight 
                className={`hidden md:block text-white text-[30px] absolute right-0 mr-8 cursor-pointer ${isButtonDisabled ? 'opacity-30' : ''}`}
                onClick={() => elementRef.current && sliderRight(elementRef.current)} 
            />
            <div className="flex overflow-x-auto scrollbar-none scroll-smooth w-full px-16 py-4" ref={elementRef}>
                {movieList.map((movie, index) => (
                    <img
                        className="min-w-full md:h-[310px] object-cover object-top mr-5 rounded-md hover:border-[4px] hover:border-gray-400 transition-all duration-100 ease-in"
                        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                        key={index}
                    />  
                ))}
            </div>
        </div>
    );
}

export default Slider;