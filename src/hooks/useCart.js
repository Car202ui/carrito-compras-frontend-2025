import { useState, useEffect } from 'react';
import api from '../services/api';

export default function useCart() {
  const [cart, setCart] = useState({ items: [] });

  const refreshCart = () => {
    api.get('/cart').then(res => setCart(res.data));
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const addToCart = (productId) => {
    return api.post('/cart', { productId }).then(() => refreshCart());
  };

  const removeFromCart = (productId) => {
    return api.delete(`/cart/${productId}`).then(() => refreshCart());
  };

  return { cart, addToCart, removeFromCart };
}
