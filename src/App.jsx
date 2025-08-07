import React, { useState } from 'react';
import Layout from './components/Layout';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import BestCombination from './components/BestCombination';
import useProducts from './hooks/useProducts';
import useCart from './hooks/useCart';
import { Paper, CircularProgress, Box, Snackbar } from '@mui/material';

function App() {
  const { products, loading } = useProducts();
  const { cart, addToCart, removeFromCart } = useCart();

  const [snackbar, setSnackbar] = useState(false);
  const [deleteSnackbar, setDeleteSnackbar] = useState(false);

  const handleAddToCart = (productId) => {
    addToCart(productId).then(() => {
      setSnackbar(true);
    });
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId).then(() => {
      setDeleteSnackbar(true);
    });
  };

  return (
    <Layout>
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 4,
        width: '100%',
      }}>
        <Box sx={{ flex: 2, display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <h2>Productos</h2>
            {loading ? (
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 200 }}>
                <CircularProgress color="primary" size={60} />
              </Box>
            ) : (
              <ProductList products={products} onAdd={handleAddToCart} />
            )}
          </Paper>
          <Paper elevation={3} sx={{ p: 2 }}>
            <BestCombination products={products} />
          </Paper>
        </Box>
        <Box sx={{ flex: 1, minWidth: 320 }}>
          <Paper elevation={3} sx={{
            p: 2,
            minHeight: 340, 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start'
          }}>
            <Cart items={cart.items} onRemove={handleRemoveFromCart} />
          </Paper>
        </Box>
      </Box>
      <Snackbar
        open={snackbar}
        autoHideDuration={1500}
        onClose={() => setSnackbar(false)}
        message="Producto agregado al carrito"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
      <Snackbar
        open={deleteSnackbar}
        autoHideDuration={1500}
        onClose={() => setDeleteSnackbar(false)}
        message="Producto eliminado del carrito"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </Layout>
  );
}

export default App;
