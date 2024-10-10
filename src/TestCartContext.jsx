import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedItems = [...state.items];
      const existingItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingItemIndex >= 0) {
        updatedItems[existingItemIndex].quantity += action.payload.quantity;
      } else {
        updatedItems.push(action.payload);
      }

      const updatedTotalQuantity =
        state.totalQuantity + action.payload.quantity;
      const updatedTotalPrice = state.totalPrice + action.payload.totalPrice;

      return {
        ...state,
        item: updatedItems,
        totalQuantity: updatedTotalQuantity,
        totalPrice: updatedTotalPrice,
      };
    }

    case "REMOVE_ITEM":
      break;
    case "UPDATE_QUANTITY":
      break;

    default:
      break;
  }
};

export function CartProvider() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => dispatch({ type: "ADD_ITEM", payload: item });

  return (
    <CartContext.Provider value={{ ...state, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
