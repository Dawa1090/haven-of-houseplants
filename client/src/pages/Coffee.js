import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Coffee.css";

const Coffee = () => {
  const [coffees, setCoffees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const postReview = (coffeeId, text, rating, userId) => {
    const data = {
      text: text,
      rating: rating,
      user_id: userId,
      coffee_id: coffeeId,
    };

    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((review) => {
        console.log("Review posted successfully:", review);
        
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
       
      });
  };

  useEffect(() => {
    fetch("/coffees")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        const initializedCoffees = data.map((coffee) => ({
          ...coffee,
          reviewState: {
            reviewText: "",
            reviewRating: 1,
          },
        }));
        setCoffees(initializedCoffees);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="Coffee">
      <h2 className="coffee-list">Coffee List</h2>
      <div className="coffee-list">
        {coffees.map((coffee) => (
          <div key={coffee.id} className="coffee-item">
            <img className="coffee-image" src={coffee.image_url} alt={coffee.name} />
            <h3>{coffee.name}</h3>
            <p>Reviews: {coffee.reviews.length}</p>
            <input
              type="text"
              placeholder="Add your review..."
              value={coffee.reviewState.reviewText}
              onChange={(e) => {
                const updatedCoffees = coffees.map((c) =>
                  c.id === coffee.id
                    ? { ...c, reviewState: { ...c.reviewState, reviewText: e.target.value } }
                    : c
                );
                setCoffees(updatedCoffees);
              }}
            />
            <label>
              Rating:
              <input
                type="number"
                min="1"
                max="5"
                value={coffee.reviewState.reviewRating}
                onChange={(e) => {
                  const updatedCoffees = coffees.map((c) =>
                    c.id === coffee.id
                      ? { ...c, reviewState: { ...c.reviewState, reviewRating: parseInt(e.target.value) } }
                      : c
                  );
                  setCoffees(updatedCoffees);
                }}
              />
            </label>
            <div className="button-group">
            <button onClick={() => postReview(coffee.id, coffee.reviewState.reviewText, coffee.reviewState.reviewRating, 1)}>
              Submit Review
            </button>
            <Link to={`/coffee/${coffee.id}/reviews`} className= "heelo">See Reviews</Link>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
