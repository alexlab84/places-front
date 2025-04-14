// src/components/LogoutButton.jsx
import { Button, IconButton, Tooltip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ onClickExtra, styleProps = {}, variant = "button", showText = false }) => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(localStorage.getItem("access_token"));

  if (!isLoggedIn) return null;

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    if (onClickExtra) onClickExtra(); // Útil para cerrar drawer si hace falta
    navigate("/login"); // Redirige a login o la página que prefieras
  };

  if (variant === "icon") {
    return (
      <Tooltip title="Cerrar sesión">
        <IconButton onClick={handleLogout} sx={{ color: "inherit", ...styleProps }}>
          <LogoutIcon />
        </IconButton>
      </Tooltip>
    );
  }


  return (
    <Button
      onClick={handleLogout}
      startIcon={<LogoutIcon />}
      sx={{
        justifyContent: "flex-start",
        fontWeight: 500,
        textTransform: "none",
        color: "#3E4E5E",
        ...styleProps,
      }}
    >
      {showText ? "Cerrar sesión" : null}
    </Button>
  );
};

export default LogoutButton;
