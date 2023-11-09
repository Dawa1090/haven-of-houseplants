

import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './home.css'




function Home({ currentUser, currentStaff, attemptLogin, attemptSignup, logout, logoutStaff, attemptStaffLogin, selectedRole, setSelectedRole, isLoggedIn, isStaffLoggedIn, discountedPlants }) {
    const sliderRef = useRef(null);




    useEffect(() => {

    }, []);



    useEffect(() => {
        if (currentUser && currentUser.username) {
            // You can display a message or redirect the user to a different page
        }
    }, [currentUser]);

    return (

        <div className="homeContainer">
            <div className="jumbotron">

                {/* <h1 className="display-4">A Cozy Haven in Every Home. </h1> */}
                <h1 className="display-4">
                    A <span className="styled-letter">Cozy</span> Haven in Every Home.
                </h1>

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
                        </div>
                    )}

                <hr className="my-4" />
                <div className="landingContainer">
                    <div className="slider-container">
                        <Slider
                            ref={sliderRef}
                            infinite={true}
                            slidesToShow={1}
                            slidesToScroll={1}
                            dots={false}
                            arrows={false}
                            autoplay={true}
                            autoplaySpeed={2000}
                            speed={500}
                        >

                            <div>
                                <img
                                    src="https://images.livspace-cdn.com/plain/https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2017/11/27162454/fb-cover-1-2.jpg"
                                    alt="Plants"
                                />
                            </div>

                            <div>
                                <img
                                    src="https://www.houseplant.co.uk/cdn/shop/files/houseplant_essentials.jpg?v=1698746787&width=1500"
                                    alt="Plants"
                                />
                            </div>
                        </Slider>
                    </div>




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

                </div>

            </div>
        </div>
    );
}


export default Home;