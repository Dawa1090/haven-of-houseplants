import React from "react";
import NewPlantForm from './NewPlantForm';


function StaffComponent({ userRole, onAddPlant }) {
    if (userRole === 'staff') {
      return (
        <div>
          <h2>Staff Page</h2>
          <NewPlantForm onAddPlant={onAddPlant} />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Customer Page</h2>
          {/* Render other customer-specific content here */}
        </div>
      );
    }
  }

export default StaffComponent;

