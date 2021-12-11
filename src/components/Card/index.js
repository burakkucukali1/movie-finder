import React from 'react'
import './Card.css'
import CircularProgress from '../CircularProgress/CircularProgress'
import ThumbButtons from '../Button/ThumbButtons'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Card({ name, date, imgSrc, voteRate }) {

    function dateConverter(dateData) {
        const dateArr = dateData.split('-');
        let date1 = new Date(dateArr[0], dateArr[1], dateArr[2]).toString().slice(3, 15)
        let modifiedDate = date1.slice(0, 7) + ',' + date1.slice(7)
        return modifiedDate
    }

    return (
        <div className='card'>
            <div className='card__buttons'>
                <ThumbButtons />
            </div>
            <div className='card__img'>
                <LazyLoadImage className='card__img'
                    effect="blur"
                    alt={name}
                    src={imgSrc}
                    width="150px"
                    height="225px"
                />
            </div>
            <div className='card__content'>
                <div className="card__progressbar">
                    <CircularProgress voteRate={voteRate} />
                </div>
                <h4>{name}</h4>
                <span>{dateConverter(date)}</span>
            </div>
        </div>
    )
}

export default Card
