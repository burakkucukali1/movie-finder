import React, { useEffect, useState } from 'react'
import Selector from '../../Selector'
import Card from '../../Card'
import { serviceWorker } from '../../../helpers/serviceWorker'
import { freeTvUrl, freeMoviesUrl } from "../../../service/endpoints"

const selectList = [
    {
        name: "Movies",
        value: "Movies"
    },
    {
        name: "TV",
        value: "tv"
    }
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
            case 'Movies':
                serviceWorker(freeMoviesUrl).then(data => setCurrentList(data))
                break;
            case 'TV':
                serviceWorker(freeTvUrl).then(data => setCurrentList(data))
                break;
            default:
                break;
        }
    }, [activeButton])


    return (
        <div>
            <Selector title={'Free To Watch'} selectList={selectList} handleClick={handleClick} activeButton={activeButton} />
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
