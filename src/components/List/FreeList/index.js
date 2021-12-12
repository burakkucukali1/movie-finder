import React, { useEffect, useState } from 'react'
import Selector from '../../Selector'
import Card from '../../Card'
import { fetchFreeMovies, fetchFreeTv } from "../../../service"

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
    const [activeButton, setActiveBottomButton] = useState(selectList[0].name)
    const [currentList, setCurrentList] = useState([]);


    const handleFreeListClick = (e) => {
        const name = e.target.name;
        setActiveBottomButton(name);
    }

    useEffect(() => {

        switch (activeButton) {
            case 'Movies':
                fetchFreeMovies().then(data => setCurrentList(data));
                break;
            case 'TV':
                fetchFreeTv().then(data => setCurrentList(data));
                break;
            default:
                break;
        }
    }, [activeButton])


    return (
        <div>
            <Selector title={'Free To Watch'} selectList={selectList} handleClick={handleFreeListClick} activeButton={activeButton} />
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
