'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Container, Typography, Button, Box, TextField, Card, CardContent, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff, Lock, Email } from '@mui/icons-material';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Mock login logic here, replace with actual API call
    if (email === 'user@example.com' && password === 'password') {
      // On successful login, navigate to the blog page
      router.push('/blog');
    } else {
      // Handle login failure (e.g., show an error message)
      setError('Invalid email or password');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Card sx={{ boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Lock sx={{ fontSize: 40, color: 'primary.main' }} />
          </Box>
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
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
              Login
            </Button>
          </form>
          <Link href="/" passHref>
            <Button variant="text" color="secondary" fullWidth sx={{ mt: 2 }}>
              Back Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
};

export default LoginPage;
