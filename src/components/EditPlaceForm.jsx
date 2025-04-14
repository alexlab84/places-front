import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button,
  MenuItem,
} from "@mui/material";

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
}) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Editar lugar</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Nombre"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Ubicación"
          fullWidth
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Descripción"
          fullWidth
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          select
          margin="dense"
          label="Categoría"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <MenuItem key={cat.value} value={cat.value}>
              {cat.label}
            </MenuItem>
          ))}
        </TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button onClick={handleSave} variant="contained">
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditPlaceForm;
