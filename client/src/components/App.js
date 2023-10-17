import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./Navbar";

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
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' exact element ={<Home />}/>
          <Route path = '/coffee' exact element ={<Coffee />}/>
          <Route path = '/about' exact element ={<About />}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
