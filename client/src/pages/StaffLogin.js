
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

function StaffLogin({ attemptStaffLogin }) {
    const [staffname, setStaffname] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    const handleChangeUsername = (e) => setStaffname(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
  
    function handleSubmit(e) {
      e.preventDefault();
      // Send a request to the Flask back end with the "staff" role
      attemptStaffLogin({ staffname, password, role: "staff" });
      history.push("/staff");
    }
  
    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Staff Login</h2>
        <input
          type="text"
          className="login-input"
          onChange={handleChangeUsername}
          value={staffname}
          placeholder="staff name"
        />
        <input
          type="password"
          className="login-input"
          onChange={handleChangePassword}
          value={password}
          placeholder="Password"
        />
        <input type="submit" className="login-button" value="Login as Staff" />
      </form>
    );
  }
  
  export default StaffLogin;
  