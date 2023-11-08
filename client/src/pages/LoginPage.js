import React, { useState } from 'react';
import Login from "./Login";
import Signup from './Signup';
import StaffLogin from './StaffLogin';
import './LoginPage.css';

function LoginPage({ setSelectedRole, selectedRole, attemptLogin, attemptSignup, attemptStaffLogin }) {
    return (
        <div className="login-page-container">
            <div className="role-selection-box">
            <p className="role-selection-title">SELECT YOUR ROLE:</p>
            <button className="btn btn-primary btn-margin" onClick={() => setSelectedRole("customer")}>Customer</button>
            <button className="btn btn-primary" onClick={() => setSelectedRole("staff")}>Staff</button>
            </div>


            {selectedRole === "customer" ? (
                <>
                    <Login attemptLogin={attemptLogin} />
                    <Signup attemptSignup={attemptSignup} />
                </>

            ) : (
                <StaffLogin attemptStaffLogin={attemptStaffLogin} />
            )}

        </div>
    );
}

export default LoginPage;
