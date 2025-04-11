import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
    >
      <Box
        sx={{
          backgroundColor: "#3E4E5E",
          color: "#fff",
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: "bold", mb: 1 }}>
          Guardado está, no se hable más. 🍻
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic" }}>
          © {new Date().getFullYear()} Tu baúl de sitios memorables. Sin filtros
          ni postureo.
        </Typography>
      </Box>
    </motion.footer>
  );
};

export default Footer;
