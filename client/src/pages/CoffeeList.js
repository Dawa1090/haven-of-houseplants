import React from "react";

const CoffeeList = ({ coffees }) => {
  const itemsPerRow = 5; 
  const groupedCoffees = [];
  for (let i = 0; i < coffees.length; i += itemsPerRow) {
    groupedCoffees.push(coffees.slice(i, i + itemsPerRow));
  }

  return (
    <div className="coffee-list">
      {groupedCoffees.map((row, index) => (
        <div key={index} className="coffee-row">
          {row.map((coffee) => (
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
      ))}
    </div>
  );
};

export default CoffeeList;
