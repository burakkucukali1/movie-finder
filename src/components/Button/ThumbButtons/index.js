import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import './ThumbButtons.css'
function Index() {
    const arrowUp = <FontAwesomeIcon icon={faArrowCircleUp} />
    const arrowDown = <FontAwesomeIcon icon={faArrowCircleDown} />

    const [up, setUpStatus] = useState(true);
    const [down, setDownStatus] = useState(true);

    const handleVoting = (status) => status ? setUpStatus(!up) : setDownStatus(!down);

    return (
        <div className="button-container">
            <button style={{ visibility: up ? true : 'hidden' }} onClick={() => handleVoting(false)}><div className="arrowDown">{arrowDown}</div></button>
            <button style={{ visibility: down ? true : 'hidden' }} onClick={() => handleVoting(true)}><span className="arrowUp">{arrowUp}</span></button>
        </div>
    )
}

export default Index
