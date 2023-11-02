
// import React, { useState } from "react";


// function Signup({ attemptSignup }) {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const handleChangeUsername = (e) => setUsername(e.target.value);
//     const handleChangePassword = (e) => setPassword(e.target.value);

//     function handleSubmit(e) {
//         e.preventDefault();
//         attemptSignup({ username, password });
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <h2 className="signup">Signup</h2>

//             <input
//                 type="text"
//                 onChange={handleChangeUsername}
//                 value={username}
//                 placeholder="username"
//             />

//             <input
//                 type="password" 
//                 onChange={handleChangePassword}
//                 value={password}
//                 placeholder="password"
//             />

//             <input type="submit" value="Signup" />
//         </form>
//     );
// }

// export default Signup;
import React, { useState } from "react";

function Signup({ attemptSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  function handleSubmit(e) {
    e.preventDefault();
    attemptSignup({ username, password });
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2 className="signup-title">Signup</h2>
      <input
        type="text"
        className="signup-input"
        onChange={handleChangeUsername}
        value={username}
        placeholder="Username"
      />
      <input
        type="password"
        className="signup-input"
        onChange={handleChangePassword}
        value={password}
        placeholder="Password"
      />
      <input type="submit" className="signup-button" value="Signup" />
    </form>
  );
}

export default Signup;
