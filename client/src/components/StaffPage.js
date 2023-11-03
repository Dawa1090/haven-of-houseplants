import React from 'react';
import NewPlantForm from './NewPlantForm';
import { useHistory } from 'react-router-dom'


function StaffPage({ onAddPlant, currentStaff, logoutStaff, setSelectedRole }) {
  const history = useHistory()

  function handleClick() {
    setSelectedRole("customer")
    logoutStaff()
    history.push("/")
  }
  console.log("staff page")
  if (currentStaff && currentStaff.role === "staff")
  return (
    <div>
      <h2>Welcome, staff!</h2>
      <NewPlantForm onAddPlant={onAddPlant} />
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default StaffPage;


