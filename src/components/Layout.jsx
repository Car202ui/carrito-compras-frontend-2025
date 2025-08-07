import React from 'react';
import { Box, AppBar, Toolbar, Typography, CssBaseline, Container } from '@mui/material';

function Layout({ children }) {
  return (
    <Box sx={{ minHeight: '100vh', background: theme => theme.palette.background.default }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: '#0066ff' }}>
        <Toolbar>
          <Typography variant="h5" sx={{ fontWeight: 700, flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <span role="img" aria-label="carrito" style={{ marginRight: 8 }}>🛒</span>
            Carrito Compras | Prueba Técnica 2025
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ pt: 10, pb: 3 }}>
        {children}
        <footer style={{
          textAlign: 'center',
          marginTop: 40,
          padding: 16,
          color: '#777',
          fontSize: 15
        }}>
          Desarrollado por Carlos Iglesias &copy; 2025
        </footer>
      </Container>
    </Box>
  );
}

export default Layout;
