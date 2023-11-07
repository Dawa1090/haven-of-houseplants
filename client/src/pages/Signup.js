import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


function Signup({ attemptSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();


  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    attemptSignup({ username, password });
    history.push("/plants");
  }

  return (

    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="input-group mb-3">
      <h2 className="signup-title">Signup</h2>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Username" aria-label="Username" onChange={handleChangeUsername}
            value={username} />
          <span className="input-group-text">::</span>
          <input className="form-control" placeholder="Password" aria-label="Password" type="password" onChange={handleChangePassword}
            value={password} />
          <button className="btn btn-outline-secondary" type="submit">Sign Up</button>
        </div>
      </div>
    </form>
    

    

  
  );
}

export default Signup;
