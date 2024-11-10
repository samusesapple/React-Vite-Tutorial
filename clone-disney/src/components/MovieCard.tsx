import { Movie } from "../models/Movie";
import { IMAGE_BASE_URL } from "../constants/Image";
interface MovieCardProps {
    movie: Movie;   
    index: number;
}

export default function MovieCard({ movie }: MovieCardProps) {
    return (
        <>
          <img 
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            className='w-[110px] md:w-[200px] rounded-md hover:scale-110 hover:border-[3px] hover:border-gray-400 transition-all duration-100 ease-in relative cursor-pointer'
            />
        </>
    )
}