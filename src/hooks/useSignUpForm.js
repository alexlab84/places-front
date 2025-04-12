import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

const useSignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("api/register/", {
        email,
        password,
      });

      const { access_token, refresh_token } = response.data;

      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);

      axiosInstance.defaults.headers[
        "Authorization"
      ] = `Bearer ${access_token}`;

      setError("");
      return { success: true };
    } catch (err) {
      if (err.response) {
        setError(err.response?.data?.detail || "Error desconocido");
      } else {
        setError("Hubo un problema con la conexión. Intenta de nuevo.");
      }
      return { success: false };
    }
  };

  return {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleSubmit,
  };
};

export default useSignUpForm;
