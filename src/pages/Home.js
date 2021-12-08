import React, { useEffect, useState } from 'react'
import { fetchStreamingMovies, fetchPopularsOnTv, fetchForRents, fetchTheatres } from "../service"
function Home() {
    const [streamingMovieList, setStreamingMovieList] = useState([]);
    const [popularsOnTv, setPopularsOnTv] = useState([]);
    const [forRents, setForRents] = useState([]);
    const [theatres, setTheatres] = useState([]);

    const fetchOperations = async () => {
        fetchStreamingMovies().then(data => setStreamingMovieList(data));
        fetchPopularsOnTv().then(data => setPopularsOnTv(data));
        fetchForRents().then(data => setForRents(data));
        fetchTheatres().then(data => setTheatres(data));
    }
    useEffect(() => {
        fetchOperations()
    }, [])


    return (
        <div>
            <h1>HOME</h1>
        </div>
    )
}

export default Home