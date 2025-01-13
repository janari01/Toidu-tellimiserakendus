import { createContext, useState, useReducer } from 'react';

// const Cart = createContext({
//   items: [],
//   addItem: () => {},
//   removeItem: () => {},
//   clearCart: () => {},
// });

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...state.items];
        // update 
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],  
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        return { items: updatedItems };
      } else {
        return { items: [...state.items, { ...action.item, quantity: 1 }] }; // add first
      }
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(item => item.id !== action.id);
      return { items: updatedItems };
    }

    case 'CLEAR_CART':
      return { items: [] };

    default:
      return state;
  }
};

const Cart = createContext();

export const CartFunc = ({children}) => {
  const [itemsState, dispItems] = useReducer(cartReducer, defaultCartState);

  console.log(itemsState)

  const addItem = (item) => {
    // setItems((prevItems) => [...prevItems, item]);
    dispItems({ type: 'ADD_ITEM', item });
  };

  const removeItem = (id) => {
    // setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    dispItems({ type: 'REMOVE_ITEM', id })
  };

  const clearCart = () => {
    dispItems({ type: 'CLEAR_CART' });
  };

  return (
    <Cart.Provider value={{ items: itemsState.items, addItem, removeItem, clearCart }}>
      {children}
    </Cart.Provider>
  );

}

export default Cart