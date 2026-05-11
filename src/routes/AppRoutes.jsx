import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import FriendDetail from "../pages/FriendDetail/FriendDetail";
import Layout from "../layouts/Layout";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Layout wraps all pages */}
      <Route path="/" element={<Layout />}>
        {/* Dashboard */}
        <Route index element={<Dashboard />} />

        {/* Timeline */}
        <Route path="timeline" element={<Timeline />} />

        {/* Stats */}
        <Route path="stats" element={<Stats />} />

        {/* Friend Detail Page */}
        <Route path="friend/:id" element={<FriendDetail />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
