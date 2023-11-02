import React from "react";
import { Link } from "react-router-dom";
import './style.css'; 

function Navbar({ currentUser }) {
  return (
    <div className="navbar">
      <div className="rightside">
        <Link className='Home' to='/'>Home</Link>
        {currentUser && currentUser.username ? (
                    <Link className='Plants' to='/plants'>Plants</Link>
                ) : (
                    <span className='disabled-link'>Plants</span>
                )}
        <Link className='Cart' to='/cart'>Shopping Cart</Link>
      </div>
    </div>
  );
}

export default Navbar;
