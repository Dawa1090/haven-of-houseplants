import React from 'react'
import { Link } from 'react-router-dom'
import Login from "./Login";
import Signup from "./Signup";
import UserDetails from "./UserDetails"; 

function Home({ currentUser, attemptLogin, attemptSignup, logout }) {
    return (
        <div className='home'>
            <div className='headerContainer'>
                <h1>Let's Caffeine</h1>
                {currentUser ? (
                    <div>
                        <UserDetails currentUser={currentUser} logout={logout} />
                        <Link to='/coffee'>
                            <button> Menu awaits! </button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <Login attemptLogin={attemptLogin}  />
                        <Signup attemptSignup={attemptSignup} />
                        
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;