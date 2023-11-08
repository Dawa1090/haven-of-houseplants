import React, { useState } from "react";
import PlantCard from "./PlantCard";
import ImageModal from "./ImageModal";

function PlantList({ plants, setCart, addToCart, currentUser, selectedRole, deletePlant, currentStaff, isStaffLoggedIn}) {
  const [quantities, setQuantities] = useState({});


  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openImageModal = (imageURL) => {
    setCurrentImage(imageURL);
    setModalVisible(true);
    console.log("currentImage: ", currentImage);
    console.log("modalVisible: ", modalVisible);
  };

  const closeImageModal = () => {
    setModalVisible(false);
  };

  const handleQuantityChange = (plantId, quantity) => {
    setQuantities({
      ...quantities,
      [plantId]: quantity,
    });
  };


  return (
    <div className="container">


      <div className="row">
        {plants.map((plant) => (
          <PlantCard
            key={plant.id}
            plant={plant}
            quantity={quantities[plant.id] || 1}
            onQuantityChange={(quantity) => handleQuantityChange(plant.id, quantity)}
            addToCart={addToCart}
            setCart={setCart}
            currentUser={currentUser}
            selectedRole={selectedRole}
            deletePlant={deletePlant}
            currentStaff={currentStaff}
            isStaffLoggedIn={isStaffLoggedIn}
            onImageClick={() => openImageModal(plant.image)}
          />
        ))}
      </div>
      {modalVisible && <ImageModal imageUrl={currentImage} onClose={closeImageModal} />}
    </div>
  );
}

export default PlantList;

