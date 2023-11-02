// import React, { useEffect } from 'react';
// import Login from "./Login";
// import Signup from "./Signup";
// import UserDetails from "./UserDetails";



// function Home({ currentUser, attemptLogin, attemptSignup, logout }) {

//     useEffect(() => {
//         if (currentUser && currentUser.username) {
//             //   window.alert(`You have successfully logged in.`);
//         } else {
//             //   window.alert("You have successfully logged out.");
//         }
//     }, [currentUser]);

//     return (
//         <div className='background-image'>
//             <div className='headerContainer'>
//                 <img src="https://media.istockphoto.com/id/892815818/vector/vector-illustration-with-indoor-houseplants-poster-cover-template-design-with-various.jpg?s=170667a&w=0&k=20&c=pBEmWpZ-2fAiN7P80T525vZrtxeq1tLOpGCSf6htC8E=" alt="Plants" 
//                 style={{ width: "50%", height: "auto" }} />
//                 {currentUser && currentUser.username ? (
//                     <div>
//                         <UserDetails currentUser={currentUser} logout={logout} />
//                     </div>
//                 ) : (
//                     <div>
//                         <Login attemptLogin={attemptLogin} />
//                         <Signup attemptSignup={attemptSignup} />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default Home;


import React, { useEffect, useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import UserDetails from "./UserDetails";
import StaffLogin from "./StaffLogin"; // Import the StaffLogin component

function Home({ currentUser, attemptLogin, attemptSignup, logout }) {
  const [selectedRole, setSelectedRole] = useState("customer");

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
            {selectedRole === "customer" ?  (
                <>
                <Login attemptLogin={attemptLogin} />
              <Signup attemptSignup={attemptSignup} />
                </>
             
            ) : (
              <StaffLogin attemptLogin={attemptLogin} />
            )}
            
          </div>
        )}

        {/* Role selection buttons */}
        <div>
          <p>Select your role:</p>
          <button onClick={() => setSelectedRole("customer")}>Customer</button>
          <button onClick={() => setSelectedRole("staff")}>Staff</button>
        </div>
      </div>
    </div>
  );
}

export default Home;

