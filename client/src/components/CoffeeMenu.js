import React from "react";
import { Link } from "react-router-dom";
import "./CoffeeMenu.css";

function CoffeeMenu({ coffees }) {
  return (
    <ul className="cards">
      {coffees.map((coffee) => (
        <li key={coffee.id}>
          <Link to={`/coffees/${coffee.id}`}>
            <img className="coffee-image" src={coffee.image_url} alt={coffee.name} />
            <h3>{coffee.name}</h3>
          </Link>
          <ul className="reviews">
            {coffee.reviews.map((review) => (
              <li key={review.id}>
                <strong>{review.user.username}</strong>: {review.text}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default CoffeeMenu;
