import { Button, Drawer, IconButton, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import MapIcon from "@mui/icons-material/Map";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const CustomDrawer = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer
      anchor="left"
      open={drawerOpen}
      onClose={toggleDrawer}
      sx={{
        "& .MuiDrawer-paper": {
          width: 260,
          background: "linear-gradient(135deg, #fff0e5 0%, #e6e0f8 100%)",
          boxShadow: "4px 0 15px rgba(0, 0, 0, 0.3)",
          paddingTop: 6,
          paddingX: 2,
          fontFamily: "Poppins, sans-serif",
        },
      }}
    >
      <IconButton
        edge="end"
        onClick={toggleDrawer}
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        <CloseIcon />
      </IconButton>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 6 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            textAlign: "center",
            mb: 2,
            color: "#3E4E5E",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
          }}
        >
          Explora lo que te mola 🧭
        </Typography>

        <Button
          startIcon={<HomeIcon />}
          component={Link}
          to="/"
          onClick={toggleDrawer}
          sx={{
            justifyContent: "flex-start",
            fontWeight: 500,
            textTransform: "none",
            color: "#3E4E5E",
          }}
        >
          Casa
        </Button>

        <Button
          startIcon={<LoginIcon />}
          component={Link}
          to="/login"
          onClick={toggleDrawer}
          sx={{
            justifyContent: "flex-start",
            fontWeight: 500,
            textTransform: "none",
            color: "#3E4E5E",
          }}
        >
          Acceder a mi baúl
        </Button>

        <Button
          startIcon={<MapIcon />}
          component={Link}
          to="/dashboard"
          onClick={toggleDrawer}
          sx={{
            justifyContent: "flex-start",
            fontWeight: 500,
            textTransform: "none",
            color: "#3E4E5E",
          }}
        >
          Mis movidas
        </Button>

        <Button
          startIcon={<PersonAddIcon />}
          component={Link}
          to="/signup"
          onClick={toggleDrawer}
          sx={{
            justifyContent: "flex-start",
            fontWeight: 500,
            textTransform: "none",
            color: "#3E4E5E",
          }}
        >
          Únete al club
        </Button>
      </Box>
    </Drawer>
  );
};

export default CustomDrawer;
