import { Button, Drawer, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const CustomDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          width: 240,
          backgroundColor: "#f5f5dc",
          boxShadow: "2px 0 10px rgba(0, 0, 0, 0.2)",
          paddingTop: 8,
        },
      }}
    >
      <IconButton
        edge="end"
        color="inherit"
        onClick={toggleDrawer}
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        <CloseIcon />
      </IconButton>

      <div style={{ padding: 20 }}>
        <Button color="inherit" component={Link} to="/" onClick={toggleDrawer}>
          Inicio
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/login"
          onClick={toggleDrawer}
        >
          Login
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/dashboard"
          onClick={toggleDrawer}
        >
          Dashboard
        </Button>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;
