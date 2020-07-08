import React from 'react';
import { Grid, Container, Toolbar } from '@material-ui/core';
import { useGlobal } from '../../src/context/GlobalContext';
import ProductItem from '../../components/ProductItem';
import MainLayout from '../../components/_layout/MainLayout';
import { useIntl } from 'react-intl';

export default function ProductIndexPage() {
  const [state] = useGlobal();
  const intl = useIntl();

  return (
    <MainLayout title={intl.formatMessage({ id: 'products.menu.label' })}>
      <Container maxWidth="lg">
        <Toolbar />
        <Grid container spacing={2} justify="center" alignItems="center">
          {state.products.map((product, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
}
