import React from 'react';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

function ProductList({ products, onAdd }) {
  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid item xs={12} md={6} lg={4} key={product.id}>
          <Card sx={{
            borderRadius: 3,
            boxShadow: 4,
            transition: 'transform 0.2s, box-shadow 0.2s',
            '&:hover': {
              transform: 'scale(1.03)',
              boxShadow: 8,
            }
          }}>
            <CardContent>
              <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>{product.name}</Typography>
              <Typography variant="h4" color="text.secondary" sx={{ my: 1 }}>${product.price}</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={() => onAdd(product.id)}
                sx={{ mt: 1, borderRadius: 2, fontWeight: 600 }}
                fullWidth
              >
                Agregar al carrito
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductList;
