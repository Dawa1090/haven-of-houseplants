import React from "react";
import { Link } from "react-router-dom";
import './style.css'; 

function Navbar({ currentUser }) {
  //console.log(currentUser)
  return (
    <div className="navbar">
      <div className="rightside">
        <Link className='Home' to='/'>Home</Link>
        <Link className='Plants' to='/plants'>Plants</Link>
        {/* {currentUser && currentUser.username ? (
                    
                ) : (
                    <span className='disabled-link'>Plants</span>
                )} */}
        {currentUser && <Link className='Cart' to='/cart'>Shopping Cart</Link>}
      </div>
    </div>
  );
}

export default Navbar;
