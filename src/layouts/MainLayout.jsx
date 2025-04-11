import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const MainLayout = ({ children, drawerOpen, toggleDrawer }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
