
import React, { useState } from "react";

function Login({ attemptLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    attemptLogin({ username, password });
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2 className="login-title">Login</h2>
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
      <input type="submit" className="login-button" value="Login" />
    </form>
  );
}

export default Login;
