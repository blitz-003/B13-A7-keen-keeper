import Navbar from "@/components/layout/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
