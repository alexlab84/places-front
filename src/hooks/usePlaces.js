import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const usePlaces = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        let token = localStorage.getItem("access_token");

        if (!token) {
          setError("No estás autenticado.");
          setLoading(false);
          return;
        }

        let config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        let response;

        try {
          response = await axiosInstance.get("api/places/", config);
        } catch (err) {
          if (
            err.response?.status === 401 &&
            err.response?.data?.code === "token_not_valid"
          ) {
            const refreshToken = localStorage.getItem("refresh_token");

            if (!refreshToken) {
              throw new Error("No hay refresh token disponible.");
            }

            const refreshResponse = await axiosInstance.post(
              "api/token/refresh/",
              {
                refresh: refreshToken,
              }
            );

            const newAccess = refreshResponse.data.access;
            localStorage.setItem("access_token", newAccess);

            config.headers.Authorization = `Bearer ${newAccess}`;
            response = await axiosInstance.get("api/places/", config);
          } else {
            throw err;
          }
        }

        setPlaces(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener los lugares.");
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  return { places, setPlaces, loading, error }; // Asegúrate de devolver setPlaces aquí
};

export default usePlaces;
