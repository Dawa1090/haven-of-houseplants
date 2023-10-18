import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Coffee from "./pages/Coffee";
import About from "./pages/About";
import ReviewList from "./ReviewList";


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  function attemptSignup(userInfo) {
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }

  function attemptLogin(userInfo) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => setCurrentUser(data));
  }

  function logout() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
   
    fetch("/coffees")
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar currentUser={currentUser} />
        <Switch>
          <Route path="/" exact>
            <Home
              currentUser={currentUser}
              attemptLogin={attemptLogin}
              attemptSignup={attemptSignup}
              logout={logout}
              setCurrentUser={setCurrentUser}
            />
          </Route>
          <Route path="/coffee" exact>
            <Coffee coffees={coffees} />
          </Route>
          <Route path="/coffee/:id/reviews" exact render={({ match }) => {
          const coffeeId = match.params.id;
          return <ReviewList coffeeId={coffeeId} />; }} />
          <Route path="/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
