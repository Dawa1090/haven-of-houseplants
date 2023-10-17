import React from "react";
import { useParams } from "react-router-dom";

function CoffeeDetails({ coffees }) {
  const { id } = useParams();
  const coffee = coffees.find((coffee) => coffee.id === parseInt(id, 10));

  if (!coffee) {
    return <div>Coffee not found</div>;
  }

  return (
    <div>
      <h1>{coffee.name}</h1>
      <img src={coffee.image_url} alt={coffee.name} />
      <ul className="reviews">
        {coffee.reviews.map((review) => (
          <li key={review.id}>
            <strong>{review.user.username}</strong>: {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CoffeeDetails;
