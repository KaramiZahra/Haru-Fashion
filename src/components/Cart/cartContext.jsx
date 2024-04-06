import React, { createContext, useContext, useState, useEffect } from "react";

///// wishlist context
const WishlistItemContext = createContext();

export const useWishlistItem = () => useContext(WishlistItemContext);

export const WishlistItemProvider = ({ children }) => {
  // local storage
  const [wishlistItem, setWishlistItem] = useState(
    () => JSON.parse(localStorage.getItem("wishlistItems")) || []
  );

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItem));
  }, [wishlistItem]);

  const addWishlistItem = (item) => {
    setWishlistItem([...wishlistItem, item]);
  };

  // remove items
  const removeWishlistItem = (id) => {
    const updatedItems = wishlistItem.filter((item) => item.id !== id);
    setWishlistItem(updatedItems);
  };

  // remove all items
  const clearWishlistItems = () => {
    setWishlistItem([]);
    localStorage.removeItem("wishlistItems");
  };

  return (
    <WishlistItemContext.Provider
      value={{
        wishlistItem,
        addWishlistItem,
        removeWishlistItem,
        clearWishlistItems,
      }}
    >
      {children}
    </WishlistItemContext.Provider>
  );
};

////// cart context

const CartItemContext = createContext();

export const useCartItem = () => useContext(CartItemContext);

export const CartItemProvider = ({ children }) => {
  // local storage
  const [cartItem, setCartItem] = useState(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // Add quantity property to each item
    return storedItems && storedItems.map((item) => ({ ...item, quantity: 1 }));
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItem));
  }, [cartItem]);

  const addCartItem = (item) => {
    setCartItem([...cartItem, { ...item, quantity: 1 }]);
  };

  // remove item
  const removeCartItem = (id) => {
    const updatedItems = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedItems);
  };

  // clear cart
  const clearCartItems = () => {
    setCartItem([]);
    localStorage.removeItem("cartItems");
  };

  // update quantity
  const updateCartItemQuantity = (id, quantity) => {
    setCartItem((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity };
        }
        return item;
      })
    );
  };

  // sum of items
  const calculateTotalSum = () => {
    return cartItem.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <CartItemContext.Provider
      value={{
        cartItem,
        addCartItem,
        removeCartItem,
        clearCartItems,
        updateCartItemQuantity,
        calculateTotalSum,
      }}
    >
      {children}
    </CartItemContext.Provider>
  );
};
