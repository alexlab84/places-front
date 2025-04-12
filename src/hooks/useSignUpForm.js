import { useState } from 'react';
import axiosInstance from '../api/axiosInstance';  // Asegúrate de importar la instancia correcta de axios

const useSignUpForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();  // Evita que el formulario se recargue al enviarlo

    try {
      const response = await axiosInstance.post('api/register/', {
        username,
        email,
        password,
      });
    
      const { access, refresh } = response.data;
    
      // Guardar el token, por ejemplo en localStorage
      localStorage.setItem('access_token', access);
      localStorage.setItem('refresh_token', refresh);
    
      // Añadir el token a la cabecera de axios para futuras peticiones
      axiosInstance.defaults.headers['Authorization'] = `Bearer ${access}`;
    
      // Limpiar errores y redirigir
      setError('');
      return { success: true };
    } catch (err) {
      // Si ocurre un error, lo mostramos
      if (err.response) {
        // Si el error tiene una respuesta del backend, mostramos el mensaje
        setError(err.response?.data?.detail || 'Error desconocido');
      } else {
        // Si no hay respuesta (puede ser un error de red)
        setError('Hubo un problema con la conexión. Intenta de nuevo.');
      }
      return { success: false };
    }
  };

  return {
    username,
    email,
    password,
    error,
    setUsername,
    setEmail,
    setPassword,
    handleSubmit,
  };
};

export default useSignUpForm;
