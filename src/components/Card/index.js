import React from 'react'
import './Card.css'
import CircularProgress from '../CircularProgress/CircularProgress'
import ThumbButtons from '../Button/ThumbButtons'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDateConverter } from '../../hooks/useDateConverter'

function Card({ name, date, imgSrc, voteRate }) {
    const modifedDate = useDateConverter(date) //Using Custom Hook

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
                <div className='card__detail'>
                    <h4>{name}</h4>
                    <p>{modifedDate}</p>

                </div>
            </div>
        </div>
    )
}

export default Card
