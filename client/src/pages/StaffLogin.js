
import React, { useState } from 'react';

function StaffLogin({ attemptLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleChangeUsername = (e) => setUsername(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);
  
    function handleSubmit(e) {
      e.preventDefault();
      // Send a request to the Flask back end with the "staff" role
      attemptLogin({ username, password, role: "staff" });
    }
  
    return (
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Staff Login</h2>
        <input
          type="text"
          className="login-input"
          onChange={handleChangeUsername}
          value={username}
          placeholder="Username"
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
  