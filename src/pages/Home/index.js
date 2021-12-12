import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/'
import Selector from '../../components/Selector/'
import './Home.css'
import { fetchStreamingMovies, fetchPopularsOnTv, fetchForRents, fetchTheatres, fetchFreeMovies, fetchFreeTv } from "../../service"

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
const selectFreeList = [
    {
        name: "Movies",
        value: "Movies"
    },
    {
        name: "TV",
        value: "tv"
    }
];
function Home() {
    const [activeButton, setActiveButton] = useState(selectList[0].name)
    const [activeBottomButton, setActiveBottomButton] = useState(selectFreeList[0].name)
    const [currentList, setCurrentList] = useState([]);
    const [currentFreeList, setCurrentFreeList] = useState([]);

    const handleClick = (e) => {
        const name = e.target.name;
        setActiveButton(name);
    }
    const handleFreeListClick = (e) => {
        const name = e.target.name;
        setActiveBottomButton(name);
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
        switch (activeBottomButton) {
            case 'Movies':
                fetchFreeMovies().then(data => setCurrentFreeList(data));
                break;
            case 'TV':
                fetchFreeTv().then(data => setCurrentFreeList(data));
                break;
            default:
                break;
        }
    }, [activeButton, activeBottomButton])

    return (
        <div className="container">
            <h1><img style={{ marginTop: "20px", marginBottom: "20px", width: "250px" }} alt="finartz" src="https://finartz.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ffinartz-logo.0514d4c27dc7e07a1a9cfe3c4c9608a2.svg&w=256&q=75" /></h1>
            <Selector title={"What's Popular"} selectList={selectList} handleClick={handleClick} activeButton={activeButton} />
            <div className="card-list">
                {currentList.map((item, index) => {
                    return <div key={index}>
                        <Card name={item.name} date={item.date} imgSrc={item.posterUrl} voteRate={item.voteRate} />
                    </div>
                })
                }
            </div>
            <Selector title={'Free To Watch'} selectList={selectFreeList} handleClick={handleFreeListClick} activeButton={activeBottomButton} />
            <div className="card-list">
                {currentFreeList.map((item, index) => {
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
