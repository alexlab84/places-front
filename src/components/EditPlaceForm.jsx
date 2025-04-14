import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  MenuItem,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";

const categories = [
  { value: "bar", label: "Bar" },
  { value: "restaurant", label: "Restaurante" },
  { value: "museum", label: "Museo" },
  { value: "park", label: "Parque" },
  { value: "shopping_center", label: "Centro Comercial" },
  { value: "kids_zone", label: "Zona de Niños" },
  { value: "cinema", label: "Cine" },
  { value: "beach", label: "Playa" },
  { value: "mountain", label: "Montaña" },
  { value: "city", label: "Ciudad" },
  { value: "nature", label: "Naturaleza" },
  { value: "hotel", label: "Hotel" },
  { value: "other", label: "Otro" },
];

function EditPlaceForm({
  open,
  handleClose,
  handleSave,
  name,
  setName,
  location,
  setLocation,
  description,
  setDescription,
  category,
  setCategory,
  successMessage,
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{
        fontFamily: "Poppins, sans-serif",
        fontWeight: "bold",
        fontSize: "1.5rem",
        textAlign: "center",
        color: "#3E4E5E",
      }}>
        Editar lugar
      </DialogTitle>
      <DialogContent>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <TextField
            autoFocus
            margin="dense"
            label="Nombre"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              fontFamily: "Poppins, sans-serif",
              marginBottom: "1rem",
            }}
          />
          <TextField
            margin="dense"
            label="Ubicación"
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{
              fontFamily: "Poppins, sans-serif",
              marginBottom: "1rem",
            }}
          />
          <TextField
            margin="dense"
            label="Descripción"
            fullWidth
            multiline
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{
              fontFamily: "Poppins, sans-serif",
              marginBottom: "1rem",
            }}
          />
          <TextField
            select
            margin="dense"
            label="Categoría"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{
              fontFamily: "Poppins, sans-serif",
              marginBottom: "1rem",
            }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat.value} value={cat.value}>
                {cat.label}
              </MenuItem>
            ))}
          </TextField>
          {successMessage && (
            <Typography
              variant="body2"
              sx={{
                color: "green",
                textAlign: "center",
                marginTop: "10px",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              {successMessage}
            </Typography>
          )}
        </motion.div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} sx={{ fontFamily: "Poppins, sans-serif" }}>
          Cancelar
        </Button>
        <Button
          onClick={handleSave}
          variant="contained"
          sx={{
            backgroundColor: "#4A90E2",
            "&:hover": {
              backgroundColor: "#357ABD",
            },
            fontFamily: "Poppins, sans-serif",
          }}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditPlaceForm;
