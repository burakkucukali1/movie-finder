import React, { useEffect, useState } from 'react'
import Selector from '../../Selector'
import Card from '../../Card'
import { serviceWorker } from '../../../helpers/serviceWorker'
import { streamingMovieUrl, onTvUrl, forRentUrl, inTheatresUrl } from "../../../service/endpoints"

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
function Index() {
    const [activeButton, setActiveButton] = useState(selectList[0].name)
    const [currentList, setCurrentList] = useState([]);

    const handleClick = (e) => {
        const name = e.target.name;
        setActiveButton(name);
    }
    useEffect(() => {
        switch (activeButton) {
            case 'Streaming':
                serviceWorker(streamingMovieUrl).then(data => setCurrentList(data));
                break;
            case 'On TV':
                serviceWorker(onTvUrl).then(data => setCurrentList(data));
                break;
            case 'For Rent':
                serviceWorker(forRentUrl).then(data => setCurrentList(data));
                break;
            case 'In Theaters':
                serviceWorker(inTheatresUrl).then(data => setCurrentList(data));
                break;
            default:
                break;
        }
    }, [activeButton])
    return (
        <div className="popular-list">
            <Selector title={"What's Popular"} selectList={selectList} handleClick={handleClick} activeButton={activeButton} />
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

export default Index
