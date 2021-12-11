import React, { useEffect, useState, lazy, Suspense } from 'react'
import Card from '../../components/Card/'
import Selector from '../../components/Selector/'
import './Home.css'
import { fetchStreamingMovies, fetchPopularsOnTv, fetchForRents, fetchTheatres } from "../../service"

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
function Home() {
    const [activeButton, setActiveButton] = useState(selectList[0].name)
    const [currentList, setCurrentList] = useState([]);
    //12.8 transferred 15.0mb resources finish 7.56s
    const handleClick = (e) => {
        const name = e.target.name;
        setActiveButton(name);
    }

    useEffect(() => {
        switch (activeButton) {
            case 'Streaming':
                fetchStreamingMovies().then(data => setCurrentList(data));
                break;
            case 'On TV':
                fetchPopularsOnTv().then(data => setCurrentList(data));
                break;
            case 'For Rent':
                fetchForRents().then(data => setCurrentList(data));
                break;
            case 'In Theaters':
                fetchTheatres().then(data => setCurrentList(data));
                break;
            default:
                break;
        }
    }, [activeButton])



    // const Card = lazy(() => import('../../components/Card/'))
    // const Selector = lazy(() => import('../../components/Selector/'))
    //Finish 7.25s

    return (
        <div className="container">
            <h1>HOME</h1>
            <Suspense fallback={<div>loading...</div>}>
                <Selector selectList={selectList} handleClick={handleClick} activeButton={activeButton} />
            </Suspense>
            <div className="card-list">
                {currentList.map((item, index) => {
                    return <div key={index}>
                        <Card name={item.name} date={item.date} imgSrc={item.posterUrl} voteRate={item.voteRate} />
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default Home
