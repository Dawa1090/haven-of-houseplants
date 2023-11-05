import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import PlantPage from "./PlantPage";
import PlantList from "./PlantList";
import ShoppingCart from "./ShoppingCart";
import Navbar from "./Navbar";
import StaffPage from "./StaffPage";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentStaff, setCurrentStaff] = useState()
  const [selectedRole, setSelectedRole] = useState("customer");



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

  function attemptStaffLogin(staffInfo) {
    console.log(staffInfo)
    fetch("/staff/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(staffInfo),

    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          throw new Error("Invalid staffname or password");
        }
      })
      .then((data) => {
        console.log(data); setCurrentStaff(data)
      })
      .catch((error) => {
        window.alert(error.message);
      });


  }


  function logout() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        setSelectedRole(null);
      }
    });
  }

  function logoutStaff() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentStaff(null);
        setSelectedRole(null);
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

  useEffect(() => {
    fetch("/check_staff_session").then((res) => {
      if (res.ok) {
        res.json().then((staff) => setCurrentStaff(staff));
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

  const deletePlant = (plantId) => {
    fetch(`/plants/${plantId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Filter out the deleted plant from the array
          const updatedPlants = plants.filter((plant) => plant.id !== plantId);
          setPlants(updatedPlants);
        } else {
          throw new Error("Network response was not ok.");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };


  const isLoggedIn = currentUser && Object.keys(currentUser).length > 0;
  const isStaffLoggedIn = currentStaff && Object.keys(currentStaff).length > 0;

  console.log()
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState({ dummy: 1 });



  //!!!do something with quantity
  const addToCart = (plant, quantity) => {
    const checkoutPlant = { id: plant.id, name: plant.name, price: plant.price, quantity: quantity };

    const updatedCart = [...cart.filter((obj) => obj.id !== checkoutPlant.id), { ...checkoutPlant }];

    console.log(updatedCart);

    //const updatedCart = [...cart, checkoutPlant];

    //console.log(plant)
    setQuantity(previousState => { return { ...previousState, [plant.id]: quantity } });
    console.log(quantity);
    setCart(updatedCart);
    //setCart(previousState => { return {...previousState, [plant.id]: quantity}});


  };

  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const checkout = () => {
    setCart([]); // Clear the cart upon checkout
  };


  console.log(selectedRole);

  return (
    <div className="App">
      <Router>
        <Navbar
          currentUser={currentUser} />
        <Switch>
          <Route path="/" exact>
            <Home
              currentUser={currentUser}
              currentStaff={currentStaff}
              attemptLogin={attemptLogin}
              attemptSignup={attemptSignup}
              logout={logout}
              logoutStaff={logoutStaff}
              setCurrentUser={setCurrentUser}
              attemptStaffLogin={attemptStaffLogin}
              selectedRole={selectedRole}
              setSelectedRole={setSelectedRole}
              isLoggedIn={isLoggedIn}
            />
          </Route>




          <Route path="/plants" exact>


            
              <PlantPage
                plants={filterPlants}
                onAddPlant={onAddPlant}
                query={query}
                onUpdateQuery={onUpdateQuery}
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                checkout={checkout}
                currentUser={currentUser}
                selectedRole={selectedRole}
                isLoggedIn={isLoggedIn}
                isStaffLoggedIn={isStaffLoggedIn}
              />
            
          </Route>
          <Route path="/cart" exact>
            {currentUser && <ShoppingCart
              cart={cart}
              removeFromCart={removeFromCart}
              isLoggedIn={isLoggedIn}
              checkout={checkout}
              selectedRole={selectedRole}
            />}

          </Route>
        </Switch>
      </Router>

      {isLoggedIn}


    </div>
  );
}

export default App;