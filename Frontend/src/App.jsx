import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home/Home.jsx";
import CollectionCategory from "./All_Products/Collection.jsx";
import About from "./Footer/About.jsx"; 
import PartnerOnBoarding from "./Footer/PartnerOnBoarding.jsx"; 
import Contact from "./Footer/Contact.jsx"; 
import CreateAccount from "./Home/CreateAccount.jsx";
import FashoinJewellery from "./collections/Accessories/FashoinJewellery/page.jsx";

// import Navbar from "./navbar/Navbar";
// import Footer from "./Footer/Footer";
// import NavbarSlider from "./navbar/NavbarSlider";

function App() {
  return (
    <FashoinJewellery />
    // <BrowserRouter>
    // {/* <NavbarSlider/>
    // <Navbar />
    // <CreateAccount />
    // <Footer /> */}
    
    // <ScrollToTop />
    //   <Routes>
    //     {/* All routes inside Layout will show the Navbar and Footer */}
    //     <Route element={<Layout />}>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/collections/:type" element={<CollectionCategory />} />
          
    //       {/* Footer Routes */}
    //       <Route path="/about" element={<About />} />
    //       <Route path="/partner-onboarding" element={<PartnerOnBoarding />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;