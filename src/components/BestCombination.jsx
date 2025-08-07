import React, { useState } from 'react';
import { Button, TextField, Typography, List, ListItem, ListItemText, Paper, InputAdornment } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function findBestCombination(products, budget) {
  const n = products.length;
  let best = [];
  let bestTotal = 0;
  for (let mask = 0; mask < (1 << n); mask++) {
    let current = [];
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        sum += products[i].price;
        current.push(products[i]);
      }
    }
    if (sum <= budget && sum > bestTotal) {
      bestTotal = sum;
      best = current;
    }
  }
  return best;
}

function BestCombination({ products }) {
  const [budget, setBudget] = useState('');
  const [result, setResult] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleCalc = () => {
    setSubmitted(true);
    const parsedBudget = parseInt(budget, 10);
    if (isNaN(parsedBudget)) {
      setResult([]);
      return;
    }
    setResult(findBestCombination(products, parsedBudget));
  };

  return (
    <Paper elevation={4} sx={{ borderRadius: 3, p: 2, mt: 2 }}>
      <Typography variant="h6" gutterBottom color="primary">
        Mejor combinación para tu presupuesto
      </Typography>
      <TextField
        label="Presupuesto"
        variant="outlined"
        size="small"
        value={budget}
        onChange={e => setBudget(e.target.value)}
        sx={{ mr: 2, width: 200 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
     <Button
  variant="contained"
  color="secondary"
  onClick={handleCalc}
  disabled={!budget || isNaN(parseInt(budget, 10)) || parseInt(budget, 10) <= 0}
>
  Calcular
</Button>
      <List>
        {result.map(product => (
          <ListItem key={product.id}>
            <CheckCircleIcon color="success" sx={{ mr: 1 }} />
            <ListItemText primary={product.name} secondary={`$${product.price}`} />
          </ListItem>
        ))}
      </List>
      {submitted && result.length === 0 && (
        <Typography variant="body2" sx={{ mt: 2, color: 'text.secondary' }}>
          No hay productos para ese presupuesto.
        </Typography>
      )}
      {result.length > 0 && (
        <Typography variant="body1" sx={{ mt: 2, fontWeight: 600 }}>
          Total: ${result.reduce((sum, p) => sum + p.price, 0)}
        </Typography>
      )}
    </Paper>
  );
}

export default BestCombination;
