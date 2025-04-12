import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const token = localStorage.getItem("access_token");

        if (!token) {
          setError("No estás autenticado.");
          setLoading(false);
          return;
        }
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axiosInstance.get("api/places/", config);

        setPlaces(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener los lugares.");
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return { places, loading, error };
};

export default usePlaces;
