
import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer/Footer";
import NavbarSlider from "./navbar/NavbarSlider";

const Layout = () => {
  return (
    <>
      <NavbarSlider />
      <Navbar />
      <Outlet />  
     <Footer/>
    </>
  );
};

export default Layout;
