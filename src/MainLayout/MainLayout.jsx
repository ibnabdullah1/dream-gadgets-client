import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="Raleway">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
