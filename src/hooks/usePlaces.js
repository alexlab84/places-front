import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await axiosInstance.get("/");
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
