import { Container, Grid, Box, Typography } from "@mui/material";
import PlaceCard from "./PlaceCard";
import { motion } from "framer-motion";
import usePlaces from "../hooks/usePlaces";

const PlaceList = () => {
  const { places, loading, error } = usePlaces();

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
              <PlaceCard {...place} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </motion.div>
  );
};

export default PlaceList;
