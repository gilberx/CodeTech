import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ onClose, children }) => {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    onClose();
  };

  return (
    <div className={`modal ${showModal ? 'show' : 'hide'}`}>
      <div className="modal-content">
        <button className="close-button" onClick={handleClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
