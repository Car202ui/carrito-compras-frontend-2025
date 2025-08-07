import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider, Paper, IconButton, Tooltip, Badge, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack } from '@mui/material';
function Cart({ items, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Paper elevation={4} sx={{ borderRadius: 3, p: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
  <Stack direction="row" alignItems="center" spacing={1}>
    <Badge badgeContent={totalQty} color="secondary" max={99} showZero>
      <ShoppingCartIcon color="primary" sx={{ fontSize: 30 }} />
    </Badge>
    <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
      Carrito de compras
    </Typography>
  </Stack>
</Box>
      <List>
        {items.length === 0 ? (
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', mt: 3 }}>
            El carrito está vacío. Agrega productos para comenzar.
          </Typography>
        ) : (
          items.map(item => (
            <React.Fragment key={item.product.id}>
              <ListItem
                secondaryAction={
                  <Tooltip title="Eliminar">
                    <IconButton edge="end" color="error" onClick={() => onRemove(item.product.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                }
              >
                <ListItemText
                  primary={item.product.name}
                  secondary={`Cantidad: ${item.quantity} | Precio: $${item.product.price}`}
                />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))
        )}
      </List>
      <Typography variant="h5" sx={{ mt: 2, fontWeight: 700, color: 'secondary.main' }}>
        Total: ${total}
      </Typography>
    </Paper>
  );
}

export default Cart;
