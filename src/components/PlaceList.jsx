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
    <Box
      sx={{
        background: "linear-gradient(135deg, #fff0e5 0%, #e6e0f8 100%)",
        padding: 4,
        minHeight: "100vh",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", marginBottom: 4, color: "#3E4E5E" }}
          >
            ¡Las joyas que guardaste!
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Grid container spacing={4} justifyContent="center">
            {places.map((place) => (
              <Grid sx={{ xs: 12, sm: 6, md: 4 }} key={place.id}>
                <PlaceCard {...place} />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default PlaceList;
