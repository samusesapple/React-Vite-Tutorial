import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import { useRef } from "react";
interface MovieContainerProps {
    title?: string;
    children: React.ReactNode;
}
    
export default function MovieContainer({ title, children }: MovieContainerProps) {

    const elementRef = useRef<HTMLDivElement>(null);

    const sliderRight = (element: HTMLDivElement) => {
        element.scrollLeft += 500;
    }

    const sliderLeft = (element: HTMLDivElement) => {
        element.scrollLeft -= 500;
    }

    return (
        <>
            <div className={`flex flex-col relative`}>
            {title && (
                <h2 className="text-white md:text-[28px] text-[20px] pt-6 px-8 md:px-16 font-bold text-left">
                        {title}
                    </h2>
                )}
                <div className="flex items-center relative mb-6">
                    <IoChevronBackOutline 
                        className={`hidden md:block text-white text-[50px] z-10 absolute ml-2 cursor-pointer`}
                        onClick={() => elementRef.current && sliderLeft(elementRef.current)}
                    />   
                    <div
                        ref={elementRef}
                        className={`
                            flex overflow-x-auto scrollbar-none scroll-smooth
                            px-8 md:px-16 pt-5 md:pb-5 md:gap-8
                            gap-5 justify-start
                        `}
                    >
                        {children}
                    </div>
                    <IoChevronForwardOutline 
                        className={`hidden md:block text-white text-[50px] z-10 absolute right-0 mr-2 cursor-pointer`}
                        onClick={() => elementRef.current && sliderRight(elementRef.current)}
                    />   
                </div>   
            </div>
        </>
    )
}