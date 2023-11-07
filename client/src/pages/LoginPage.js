import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Login from "./Login";
import Signup from './Signup';
import StaffLogin from './StaffLogin';

function LoginPage({ setSelectedRole, selectedRole, attemptLogin, attemptSignup, attemptStaffLogin }) {
    return (
        <div>
            <p>Select your role:</p>
            <button className="btn btn-primary btn-margin" onClick={() => setSelectedRole("customer")}>Customer</button>
            <button className="btn btn-primary" onClick={() => setSelectedRole("staff")}>Staff</button>


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
