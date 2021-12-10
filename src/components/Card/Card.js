import React from 'react'
import './Card.css'
import CircularProgress from '../CircularProgress/CircularProgress'
import ThumbButtons from '../Button/ThumbButtons'

function Card() {

    return (
        <div className='card'>
            <div className='card__buttons'>
                <ThumbButtons />
            </div>
            <div className='card__img'>
                <img alt="test" src="https://image.tmdb.org/t/p/original/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg" />
            </div>
            <div className='card__content'>
                <div className="card__progressbar">
                    <CircularProgress />
                </div>
                <h4>Red Notice</h4>
                <span>2021-11-04</span>
            </div>
        </div>
    )
}

export default Card
