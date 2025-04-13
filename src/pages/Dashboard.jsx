import { useState } from 'react';
import AddPlaceForm from '../components/PlaceForm';
import PlaceList from "../components/PlaceList";
import { Button, Box, Container, Typography } from "@mui/material";

function Dashboard() {
  const [showAddForm, setShowAddForm] = useState(false);

  const toggleForm = () => {
    setShowAddForm(prev => !prev);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, mb: 2 }}>
          Bienvenido al Dashboard
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={toggleForm}
          sx={{
            backgroundColor: "#4A90E2",
            "&:hover": {
              backgroundColor: "#357ABD",
            },
          }}
        >
          {showAddForm ? "Ocultar formulario" : "Añadir nuevo lugar"}
        </Button>
      </Box>

      {showAddForm && (
        <Box sx={{ mb: 4 }}>
          <AddPlaceForm />
        </Box>
      )}

      <PlaceList />
    </Container>
  );
}

export default Dashboard;
