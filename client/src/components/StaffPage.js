import React from 'react';
import NewPlantForm from './NewPlantForm';

function StaffPage({ onAddPlant }) {
  return (
    <div>
      <h2>Staff Page</h2>
      <NewPlantForm onAddPlant={onAddPlant} />
    </div>
  );
}

export default StaffPage;
