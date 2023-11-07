
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
      history.push("/plants");
    }
  
    return (

      <form className="login-form" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <h2 className="login-title">Staff Login</h2>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" onChange={handleChangeUsername}
            value={staffname} />
          <span className="input-group-text">::</span>
          <input className="form-control" placeholder="Password" aria-label="Password" type="password" onChange={handleChangePassword}
            value={password} />
          <button className="btn btn-outline-secondary" type="submit">Login as Staff</button>
        </div>
      </div>
    </form>

    );
  }
  
  export default StaffLogin;
  