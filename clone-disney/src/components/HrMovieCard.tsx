import { Movie } from "../models/Movie";
import { IMAGE_BASE_URL } from "../constants/Image";
import styled from "styled-components";

interface HrMovieCardProps {
    movie: Movie;
}

const StyledHrMovieCard = styled.div`
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        cursor: pointer;
        transition: all 100ms ease-in;
        
        &:hover {
            transform: scale(1.1);
        }
    }

    img {
        margin-bottom: 1rem;
        height: 80px;
        width: 160px;
        object-fit: cover;
        object-position: center;
        border-radius: 0.375rem;
        
        &:hover {
            border: 3px solid #9ca3af;
        }
        
        @media (min-width: 768px) {
            height: 140px;
            width: 260px;
        }
    }

    h2 {
        width: 160px;
        color: white;
        font-size: 14px;
        font-weight: bold;
        margin-top: 0rem;
        
        @media (min-width: 768px) {
            width: 260px;
            font-size: 16px;
            margin-top: 0.5rem;
        }
    }
`

export default function HrMovieCard({ movie }: HrMovieCardProps) {
    return (
        <StyledHrMovieCard>
            <section>
                <img 
                    src={`${IMAGE_BASE_URL}${movie.backdrop_path || movie.poster_path}`} 
                    alt={movie.title}
                />
                <h2>{movie.title}</h2>
            </section>
        </StyledHrMovieCard>
    )
}