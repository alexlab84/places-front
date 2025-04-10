import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "../components/Drawer";

const NavBar = ({ drawerOpen, toggleDrawer }) => {
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#4A90E2" }}>
        {" "}
        {/* Color pastel suave */}
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu-drawer"
            onClick={toggleDrawer}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              ml: 3,
              fontSize: "1.5rem",
              fontFamily: "Poppins",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
            }}
          >
            Recuerdos de Mi Yo Despistado
          </Typography>

          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            Inicio
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/login"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/dashboard"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            Dashboard
          </Button>
        </Toolbar>
      </AppBar>

      <CustomDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavBar;
