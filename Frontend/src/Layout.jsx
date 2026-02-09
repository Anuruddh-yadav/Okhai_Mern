import React, { useState } from "react"; // Added useState
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";
import NavbarSlider from "./navbar/NavbarSlider";
import Cart from "./Cart/Cart"; // Import your Cart component

const Layout = () => {
  // State to manage cart visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <NavbarSlider />
      {/* Pass the opener function to Navbar */}
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      {/* Render Cart as an overlay, passing the state and closer function */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={[]} // Pass your actual cart data here
      />

      <Outlet />  
      <Footer/>
    </>
  );
};

export default Layout;