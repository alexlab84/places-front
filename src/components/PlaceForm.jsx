import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { motion } from 'framer-motion';
import useAddPlace from "../hooks/useAddPlace";

const AddPlaceForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const addPlace = useAddPlace();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !location || !category) {
      setError('¡Nombre, ubicación y categoría son obligatorios!');
      return;
    }

    const placeData = {
      name,
      location,
      category,
      description,
    };

    try {
      await addPlace(placeData);
      setName('');
      setLocation('');
      setCategory('');
      setDescription('');
      setError('');
      console.log('Lugar añadido correctamente');
    } catch (err) {
      console.error(err.message);
      setError('Hubo un error al guardar el lugar.');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #fff0e5 0%, #e6e0f8 100%)',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          minHeight: '70vh',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '2rem', color: '#3E4E5E', fontFamily: 'Poppins, sans-serif', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', marginBottom: 3 }}>
            Añadir un lugar
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

        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <TextField
              label="Nombre del Lugar"
              variant="outlined"
              fullWidth
              margin="normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }}>
            <TextField
              label="Ubicación"
              variant="outlined"
              fullWidth
              margin="normal"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              sx={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }}>
            <FormControl fullWidth margin="normal" sx={{ fontFamily: 'Poppins, sans-serif' }}>
              <InputLabel>Categoría</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Categoría"
              >
                <MenuItem value="bar">Bar</MenuItem>
                <MenuItem value="restaurant">Restaurante</MenuItem>
                <MenuItem value="museum">Museo</MenuItem>
                <MenuItem value="park">Parque</MenuItem>
                <MenuItem value="shopping_center">Centro Comercial</MenuItem>
                <MenuItem value="kids_zone">Zona de Juegos para Niños</MenuItem>
                <MenuItem value="cinema">Cine</MenuItem>
                <MenuItem value="beach">Playa</MenuItem>
                <MenuItem value="mountain">Montaña</MenuItem>
                <MenuItem value="city">Ciudad</MenuItem>
                <MenuItem value="nature">Naturaleza</MenuItem>
                <MenuItem value="hotel">Hotel</MenuItem>
                <MenuItem value="other">Otro</MenuItem>
              </Select>
            </FormControl>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
            <TextField
              label="Descripción"
              variant="outlined"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              sx={{ fontFamily: 'Poppins, sans-serif' }}
            />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 0.8 }}>
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
              Añadir Lugar
            </Button>
          </motion.div>
        </form>
      </Box>
    </Container>
  );
};

export default AddPlaceForm;
