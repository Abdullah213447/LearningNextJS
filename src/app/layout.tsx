'use client';

import { AppBar, Toolbar, Typography, Container, Box, IconButton, Button } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import Link from 'next/link';
import { ReactNode } from 'react';

// export const metadata = {
//   title: "Next.js",
//   description: "Generated by Next.js",
// };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppBar position="static" sx={{ backgroundColor: 'blue', mb: 4 }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div" sx={{ fontSize: '30px' }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                My Blog
              </Link>
            </Typography>
            <Box>
              <Button color="inherit" component={Link} href="/">
                Home
              </Button>
              <Button color="inherit" component={Link} href="/about">
                About
              </Button>
              <Button color="inherit" component={Link} href="/contact">
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          {children}
        </Container>
        <Box sx={{ mt: 4, py: 2, backgroundColor: 'grey' }}>
          <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="body1" color="inherit">
              © 2024 My Blog
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="https://instagram.com" target="_blank">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedIn />
              </IconButton>
            </Box>
          </Container>
        </Box>
      </body>
    </html>
  );
}
