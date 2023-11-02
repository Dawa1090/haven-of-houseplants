import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PlantPage from "./PlantPage";
import PlantList from "./PlantList";
import ShoppingCart from "./ShoppingCart";
import Navbar from "./Navbar";

function App() {
  const [currentUser, setCurrentUser] = useState({});

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
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 404) {
          throw new Error("User not found");
        } else {
          throw new Error("Invalid username or password");
        }
      })
      .then((data) => setCurrentUser(data))
      .catch((error) => {
        window.alert(error.message);
      });
  }
  

  function logout() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
      }
    });
  }

  useEffect(() => {
    fetch("/check_session").then((res) => {
        if (res.ok) {
            res.json().then((user) => setCurrentUser(user));
        }
    });
}, []);

  const [plants, setPlants] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("/plants")
      .then((response) => response.json())
      .then((plants) => setPlants(plants));
  }, []);

  const onAddPlant = (event) => {
    event.preventDefault();
    const newPlant = {
      name: event.target.name.value,
      image: event.target.image.value,
      price: event.target.price.value,
    };
    fetch("/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => response.json())
      .then((newPlant) => setPlants([...plants, newPlant]));
  };

  const onUpdateQuery = (event) => setQuery(event.target.value);

  const filterPlants = plants.filter((plant) => {
    if (query === "") return true;
    else return plant.name.toLowerCase().includes(query.toLowerCase());
  });

  // const deletePlant = (plantId) => {
  //   fetch(`/plants/${plantId}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         // Filter out the deleted plant from the array
  //         const updatedPlants = plants.filter((plant) => plant.id !== plantId);
  //         setPlants(updatedPlants);
  //       } else {
  //         throw new Error("Network response was not ok.");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("There was a problem with the fetch operation:", error);
  //     });
  // };
  

  const isLoggedIn = currentUser && Object.keys(currentUser).length > 0;

  const [cart, setCart] = useState([]);

  //do something with quantity
  const addToCart = (plant, quantity) => {
    const updatedCart = [...cart, plant];
  setCart(updatedCart);
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const checkout = () => {
    setCart([]); // Clear the cart upon checkout
  };

  return (
    <div className="App">
      <Router>
      <Navbar 
        currentUser={currentUser}/>
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
          <Route path="/plants" exact>
            
            {isLoggedIn ? (
        <PlantPage
          plants={filterPlants}
          onAddPlant={onAddPlant}
          query={query}
          onUpdateQuery={onUpdateQuery}
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          currentUser={currentUser}
        />
      ): <PlantList plants={plants}  addToCart={addToCart} currentUser={currentUser}/>}
          </Route>
          <Route path="/cart" exact>
            <ShoppingCart
              cart={cart} 
              removeFromCart={removeFromCart} 
              checkout={checkout} 
            />
          </Route>
        </Switch>
      </Router>

      {isLoggedIn}


    </div>
  );
}

export default App;