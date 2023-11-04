

import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import UserDetails from "./UserDetails";
import StaffLogin from "./StaffLogin";
import StaffDetails from "./StaffDetails";

function Home({ currentUser, attemptLogin, attemptSignup, logout, attemptStaffLogin, selectedRole, setSelectedRole }) {



    useEffect(() => {
        if (currentUser && currentUser.username) {
            // You can display a message or redirect the user to a different page
        }
    }, [currentUser]);

    return (
        <div className="background-image">
            <div className="headerContainer">
                <img
                    src="https://media.istockphoto.com/id/892815818/vector/vector-illustration-with-indoor-houseplants-poster-cover-template-design-with-various.jpg?s=170667a&w=0&k=20&c=pBEmWpZ-2fAiN7P80T525vZrtxeq1tLOpGCSf6htC8E="
                    alt="Plants"
                    style={{ width: "50%", height: "auto" }}
                />
                {currentUser && currentUser.username ? (
                    <div>
                        <UserDetails currentUser={currentUser} logout={logout} />
                    </div>
                ) : (
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
                <div>
                    <p>Select your role:</p>
                    <button onClick={() => setSelectedRole("customer")}>Customer</button>
                    <button onClick={() => setSelectedRole("staff")}>Staff</button>
                </div>

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
);
}


export default Home;