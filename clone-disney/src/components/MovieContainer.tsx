import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useRef } from "react";
import styled from "styled-components";

interface MovieContainerProps {
    title?: string;
    index: number;
    children: React.ReactNode;
}

const StyledMovieContainer = styled.div`
    .title {
        color: white;
        font-size: 20px;
        padding-top: 1.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
        font-weight: bold;
        text-align: left;

        @media (min-width: 768px) {
            font-size: 28px;
            padding-left: 4rem;
            padding-right: 4rem;
        }
    }

    .slider-container {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
    }

    .slider-button {
        display: none;
        color: white;
        font-size: 50px;
        z-index: 10;
        position: absolute;
        margin-left: 0.5rem;
        cursor: pointer;

        &.right {
            right: 0;
            margin-right: 0.5rem;
        }

        &.margin-bottom {
            margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
            display: block;
        }
    }

    .content-wrapper {
        display: flex;
        overflow-x: auto;
        scrollbar-width: none;
        scroll-behavior: smooth;
        padding: 1.25rem 2rem;
        gap: 1.25rem;
        justify-content: flex-start;

        &::-webkit-scrollbar {
            display: none;
        }

        @media (min-width: 768px) {
            padding: 1.25rem 4rem;
            padding-bottom: 1.25rem;
            gap: 2rem;
        }
    }
`

export default function MovieContainer({ title, index, children }: MovieContainerProps) {
    const elementRef = useRef<HTMLDivElement>(null);

    const sliderRight = (element: HTMLDivElement) => {
        element.scrollLeft += 500;
    }

    const sliderLeft = (element: HTMLDivElement) => {
        element.scrollLeft -= 500;
    }

    const shouldAddMargin = index > 0 && index % 3 === 0;

    return (
        <StyledMovieContainer>
            <div className="flex flex-col relative">
                {title && <h2 className="title">{title}</h2>}
                <div className="slider-container">
                    <IoChevronBackOutline 
                        className={`slider-button ${shouldAddMargin ? 'margin-bottom' : ''}`}
                        onClick={() => elementRef.current && sliderLeft(elementRef.current)}
                    />   
                    <div ref={elementRef} className="content-wrapper">
                        {children}
                    </div>
                    <IoChevronForwardOutline 
                        className={`slider-button right ${shouldAddMargin ? 'margin-bottom' : ''}`}
                        onClick={() => elementRef.current && sliderRight(elementRef.current)}
                    />   
                </div>   
            </div>
        </StyledMovieContainer>
    )
}