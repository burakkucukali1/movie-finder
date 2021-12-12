import axios from 'axios';
export const serviceWorker = async (endpoint) => {
    const baseImgUrl = 'https://image.tmdb.org/t/p/original';

    try {
        const { data } = await axios.get(endpoint)
        const modifiedData = data['results'].map((movie) => ({
            id: movie.id,
            name: movie.original_title,
            voteRate: Number(movie.vote_average) * 10,
            date: movie.hasOwnProperty('release_date') ? movie.release_date : movie.first_air_date,
            posterUrl: `${baseImgUrl}${movie.poster_path}`
        }))
        return modifiedData
    } catch (error) { }
}
