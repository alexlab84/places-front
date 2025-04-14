import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

export function useUpdatePlace() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updatePlace = async (id, data) => {
    setLoading(true);
    setError(null);

    // Obtener el access_token desde localStorage
    const accessToken = localStorage.getItem("access_token");

    if (!accessToken) {
      setError("No estás autenticado");
      setLoading(false);
      return;
    }

    try {
      // Hacer la petición PUT con el token en los headers
      const response = await axiosInstance.put(
        `api/places/${id}/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (err) {
      setError("Error al actualizar el lugar");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { updatePlace, loading, error };
}
