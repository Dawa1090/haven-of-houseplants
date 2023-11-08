import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import Home from "../pages/Home";
import PlantPage from "./PlantPage";
import PlantList from "./PlantList";
import ShoppingCart from "./ShoppingCart";
import Navbar from "./Navbar";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import LoginPage from "../pages/LoginPage";
import StaffLogin from "../pages/StaffLogin";
import About from "./About";
import FAQs from "./FAQs";
import ContactUs from "./ContactUs";


function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentStaff, setCurrentStaff] = useState()
  const [selectedRole, setSelectedRole] = useState("customer");

  const [discountedPlants, setDiscountedPlants] = useState([]);

  console.log("app")
  useEffect(() => {
    fetch("/discounted_plants")
      .then((response) => response.json())
      .then((data) => setDiscountedPlants(data))
      .catch((error) => console.error("Error fetching discounted plants: ", error));
  }, []);



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
        console.log(data);
        setCurrentStaff(data);
      })
      .catch((error) => {
        window.alert(error.message);
      });


  }


  function logout() {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentStaff(null);
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

  // useEffect(() => {
  //   fetch("/check_staff_session").then((res) => {
  //     if (res.ok) {
  //       res.json().then((staff) => setCurrentStaff(staff));
  //     }
  //   });
  // }, []);




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

  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState({ dummy: 1 });

  useEffect(() => {
    const initialCart = JSON.parse(localStorage.getItem("cartItems"));
    console.log("local storage get")
    console.log(initialCart)
    if (initialCart) {
      setCart(initialCart);
    }
  }, []);

  //!!!do something with quantity
  const addToCart = (plant, quantity) => {
    const checkoutPlant = { id: plant.id, name: plant.name, price: plant.price, quantity: quantity };
    const updatedCart = [...cart.filter((obj) => obj.id !== checkoutPlant.id), { ...checkoutPlant }];

    setQuantity(previousState => { return { ...previousState, [plant.id]: quantity } });
    console.log("quantity:", quantity);
    console.log("updatedCart: ", updatedCart);
    localStorage.setItem("cartItems",JSON.stringify(updatedCart))
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
          isLoggedIn={isLoggedIn}
          isStaffLoggedIn={isStaffLoggedIn}
          logout={logout}
          query={query}
          onUpdateQuery={onUpdateQuery}
          currentUser={currentUser}
          currentStaff={currentStaff}
        />

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
              isStaffLoggedIn={isStaffLoggedIn}
              discountedPlants={discountedPlants}



            />
          </Route>
          <Route path="/login">
            <LoginPage
              setSelectedRole={setSelectedRole}
              selectedRole={selectedRole}
              attemptLogin={attemptLogin}
              attemptSignup={attemptSignup}
              attemptStaffLogin={attemptStaffLogin}
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
              checkout={checkout}
              currentUser={currentUser}
              selectedRole={selectedRole}
              isLoggedIn={isLoggedIn}
              isStaffLoggedIn={isStaffLoggedIn}
              deletePlant={deletePlant}
              currentStaff={currentStaff}
            />
          </Route>

          <Route path="/about" exact component={About} />

          <Route path="/FAQs" exact component={FAQs} />

          <Route path="/contact" exact component={ContactUs} />

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

      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
          <li className="nav-item"><a href="/About" className="nav-link px-2 text-body-secondary">About</a></li>
          <li className="nav-item"><a href="/FAQs" className="nav-link px-2 text-body-secondary">FAQs</a></li>
          <li className="nav-item"><a href="/contact" className="nav-link px-2 text-body-secondary">Contact Us</a></li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>


    </div>
  );
}

export default App;