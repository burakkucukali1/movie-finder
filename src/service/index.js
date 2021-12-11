import axios from 'axios';

const apiKey = 'c8a692ea7b7d8a740dd91606ef17f4f0';
const baseUrl = 'https://api.themoviedb.org/3';
const streamingMovieUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&watch_region=US&with_watch_monetization_types=flatrate`
const onTvUrl = `${baseUrl}/tv/popular?api_key=${apiKey}`
const forRentUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&watch_region=US&with_watch_monetization_types=rent`
const inTheatresUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&region=US&with_release_type=3|2`
const baseImgUrl = 'https://image.tmdb.org/t/p/original';

export const fetchStreamingMovies = async () => {
    try {
        const { data } = await axios.get(streamingMovieUrl)
        const modifiedData = data['results'].map((movie) => ({
            id: movie.id,
            name: movie.original_title,
            voteRate: parseInt(movie.vote_average) * 10,
            date: movie.release_date,
            posterUrl: `${baseImgUrl}${movie.poster_path}`
        }))
        return modifiedData
    } catch (error) { }
}
export const fetchPopularsOnTv = async () => {
    try {
        const { data } = await axios.get(onTvUrl)
        const modifiedData = data['results'].map((tvPopular) => ({
            id: tvPopular.id,
            name: tvPopular.name,
            voteRate: parseInt(tvPopular.vote_average) * 10,
            date: tvPopular.first_air_date,
            posterUrl: `${baseImgUrl}${tvPopular.poster_path}`
        }))
        return modifiedData
    } catch (error) { }
}
export const fetchForRents = async () => {
    try {
        const { data } = await axios.get(forRentUrl)
        const modifiedData = data['results'].map((item) => ({
            id: item.id,
            name: item.original_title,
            voteRate: parseInt(item.vote_average) * 10,
            date: item.release_date,
            posterUrl: `${baseImgUrl}${item.poster_path}`
        }))
        return modifiedData
    } catch (error) { }
}
export const fetchTheatres = async () => {
    try {
        const { data } = await axios.get(inTheatresUrl)
        const modifiedData = data['results'].map((theatre) => ({
            id: theatre.id,
            name: theatre.original_title,
            voteRate: parseInt(theatre.vote_average) * 10,
            date: theatre.release_date,
            posterUrl: `${baseImgUrl}${theatre.poster_path}`
        }))
        return modifiedData
    } catch (error) { }
}
