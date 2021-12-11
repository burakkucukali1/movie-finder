import React from 'react'
import './Card.css'
import CircularProgress from '../CircularProgress/CircularProgress'
import ThumbButtons from '../Button/ThumbButtons'

function Card({ name, date, imgSrc, voteRate }) {

    return (
        <div className='card'>
            <div className='card__buttons'>
                <ThumbButtons />
            </div>
            <div className='card__img'>
                <img alt={name} src={imgSrc} />
            </div>
            <div className='card__content'>
                <div className="card__progressbar">
                    <CircularProgress voteRate={voteRate} />
                </div>
                <h4>{name}</h4>
                <span>{date}</span>
            </div>
        </div>
    )
}

export default Card
