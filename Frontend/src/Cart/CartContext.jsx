// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to Cart Function
  const addToCart = (product, selectedSize = "M", quantity = 1) => {
    setCartItems((prevItems) => {
      // Check if item with same ID AND Size already exists
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === product.id && item.size === selectedSize
      );

      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].qty += quantity;
        return updatedItems;
      }

      return [...prevItems, { 
        id: product.id, 
        title: product.title, 
        price: product.price, 
        img: product.images ? product.images[0] : product.img, 
        size: selectedSize, 
        qty: quantity,
        slug: product.slug
      }];
    });
    setIsCartOpen(true); // Automatically open cart drawer when item is added
  };

  const removeFromCart = (id, size) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.size === size)));
  };

  const updateQuantity = (id, size, delta) => {
    setCartItems(prev => prev.map(item => 
      (item.id === id && item.size === size) 
        ? { ...item, qty: Math.max(1, item.qty + delta) } 
        : item
    ));
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);