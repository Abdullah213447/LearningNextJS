'use client';

import { Container, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';
import { blue } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Link from 'next/link';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#fff',
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 300,
      color: '#fff',
    },
  },
});

const HeroPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '-150px'
        }}
      >
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Blog
            </Typography>
            <Link href="/login" passHref>
              <Button style={{ color: 'blue' }}>Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Container
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h1" align="center">
            Welcome to My Blog
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Discover the latest news and articles
          </Typography>
          
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default HeroPage;
