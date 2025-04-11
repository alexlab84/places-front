import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

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

function PlaceCard({
  name,
  location,
  category,
  category_display,
  description,
}) {
  const categoryImages = {
    bar: barImage,
    restaurant: "/images/restaurant.gif",
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
  );
}

export default PlaceCard;
