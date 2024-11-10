import axios from "axios";

const MOVIE_BASE_URL = "https://api.themoviedb.org/3";
// https://api.themoviedb.org/3/movie/popular?api_key=a33a314ef556238f97251977ce8635e1

const getPopularMovies = async () => {
    const baseUrl = MOVIE_BASE_URL + "/movie/popular";
    const response = await axios.get(`${baseUrl}?api_key=${import.meta.env.VITE_API_KEY}`);
    return response.data;
}

const getMoviesByGenre = async (genreId: number) => {
    const baseUrl = MOVIE_BASE_URL + "/discover/movie";
    const response = await axios.get(`${baseUrl}?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genreId}`);
    return response.data;
}   

/* 응답값
    {
        "adult": false,
        "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 912649,
        "original_language": "en",
        "original_title": "Venom: The Last Dance",
        "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
        "popularity": 4674.885,
        "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
        "release_date": "2024-10-22",
        "title": "Venom: The Last Dance",
        "video": false,
        "vote_average": 6.518,
        "vote_count": 589
    },
*/

export default {
    getPopularMovies,
    getMoviesByGenre,
}