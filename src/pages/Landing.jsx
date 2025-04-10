// src/pages/Landing.jsx
import { Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: "3rem",
            color: "#3E4E5E",
            marginBottom: 3,
          }}
        >
          ¡Bienvenido a Recuerdos de Mi Yo Despistado!
        </Typography>

        <Typography variant="h5" sx={{ color: "#6B7A8F", marginBottom: 3 }}>
          Guarda tus lugares favoritos, organiza tus recuerdos y nunca olvides
          esos sitios que tanto te gustan.
        </Typography>

        <Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginRight: 2 }}
            component={Link}
            to="/login"
          >
            Iniciar sesión
          </Button>

          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/signup"
          >
            Regístrate
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default Landing;
