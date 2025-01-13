import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
const Modal = ({ isOpen, onClose, elements }) => {
  const dialogRef = useRef(null);

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


    const renderItems = () => {
        return elements.map(item => (
          <li key={item.id} className='cart-item'>
            <p>{item.name} - {item.quantity}</p>
          </li>
        ));
    };

    const totalSum = elements.reduce((total, item) => total + item.price * item.quantity, 0);
    return ReactDOM.createPortal(
        <dialog ref={dialogRef} className="modal cart">
          <h2>Cart Items</h2>
          {elements.length > 0 ? (
            <ul>
            {renderItems()}
            </ul>
          ) : (
            <p>Cart is empty!</p>
          )}
          <p className='cart-total'>
          {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(totalSum,)}
            </p>
          <Button textOnly={true} onClick={onClose} children={`Close`} />
          <Button textOnly={false} onClick={() => console.log('checkout')} children={`Checkout`} />
        </dialog>,
        document.querySelector('#modal')
      );
};

export default Modal;