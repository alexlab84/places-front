import { Container, Grid, Box, Typography } from "@mui/material";
import PlaceCard from "./PlaceCard";
import { motion } from "framer-motion";

const PlaceList = ({ places, setPlaces, loading, error }) => {
  const handlePlaceUpdate = (updatedPlace) => {
  // Actualizamos el lugar en el estado local
  setPlaces((prevPlaces) =>
    prevPlaces.map((place) =>
      place.id === updatedPlace.id ? { ...place, ...updatedPlace } : place
    )
  );
};
  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container>
        <Grid container columns={12} spacing={4} justifyContent="center">
          {places.map((place) => (
            <Grid key={place.id} style={{ gridColumn: "span 4" }}>
              {/* Pasa el método `handlePlaceUpdate` a PlaceCard */}
              <PlaceCard {...place} onUpdate={handlePlaceUpdate} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default PlaceList;
