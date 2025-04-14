import { useState } from "react";
import { Card, CardContent, Typography, CardMedia, Snackbar, Alert } from "@mui/material";
import { motion } from "framer-motion";
import EditPlaceForm from "./EditPlaceForm";
import { useUpdatePlace } from "../hooks/useUpdatePlace";
import barImage from "../assets/bar.jpg";
import museumImage from "../assets/museo.png";
import parkImage from "../assets/parque.png";
import shoppingCenterImage from "../assets/centro-comercial.png";
import kidsZoneImage from "../assets/zona-de-niños.jpg";
import cinemaImage from "../assets/cine.jpg";
import beachImage from "../assets/playa.jpg";
import mountainImage from "../assets/montaña.png";
import cityImage from "../assets/ciudad.jpg";
import natureImage from "../assets/naturaleza.jpg";
import hotelImage from "../assets/hotel.jpg";
import otherImage from "../assets/otro.jpg";
import restaurantImage from "../assets/restaurante.png";

function PlaceCard({
  id,
  name,
  location,
  category,
  category_display,
  description,
  onUpdate,
}) {
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editLocation, setEditLocation] = useState(location);
  const [editDescription, setEditDescription] = useState(description);
  const [editCategory, setEditCategory] = useState(category);
  
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { updatePlace } = useUpdatePlace();

  const categoryImages = {
    bar: barImage,
    restaurant: restaurantImage,
    museum: museumImage,
    park: parkImage,
    shopping_center: shoppingCenterImage,
    kids_zone: kidsZoneImage,
    cinema: cinemaImage,
    beach: beachImage,
    mountain: mountainImage,
    city: cityImage,
    nature: natureImage,
    hotel: hotelImage,
    other: otherImage,
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = async () => {
    try {
      const userId = localStorage.getItem("user_id");

      // Llamar a la API para actualizar el lugar
      const updatedPlace = await updatePlace(id, {
        name: editName,
        location: editLocation,
        description: editDescription,
        category: editCategory,
        user: userId,
      });

      // Actualizar el estado con los datos actualizados
      setEditCategory(updatedPlace.category);
      setEditName(updatedPlace.name);
      setEditLocation(updatedPlace.location);
      setEditDescription(updatedPlace.description);

      // Mostrar mensaje de éxito
      
      setSnackbarOpen(true);

      // Llamar a la función onUpdate para actualizar la vista
      if (onUpdate) {
        onUpdate(updatedPlace);
      }

      // Cerrar el formulario después de unos segundos
      setTimeout(() => {
        setSnackbarOpen(false);
        handleClose();
        
      }, 3000);
    } catch (err) {
      console.error("Error al actualizar el lugar:", err);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={handleOpen}
        style={{ cursor: "pointer" }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={categoryImages[category]}
            alt={category}
          />
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {name}
            </Typography>
            <Typography color="text.secondary">{location}</Typography>
            <Typography
              variant="body2"
              sx={{ fontStyle: "italic", color: "#4E5A64" }}
            >
              {category_display}
            </Typography>
            {description && (
              <Typography variant="body1" sx={{ marginTop: 1, color: "#3E4E5E" }}>
                {description}
              </Typography>
            )}
          </CardContent>
        </Card>
      </motion.div>

      

      {/* Formulario de edición */}
      <EditPlaceForm
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        name={editName}
        setName={setEditName}
        location={editLocation}
        setLocation={setEditLocation}
        description={editDescription}
        setDescription={setEditDescription}
        category={editCategory}
        setCategory={setEditCategory}
        
      />
      {/* Snackbar con el mensaje de éxito */}
      <Snackbar
  open={snackbarOpen}
  autoHideDuration={3000}
  onClose={() => setSnackbarOpen(false)}
  sx={{
    "& .MuiSnackbarContent-root": {
      backgroundColor: "#4A90E2", // Asegura que el fondo sea el mismo color
      fontFamily: "Poppins, sans-serif", // Usa la misma fuente
      fontWeight: "bold",
    },
  }}
>
  <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%", fontFamily: "Poppins, sans-serif" }}>
    Lugar actualizado con éxito!
  </Alert>
</Snackbar>
    </>
  );
}

export default PlaceCard;
