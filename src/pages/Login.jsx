import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("Login success", { email, password });
    } else {
      setError("Por favor ingresa tus credenciales");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #fff0e5 0%, #e6e0f8 100%)",
      }}
    >
      <Container maxWidth="xs">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h5"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#3E4E5E",
              fontFamily: "Poppins, sans-serif",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
              marginBottom: 3,
            }}
          >
            ¡Recupera tus recuerdos, crack!
          </Typography>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Typography color="error" variant="body2" gutterBottom>
              {error}
            </Typography>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <TextField
              label="Correo Electrónico"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                fontFamily: "Poppins, sans-serif",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <TextField
              label="Contraseña"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                fontFamily: "Poppins, sans-serif",
              }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#4A90E2",
                "&:hover": {
                  backgroundColor: "#357ABD",
                },
              }}
            >
              Iniciar sesión
            </Button>
          </motion.div>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Typography
              sx={{ fontFamily: "Poppins, sans-serif", textAlign: "center" }}
            >
              ¿No tienes cuenta?{" "}
              <Button color="secondary" component="a" href="/signup">
                Regístrate
              </Button>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Login;
