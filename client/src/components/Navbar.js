import React from "react";
import { Link } from "react-router-dom";
import '../pages/styles.css';
import '../pages/About.css';

function Navbar({ currentUser }) {
    return (
        <div className="navbar">
            <div className="rightside">
                <Link className='Home' to='/'>Home</Link>
                {currentUser && currentUser.username ? (
                    <Link className='Menu' to='/coffee'>Coffee</Link>
                ) : (
                    <span className='disabled-link'>Coffee</span>
                )}
                <Link className='about' to='/about'>About</Link>
            </div>
        </div>
    );
}

export default Navbar;
