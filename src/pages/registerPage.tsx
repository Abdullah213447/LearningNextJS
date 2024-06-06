'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Button, Box, TextField, Card, CardContent, Snackbar, Alert, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Lock, Email, Person } from '@mui/icons-material';
import Link from 'next/link';

const RegisterPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (e: FormEvent) => { 
    e.preventDefault();
    // Mock register logic here, replace with actual API call
    if (email && password && username) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const newUser = { email, password, username };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      setSnackbarMessage('Registration successful! Redirecting to login...');
      setSnackbarOpen(true);
      setTimeout(() => {
        router.push('/login');
      }, 2000); // Redirect after 2 seconds
    } else {
      // Handle registration failure (e.g., show an error message)
      setError('All fields are required');
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Person sx={{ fontSize: 40, color: 'primary.main' }} />
          </Box>
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="Username"
                fullWidth
                value={username}
                onChange={handleUsernameChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
                error={!!error}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="Email"
                type="email"
                fullWidth
                value={email}
                onChange={handleEmailChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
                error={!!error}
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                label="Password"
                type={showPassword ? 'text' : 'password'}
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={!!error}
              />
            </Box>
            {error && (
              <Typography variant="body2" color="error" align="center" gutterBottom>
                {error}
              </Typography>
            )}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Register
            </Button>
          </form>
          <Link href="/login" passHref>
            <Button variant="text" color="secondary" fullWidth sx={{ mt: 2 }}>
              Already have an account? Login
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RegisterPage;
