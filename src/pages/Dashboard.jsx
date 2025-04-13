import { useState } from "react";
import AddPlaceForm from "../components/PlaceForm";
import PlaceList from "../components/PlaceList";
import { Button, Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Dashboard() {
  const [showAddForm, setShowAddForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const toggleForm = () => {
    setShowAddForm((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        sx={{
          background: "linear-gradient(135deg, #fff0e5 0%, #e6e0f8 100%)",
          minHeight: "100vh",
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                mb: 2,
                color: "#3E4E5E",
              }}
            >
              Bienvenido a tu rinconcito secreto ✨
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#4E5A64",
                mb: 3,
                fontFamily: "Poppins, sans-serif",
              }}
            >
              Guarda esos rincones que no quieres olvidar. Nada de perder el bar
              de la esquina otra vez, ¿eh?
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={toggleForm}
              sx={{
                backgroundColor: "#4A90E2",
                fontWeight: "bold",
                fontSize: "1rem",
                borderRadius: 2,
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#357ABD",
                  transform: "scale(1.05)",
                },
              }}
            >
              {showAddForm
                ? "Cerrar el chiringuito ✖️"
                : "Abrir el chiringuito ✍️"}
            </Button>
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "green",
                    fontWeight: "bold",
                    textAlign: "center",
                    mt: 3,
                    mb: 1,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {successMessage}
                </Typography>
              </motion.div>
            )}
          </Box>

          {showAddForm && (
            <Box sx={{ mb: 5 }}>
              <AddPlaceForm
                onPlaceAdded={() => {
                  setShowAddForm(false);
                  setSuccessMessage(
                    "¡Boom! ¡Lugar añadido al club de los mejores! 🍻"
                  );
                  setSuccess(true);
                  setTimeout(() => {
                    setSuccessMessage("");
                    setSuccess(false);
                  }, 4000);
                }}
              />
            </Box>
          )}

          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "1.8rem",
              color: "#3E4E5E",
              mb: 3,
              textAlign: "center",
            }}
          >
            ¡Las joyas que guardaste! 💎
          </Typography>

          <PlaceList />
        </Container>
      </Box>
    </motion.div>
  );
}

export default Dashboard;
