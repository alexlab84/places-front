import { Typography, Button, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        sx={{
          background: "linear-gradient(135deg, #fff0e5 0%, #e6e0f8 100%)",
          marginTop: "-60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                fontSize: "3rem",
                color: "#3E4E5E",
                marginBottom: 3,
              }}
            >
              ¿Otra vez olvidaste ese sitio chulo? 🤯
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <Typography variant="h5" sx={{ color: "#4E5A64", marginBottom: 3 }}>
              Guarda bares (por si algun día los quieres cerrar), rincones, ideas o
              planes antes de que tu yo del futuro te odie. Tu memoria ya no está
              sola.
            </Typography>
          </motion.div>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, 
              justifyContent: "center",
              gap: 2, 
              marginTop: 2,
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  transition: "all 0.3s ease",
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  },
                }}
                component={Link}
                to="/login"
              >
                Abrir mi baúl
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <Button
                variant="outlined"
                color="primary"
                sx={{
                  border: '2px solid #1e88e5',
                  fontWeight: "bold",
                  transition: "all 0.3s ease",
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  },
                }}
                component={Link}
                to="/signup"
              >
                Apúntame al club
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
}

export default Landing;
