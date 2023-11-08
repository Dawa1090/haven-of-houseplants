import React from "react";

function ImageModal({ imageUrl, onClose }) {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          <i className="bi bi-x-square-fill"></i>
        </span>
        <img src={imageUrl}/>
      </div>
    </div>
  );
}

export default ImageModal;
