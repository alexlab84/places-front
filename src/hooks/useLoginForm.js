import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const useLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    const credentials = { email, password };

    try {
      const response = await axiosInstance.post("api/login/", credentials);
      const { access, refresh, user_id } = response.data;

      localStorage.setItem("access_token", access);
      localStorage.setItem("refresh_token", refresh);
      localStorage.setItem("user_id", user_id);

      setError("");
      navigate("/dashboard");
    } catch (err) {
      setError("Error al intentar iniciar sesión");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    password,
    error,
    loading,
    setEmail,
    setPassword,
    handleLogin,
  };
};

export default useLoginForm;
