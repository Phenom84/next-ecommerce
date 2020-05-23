import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { useGlobal } from '../src/context/GlobalContext';
import CartItem from '../components/CartItem';

export default () => {
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="lg">
      <h1>Cart</h1>

      <Grid container spacing={3}
        alignItems="stretch"
      >
        {!state.cart.length &&
          <h2>Your cart is empty</h2>
        }

        {state.cart.map((product, index) => <CartItem key={index} product={product} />)}
      </Grid>
    </Container>
  );
};