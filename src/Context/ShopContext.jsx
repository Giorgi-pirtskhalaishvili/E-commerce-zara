import { createContext, useState } from "react";
import allProducts from "../Components/Assets/all_product";

const defaultCart = () => {
  const cart = {};
  for (let i = 0; i < allProducts.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => defaultCart());

  const addToCart = (productId) => {
    setCartItem((prevVal) => ({
      ...prevVal,
      [productId]: prevVal[productId] + 1,
    }));
  };
  const removeFromCart = (productId) => {
    setCartItem((prevVal) => ({
      ...prevVal,
      [productId]: prevVal[productId] - 1,
    }));
  };
  const getCartCount = () => {
    let cartCountNumber = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        cartCountNumber += cartItem[item];
      }
    }
    return cartCountNumber;
  };

  const getTotalCartAmout = () => {
    let totalAmout = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = allProducts.find(
          (product) => product.id === Number(item)
        );
        totalAmout += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmout;
  };

  const contextValue = {
    getTotalCartAmout,
    getCartCount,
    allProducts,
    cartItem,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
