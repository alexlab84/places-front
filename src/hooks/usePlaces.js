import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        // Realizando la solicitud con la URL correcta
        const response = await axiosInstance.get('api/places/'); // Añadimos 'api/' antes de 'places/'
        setPlaces(response.data);
        setLoading(false);
      } catch (err) {
        setError("Hubo un problema al obtener los lugares");
        setLoading(false);
        console.error(err);
      }
    };

    fetchPlaces();
  }, []);

  return { places, loading, error };
};

export default usePlaces;
