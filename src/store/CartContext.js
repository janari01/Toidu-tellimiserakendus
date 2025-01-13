import { createContext, useState } from 'react';

const Cart = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

export const CartFunc = ({children}) => {
  const [items, setItems] = useState([]);

  console.log(items)

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <Cart.Provider value={{ items, addItem, removeItem, clearCart }}>
      {children}
    </Cart.Provider>
  );

}

export default Cart