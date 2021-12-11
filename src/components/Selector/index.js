import React from 'react'
import './Selector.css'
function Index({ selectList, handleClick, activeButton }) {

    return (
        <div className="selector">
            <h2 className="selector__h2">What's Popular</h2>
            <div className="selector__list">
                {selectList.map((item, index) => {
                    const className = activeButton === item.name ? "active" : "";
                    const selectedClassName = activeButton === item.name ? "selected" : "";
                    return (
                        <div key={index} className={selectedClassName}>
                            <h3 className='selector__h3'>
                                <button
                                    className={`selector__button ${className}`}
                                    name={item.name}
                                    value={item.value}
                                    onClick={handleClick}
                                >
                                    {item.name}
                                </button>
                            </h3>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Index
