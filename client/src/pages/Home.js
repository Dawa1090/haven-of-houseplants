import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <div className='headerContainer'>
                <h1>Taste of Nepal</h1>
                <p>"A Flavorful Journey"</p>
                <Link to='/home'>
                    <button> Menu awaits! </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
