import React from 'react'
import PopularList from '../../components/List/PopularList'
import FreeList from '../../components/List/FreeList'
import './Home.css';

function Home() {

    return (
        <div className="container">
            <div className="logo"><img style={{ marginTop: "20px", marginBottom: "20px", width: "250px" }} alt="finartz" src="https://finartz.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Ffinartz-logo.0514d4c27dc7e07a1a9cfe3c4c9608a2.svg&w=256&q=75" /></div>
            <section className="popular-list">
                <PopularList />
            </section>
            <section className="free-list">
                <FreeList />
            </section>
        </div>
    )
}

export default Home
