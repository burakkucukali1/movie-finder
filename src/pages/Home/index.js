import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/'
import Selector from '../../components/Selector/'
import './Home.css'
import { fetchStreamingMovies, fetchPopularsOnTv, fetchForRents, fetchTheatres } from "../../service"
function Home() {
    const [streamingMovieList, setStreamingMovieList] = useState([]);
    const [popularsOnTv, setPopularsOnTv] = useState([]);
    const [forRents, setForRents] = useState([]);
    const [theatres, setTheatres] = useState([]);



    // const selectOption = (e,selected) => {
    //    e.target.addS
    // }

    const selectList = [
        {
            name: "Streaming",
            value: "streaming"
        },
        {
            name: "On TV",
            value: "on tv"
        },
        {
            name: "For Rent",
            value: "for Rent"
        },
        {
            name: "In Theaters",
            value: "in Theaters"
        },
    ];
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
            <Selector selectList={selectList} />
            <div className="card-list">
                <Card />
            </div>

        </div>

    )
}

export default Home
