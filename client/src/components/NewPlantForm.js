import React from "react";


function NewPlantForm({ onAddPlant }) {
  return (
    <div className="container">
      <h2>New Plant</h2>

        <form onSubmit={onAddPlant}>
      <div className="input-group">

          <input className="form-control" type="text" name="name" placeholder="Plant name" />
          <input className="form-control" type="text" name="image" placeholder="Image URL" />
          <input className="form-control" type="number" name="price" step="0.01" placeholder="Price" />
          <button type="submit" className="primary">Add Plant</button>
          </div>

        </form>
    </div>

  );
}

export default NewPlantForm;
