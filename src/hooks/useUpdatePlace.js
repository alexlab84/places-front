import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate

export function useUpdatePlace() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Definimos la función de navegación

  const updatePlace = async (id, data) => {
    setLoading(true);
    setError(null);

    // Obtener el access_token y refresh_token desde localStorage
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");

    if (!accessToken) {
      setError("No estás autenticado");
      setLoading(false);
      return;
    }

    try {
      // Intentamos hacer la petición PUT con el token en los headers
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
      // Si obtenemos un 401, intentamos refrescar el token
      if (err.response && err.response.status === 401 && refreshToken) {
        // Intentamos refrescar el access_token usando el refresh_token
        try {
          const refreshResponse = await axiosInstance.post(
            "api/token/refresh/", // Usamos la ruta correcta para refrescar el token
            { refresh: refreshToken }
          );

          // Si el refreshToken es válido, obtenemos el nuevo access_token
          const newAccessToken = refreshResponse.data.access;

          // Guardamos el nuevo access_token en localStorage
          localStorage.setItem("access_token", newAccessToken);

          // Intentamos hacer la solicitud nuevamente con el nuevo access_token
          const retryResponse = await axiosInstance.put(
            `api/places/${id}/`,
            data,
            {
              headers: {
                Authorization: `Bearer ${newAccessToken}`,
              },
            }
          );
          return retryResponse.data;
        } catch (refreshErr) {
          // Si el refresh también falla, redirigimos al usuario a login
          setError("Sesión expirada, por favor inicie sesión nuevamente");
          localStorage.removeItem("access_token");
          localStorage.removeItem("refresh_token");

          // Usamos useNavigate para redirigir al login sin recargar la página
          navigate("/login");

          throw refreshErr;
        }
      } else {
        setError("Error al actualizar el lugar");
        throw err;
      }
    } finally {
      setLoading(false);
    }
  };

  return { updatePlace, loading, error };
}
