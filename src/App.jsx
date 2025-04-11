import { Container, Typography } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import MainLayout from "./layouts/MainLayout";
import { useState } from "react";
import "./styles/index.scss";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <MainLayout drawerOpen={drawerOpen} toggleDrawer={toggleDrawer}>
      <AppRoutes />
    </MainLayout>
  );
}

export default App;
