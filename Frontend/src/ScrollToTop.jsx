import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This moves the window back to the very top coordinates
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the URL path changes

  return null;
};

export default ScrollToTop;