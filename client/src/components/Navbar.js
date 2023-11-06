import React from "react";
import { Link } from "react-router-dom";
import './style.css';

function Navbar({ isLoggedIn, logout, query, onUpdateQuery }) {
  //console.log(currentUser)
  return (
    <div >

      <nav className="navbar navbar-default navbar-fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">
            <i className="bi bi-tree-fill"></i>
            <span className="logo" role="img">
              🌱
            </span>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  <Link className='Home' to='/'>Home</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link">
                  <Link className='Plants' to='/plants'>Plants</Link>
                </div>
              </li>


              <li>
                <input type="text"
                  id="search"
                  placeholder="Search Plant..."
                  value={query}
                  onChange={onUpdateQuery} className="form-control me-2" aria-label="Search" />
              </li>


            </ul>

            <form className="d-flex" role="search">
              <div className="nav-link">
                <Link className='Plants' to='/plants'>{isLoggedIn && <Link className='Cart' to='/cart'>Shopping Cart</Link>}</Link>
              </div>
              <div className="nav-link" onClick={logout}>
                <Link to='/'>Log Out</Link>
              </div>
            </form>
          </div>
        </div>
      </nav>


    </div>
  );
}

export default Navbar;
