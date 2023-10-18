// Coffee.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReviewList from "../ReviewList"; // Import ReviewList

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
      <div className="coffee-list">
        {coffees.map((coffee) => (
          <div key={coffee.id} className="coffee-item">
            <img className="coffee-image" src={coffee.image_url} alt={coffee.name} />
            <h3>{coffee.name}</h3>
            <p>Reviews: {coffee.reviews.length}</p>
            <Link to={`/coffee/${coffee.id}/reviews`}>See Reviews</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
