import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Coffee = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    // Fetch the coffee data and set it in the state
    fetch("/coffees")
      .then((response) => response.json())
      .then((data) => {
        setCoffees(data);
      });
  }, []);

  return (
    <div className="Coffee">
      <h2>Coffee Menu</h2>
      <ul className="cards">
        {coffees.map((coffee) => (
          <li key={coffee.id}>
            <Link to={`/coffee/${coffee.id}`}>
              <img className="coffee-image" src={coffee.image_url} alt={coffee.name} />
              <h3>{coffee.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Coffee;
