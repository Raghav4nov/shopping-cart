import { createContext, useReducer, useContext } from "react";

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.item.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case "REMOVE_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingItem = state.items[existingItemIndex];
      const updatedTotal = state.totalAmount - existingItem.price;

      let newItems;
      if (existingItem.amount === 1) {
        newItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        newItems = [...state.items];
        newItems[existingItemIndex] = updatedItem;
      }

      return {
        items: newItems,
        totalAmount: updatedTotal,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
