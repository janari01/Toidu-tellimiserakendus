import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, message }) => {
  const dialogRef = useRef(null);
    console.log(isOpen)
  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal(); // open
    } else {
      dialogRef.current?.close(); // close
    }

    return () => {
      dialogRef.current?.close(); 
        };
    }, [isOpen]);
    return (
    <dialog ref={dialogRef} className="modal">
        <h2>Veateade</h2>
        <p>{message}</p>
        <button onClick={onClose}>Sulge</button>
    </dialog>
    )
};

export default Modal;