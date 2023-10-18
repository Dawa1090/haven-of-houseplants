import React from 'react'
import { Link } from 'react-router-dom'
import Login from "./Login";
import Signup from "./Signup";
import UserDetails from "./UserDetails";
import './styles.css'; 

function Home({ currentUser, attemptLogin, attemptSignup, logout }) {
    return (
        <div className='background-image'>
            <div className='headerContainer'>
                <h1 className='titleContainer'>Let's Caffeine</h1>
                {currentUser ? (
                    <div>
                        <UserDetails currentUser={currentUser} logout={logout} />
                        <Link to='/coffee'>
                            <button> Coffee Time </button>
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


