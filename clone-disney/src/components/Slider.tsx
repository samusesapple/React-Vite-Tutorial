import React, { useEffect, useState, useRef } from "react";
import MovieAPI from "../services/MovieAPI";
import { Movie } from "../models/Movie";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { IMAGE_BASE_URL } from "../constants/Image";

const Slider = () => {
    const [movieList, setMovieList] = useState<Movie[]>([]);
    const elementRef = useRef<HTMLDivElement>(null);
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
        const itemWidth = element.getBoundingClientRect().width;
        element.scrollLeft += itemWidth;
        console.log('sliderRight', element);
        setIsButtonDisabled(true);
        setTimeout(() => {
            setIsButtonDisabled(false);
        }, 500);
    }

    const sliderLeft = (element: HTMLDivElement) => {
        const itemWidth = element.getBoundingClientRect().width;
        element.scrollLeft -= itemWidth;
        console.log('sliderLeft', element);
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
            <div className="flex overflow-x-auto md:overflow-x-hidden scrollbar-none scroll-smooth snap-x snap-mandatory w-full px-16 py-4" ref={elementRef}>
                {movieList.map((movie, index) => (
                    <img
                        className="min-w-full md:h-[310px] object-cover object-center mr-5 rounded-md hover:border-[4px] hover:border-gray-400 transition-all duration-100 ease-in snap-center shadow-[8px_10px_10px_0px_rgba(0,0,0,0.4)]"
                        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
                        key={index}
                    />  
                ))}
            </div>
        </div>
    );
}

export default Slider;