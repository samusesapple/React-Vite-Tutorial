// images
import starwars from '../assets/images/starwars.png'
import marvel from '../assets/images/marvel.png'
import pixar from '../assets/images/pixar.png'
import nationalGeographic from '../assets/images/nationalGeographic.png'
import disney from '../assets/images/disney.png'
// videos
import disneyV from '../assets/videos/disney.mp4'
import starwarsV from '../assets/videos/star-wars.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import nationalGeographicV from '../assets/videos/national-geographic.mp4'


interface Item {
    id: number;
    image: string;
    video: string;
}

export default function ProductionHouse() {
    const list: Item[] = [
        { id: 1, image: starwars, video: starwarsV },
        { id: 2, image: marvel, video: marvelV },
        { id: 3, image: pixar, video: pixarV },
        { id: 4, image: nationalGeographic, video: nationalGeographicV },
        { id: 5, image: disney, video: disneyV },
    ]

    return (
        <div className='flex justify-center p-2 gap-2 px-5 md:gap-5 md:px-16'>
            {list.map((item) => (
                <div key={item.id} 
                    className='border-2 border-gray-600 rounded-lg hover:scale-110 hover:border-gray-300 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black'>
                    <video src={item.video} autoPlay muted loop playsInline
                        className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-30'
                    />
                    <img src={item.image}
                        className='w-full z-[1] bg-[#15151e] rounded-md'
                    />
                </div>
            ))}
        </div>
    )
}