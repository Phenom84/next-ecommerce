import React from 'react';
import { Grid, Container,Typography,Box } from '@material-ui/core';
import { useGlobal } from '../../src/context/GlobalContext';
import ProductItem from '../../components/ProductItem';

export default () => {
  const [ state, dispatch ] = useGlobal();

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" align="center">
        <Box lineHeight={3} m={1}>
          Products
        </Box>
      </Typography>

      <Grid container spacing={3}
        justify="center"
        alignItems="center"
      >
        {state.products.map((product, index) => <ProductItem key={index} product={product}/>)}
      </Grid>
    </Container>
  );
};