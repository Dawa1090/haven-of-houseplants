import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            <div className="rightside">
                <Link className='Home' to='/'>Home</Link>
                <Link className='Menu' to='/coffee'>Coffee</Link>
                <Link className='about' to='/about'>About</Link>
            </div>
        </div>
    );
}

export default Navbar;
