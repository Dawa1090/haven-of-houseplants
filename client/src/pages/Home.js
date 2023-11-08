

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './home.css'


function Home({ currentUser, currentStaff, attemptLogin, attemptSignup, logout, logoutStaff, attemptStaffLogin, selectedRole, setSelectedRole, isLoggedIn, isStaffLoggedIn, discountedPlants }) {


    useEffect(() => {
        if (currentUser && currentUser.username) {
            // You can display a message or redirect the user to a different page
        }
    }, [currentUser]);

    return (

        <div className="homeContainer">
            <div className="jumbotron">

                <h1 className="display-4">A place for all the plants.</h1>
                
                <hr className="my-4" />
                <div className="landingContainer">
                    <img
                        src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/11/27162454/fb-cover-1-2.jpg"
                        alt="Plants"
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


                    
                    <Link to="/plants#top" className="btn btn-primary">
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
                </div>
            </div>
        </div>
    );
}


export default Home;