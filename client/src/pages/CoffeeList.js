import React from "react";

const CoffeeList = ({ coffees }) => {
  return (
    <div className="coffee-list">
      {coffees.map((coffee) => (
        <div key={coffee.id} className="coffee-item">
          <img
            src={coffee.image_url}
            alt={coffee.name}
            className="coffee-image"
          />
          <p>{coffee.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CoffeeList;
