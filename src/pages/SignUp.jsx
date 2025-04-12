import React from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import useSignupForm from '../hooks/useSignUpForm';  

function SignUp() {
  const {
    email,
    password,
    error,
    setEmail,
    setPassword,
    handleSubmit,
  } = useSignupForm();

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { success } = await handleSubmit(e);
    if (success) {
      navigate('/dashboard');  
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 8 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #fff0e5 0%, #e6e0f8 100%)',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          minHeight: '80vh',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '2rem', color: '#3E4E5E', fontFamily: 'Poppins, sans-serif', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)', marginBottom: 3 }}>
          Regístrate
        </Typography>

        {error && (
          <Typography color="error" variant="body2" gutterBottom>
            {error}
          </Typography>
        )}

        <form onSubmit={handleFormSubmit} style={{ width: '100%' }}>
          <TextField
            label="Correo Electrónico"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#4A90E2",
              "&:hover": {
                backgroundColor: "#357ABD",
              },
            }}
          >
            Crear Cuenta
          </Button>
        </form>

        <Typography sx={{ mt: 2, fontFamily: 'Poppins, sans-serif' }}>
          ¿Ya tienes cuenta?{' '}
          <Button color="secondary" component={Link} to="/login">
            Iniciar sesión
          </Button>
        </Typography>
      </Box>
    </Container>
  );
}

export default SignUp;
