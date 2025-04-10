import axiosInstance from './api/axiosInstance'
import { Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'

function App() {
  const [places, setPlaces] = useState([])  // Estado para almacenar los lugares obtenidos
  const [error, setError] = useState(null) 

  const fetchPlaces = async () => {
    try {
      const response = await axiosInstance.get('/')  // Solo usamos '/'

      setPlaces(response.data)
    } catch (error) {
      setError(error.message)
    }
  } 
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lugares por Descubrir
      </Typography>

      {/* El botón que hace la petición GET */}
      <Button
        variant="contained"
        color="primary"
        onClick={fetchPlaces}  // Al hacer click, se ejecuta la función fetchPlaces
      >
        Obtener Lugares
      </Button>

      {/* Si hay un error, lo mostramos aquí */}
      {error && <Typography color="error">{error}</Typography>}

      {/* Mostramos los lugares obtenidos en una lista */}
      <ul>
        {places.map((place) => (
          <li key={place.id}>{place.name}</li>  // Asegúrate de que 'name' sea un campo válido en tu modelo
        ))}
      </ul>
    </Container>
  )
}

export default App
