import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useSignupForm from "../hooks/useSignUpForm";
import { motion } from "framer-motion";

function SignUp() {
  const { email, password, error, setEmail, setPassword, handleSubmit } =
    useSignupForm();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { success } = await handleSubmit(e);
    if (success) {
      navigate("/dashboard");
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
              fontWeight: "bold",
              fontSize: "2rem",
              color: "#3E4E5E",
              fontFamily: "Poppins, sans-serif",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
              marginBottom: 3,
              textAlign: "center",
            }}
          >
            ¡Únete a la aventura, amig@!
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

        <form onSubmit={handleFormSubmit} style={{ width: "100%" }}>
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
              sx={{ fontFamily: "Poppins, sans-serif" }}
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
              sx={{ fontFamily: "Poppins, sans-serif" }}
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
              Crear Cuenta
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
              ¿Ya tienes cuenta?{" "}
              <Button color="secondary" component={Link} to="/login">
                Iniciar sesión
              </Button>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}

export default SignUp;
