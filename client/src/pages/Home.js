

import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import StaffLogin from "./StaffLogin";

function Home({ currentUser, currentStaff, attemptLogin, attemptSignup, logout, logoutStaff, attemptStaffLogin, selectedRole, setSelectedRole, isLoggedIn, isStaffLoggedIn }) {



    useEffect(() => {
        if (currentUser && currentUser.username) {
            // You can display a message or redirect the user to a different page
        }
    }, [currentUser]);

    return (

        <div className="container">
            <div className="jumbotron">

                <h1 class="display-4">Welcome to the Plant Shop</h1>
                <p class="lead">A place for all the plants.</p>
                <hr class="my-4" />


                <div className="landingContainer">
                    <img
                        src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Plants"
                        style={{ width: "20%", height: "auto" }}
                    />
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
                                {selectedRole === "customer" ? (
                                    <>
                                        <Login attemptLogin={attemptLogin} />
                                        <Signup attemptSignup={attemptSignup} />
                                    </>

                                ) : (
                                    <StaffLogin attemptStaffLogin={attemptStaffLogin} />
                                )}

                            </div>
                        )}

                    {/* Role selection buttons */}

                    {isLoggedIn || isStaffLoggedIn ? "" : (
                        <div>
                            <p>Select your role:</p>
                            <button className="btn btn-primary btn-margin" onClick={() => setSelectedRole("customer")}>Customer</button>
                            <button className="btn btn-primary" onClick={() => setSelectedRole("staff")}>Staff</button>
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