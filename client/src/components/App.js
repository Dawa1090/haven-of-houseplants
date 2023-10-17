import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CoffeeMenu from "./CoffeeMenu";
import CoffeeDetails from "./CoffeeDetails"; // Import CoffeeDetails component

const App = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("/coffees")
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  return (
    <Router>
      <div className="app">
        <h1 className="AllMenu"> Coffee Menu </h1>
        <Switch>
          {/* Route for displaying individual coffee details */}
          <Route path="/coffees/:id">
            <CoffeeDetails coffees={coffees} />
          </Route>
          {/* Default route for displaying the coffee menu */}
          <Route path="/" exact>
            <CoffeeMenu coffees={coffees} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
