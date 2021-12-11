import React, { useEffect, useState } from 'react'
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


    console.log(currentList);
    return (
        <div className="container">
            <h1>HOME</h1>
            <Selector selectList={selectList} handleClick={handleClick} activeButton={activeButton} />
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
