import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp, faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import './ThumbButtons.css'
function Index() {

    const [visibileStatus, setVisibileStatus] = useState('all')
    const [counter, setCounter] = useState(0)
    const [upVisibilityStyle, setUpVisibilityStyle] = useState({ visibility: 'visible' })
    const [downVisibilityStyle, setDownVisibilityStyle] = useState({ visibility: 'visible' })
    const arrowUp = <FontAwesomeIcon icon={faArrowCircleUp} />
    const arrowDown = <FontAwesomeIcon icon={faArrowCircleDown} />

    const voteUp = (e) => {
        e.preventDefault();
        setVisibileStatus('justUp')
        setCounter(counter + 1)
    }

    const voteDown = (e) => {
        e.preventDefault();
        setVisibileStatus('justDown')
        setCounter(counter + 1)

    }
    useEffect(() => {
        if (visibileStatus === 'justUp' && counter === 1) {
            setDownVisibilityStyle({ visibility: 'hidden' })
        } else if (visibileStatus === 'justDown' && counter === 1) {
            setUpVisibilityStyle({ visibility: 'hidden' })
        } else if (counter === 2) {
            setUpVisibilityStyle({ visibility: 'visible' })
            setDownVisibilityStyle({ visibility: 'visible' })
            setCounter(0)
        }
    }, [counter, visibileStatus])
    return (
        <div className="button-container">
            <button style={downVisibilityStyle} onClick={(e) => voteDown(e)}><div className="arrowDown">{arrowDown}</div></button>
            <button style={upVisibilityStyle} onClick={(e) => voteUp(e)}><span className="arrowUp">{arrowUp}</span></button>

        </div>
    )
}

export default Index
