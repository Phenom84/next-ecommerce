import React from "react";
import { Grid, Container, Typography, Toolbar } from "@material-ui/core";
import { useGlobal } from "../../src/context/GlobalContext";
import ProductItem from "../../components/ProductItem";

export default () => {
  const [state] = useGlobal();

  return (
    <Container maxWidth="lg">
      <Toolbar />
      <Typography variant="h5" align="center">
        {/* <Box lineHeight={3} m={1}>
          <FormattedMessage id='product.menu.label' />
        </Box> */}
      </Typography>

      <Grid container spacing={1} justify="center" alignItems="center">
        {state.products.map((product, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
