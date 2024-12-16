import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const location = useLocation(); // Get the current location

  // Only render the NavBar and Footer if the current route is not "/login"
  return (
    <>
      {location.pathname !== "/login" && <NavBar />}{" "}
      {/* Conditionally render NavBar */}
      <Outlet />
      {location.pathname !== "/login" && <Footer />}{" "}
      {/* Conditionally render Footer */}
    </>
  );
};

export default MainLayout;
