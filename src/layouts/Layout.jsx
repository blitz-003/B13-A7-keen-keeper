import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className="p-4">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
