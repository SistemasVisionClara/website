// Modal.js
import React from 'react';
import './Modal.css'; // Import the Modal styles

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-button" onClick={closeModal}>Close</button>
        <h2 className="modal-title">Modal Title</h2>
        <p className="modal-text-bold">Bold Text Here</p>
        <p className="modal-text-regular">Regular Text Here</p>
        <p className="modal-text-small-bold">Small Bold Text Here</p>
      </div>
    </div>
  );
}

export default Modal;
