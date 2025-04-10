import { Container, Typography } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./layouts/NavBar";
import { useState } from "react";
import "./styles/index.scss";

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <NavBar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      <Container component="main" style={{ flex: 1 }}>
        <AppRoutes />
      </Container>
    </div>
  );
}

export default App;
