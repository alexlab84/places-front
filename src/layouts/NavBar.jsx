import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CustomDrawer from "../components/Drawer";
import LogoutButton from "../components/LogoutButton";
import { motion } from "framer-motion";

const NavBar = ({ drawerOpen, toggleDrawer }) => {
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));
  return (
    <>
     <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <AppBar position="sticky" sx={{ backgroundColor: "#4A90E2" }}>
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
            Casa
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/login"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            Acceder a mi baúl
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/dashboard"
            sx={{ display: { xs: "none", md: "inline-block" } }}
          >
            Mis movidas
          </Button>
          <Button
              color="inherit"
              component={Link}
              to="/signUp"
              sx={{ display: { xs: "none", md: "inline-block" } }}
            >
              Únete al club
            </Button>
          {/* 🔐 Logout solo si está logueado */}
          {isLoggedIn && (
            <LogoutButton
            variant="icon"
            styleProps={{
              display: { xs: "none", md: "inline-flex" },
              ml: 2,
            }}
          />
          )}
        </Toolbar>
      </AppBar>
      </motion.div>
      <CustomDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default NavBar;
