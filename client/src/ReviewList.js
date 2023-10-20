
import React, { useState, useEffect } from "react";

const ReviewList = ({ coffeeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`/coffees/${coffeeId}/reviews`)
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [coffeeId]);

  return (
    <div className="review-list">
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
