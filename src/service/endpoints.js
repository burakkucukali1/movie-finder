const apiKey = 'c8a692ea7b7d8a740dd91606ef17f4f0';
const baseUrl = 'https://api.themoviedb.org/3';
export const streamingMovieUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&watch_region=US&with_watch_monetization_types=flatrate`
export const onTvUrl = `${baseUrl}/tv/popular?api_key=${apiKey}`
export const forRentUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&watch_region=US&with_watch_monetization_types=rent`
export const inTheatresUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&region=US&with_release_type=3|2`
export const freeMoviesUrl = `${baseUrl}/discover/movie?api_key=${apiKey}`
export const freeTvUrl = `${baseUrl}/discover/tv?api_key=${apiKey}`
