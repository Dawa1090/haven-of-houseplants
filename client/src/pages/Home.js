

import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import StaffLogin from "./StaffLogin";
import { Link } from "react-router-dom";
import './home.css'


function Home({ currentUser, currentStaff, attemptLogin, attemptSignup, logout, logoutStaff, attemptStaffLogin, selectedRole, setSelectedRole, isLoggedIn, isStaffLoggedIn, discountedPlants }) {


    useEffect(() => {
        if (currentUser && currentUser.username) {
            // You can display a message or redirect the user to a different page
        }
    }, [currentUser]);

    return (

        <div className="container">
            <div className="jumbotron">

                <h1 className="display-4">A place for all the plants.</h1>
                
                <hr className="my-4" />


                <div className="landingContainer">
                    <img
                        src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/11/27162454/fb-cover-1-2.jpg"
                        alt="Plants"
                        style={{ width: "100%", height: "auto" }}
                    />


                    <div className="promotional-sale">
                        <h2>Promotional Sale: Save on Select Plants!</h2>
                        <p>Check out our exclusive collection of plants on sale.</p>
                    </div>

                    <div className="discounted-plants">
                        <div className="plant-cards-container">
                            {discountedPlants.map((plant) => (
                                <div key={plant.id} >
                                    <div className="thumbnail">
                                        <img className="thumb-img" src={plant.image} alt={plant.name} />
                                        </div>
                                        <h4>{plant.name}</h4>
                                        <p>Price: ${plant.price}</p>
                                        <p>Discounted Price: ${plant.discounted_price}</p>
                                    </div>
                            ))}
                        </div>
                    </div>


                    
                    <Link to="/plants" className="btn btn-primary">
                        Shop Now
                    </Link>

                    {currentUser && currentUser.username ? (
                        <div>
                            <h2>Welcome {currentUser.username}!</h2>
                        </div>
                    ) : currentStaff && currentStaff.staffname ? (
                        <div>
                            <h2>Welcome {currentStaff.staffname}!</h2>
                        </div>
                    )
                        : (
                            <div>
                                {/* Render login forms based on the selected role */}
                                {/* {selectedRole === "customer" ? (
                                    <>
                                        <Login attemptLogin={attemptLogin} />
                                        <Signup attemptSignup={attemptSignup} />
                                    </>

                                ) : (
                                    <StaffLogin attemptStaffLogin={attemptStaffLogin} />
                                )} */}

                            </div>
                        )}

                    

                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                        </ul>
                        <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}


export default Home;