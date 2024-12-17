import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation(); // Get the current location

  // Only render the NavBar and Footer if the current route is not "/login" or "/signup"
  return (
    <>
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <NavBar />
      )}
      {/* Conditionally render NavBar */}
      <Outlet />
      {location.pathname !== "/login" && location.pathname !== "/signup" && (
        <Footer />
      )}
      {/* Conditionally render Footer */}
    </>
  );
};

export default MainLayout;
