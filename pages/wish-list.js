import React from 'react';
import { Grid, Container, Typography, Box, Toolbar } from '@material-ui/core';
import { useGlobal } from '../src/context/GlobalContext';
import WishListItem from '../components/WishListItem.jsx';
import { FormattedMessage, useIntl} from 'react-intl';
import MainLayout from '../components/_layout/MainLayout';

export default function WishList() {
  const [state] = useGlobal();
  const intl = useIntl();

  return (
    <MainLayout title={intl.formatMessage({ id: 'wishlist.page.title' })}>
      <Container maxWidth="lg">
        <Toolbar />
        <Typography variant="h5" align="center">
          <Box lineHeight={1} m={1}>
            <FormattedMessage id="wishlist.page.title" />{' '}
            {!state.wishlist.length && (
              <FormattedMessage id="wishlist.page.title.empty" />
            )}
          </Box>
        </Typography>

        <Grid container spacing={3} alignItems="stretch">
          {state.wishlist.map((product, index) => (
            <WishListItem key={index} product={product} />
          ))}
        </Grid>
      </Container>
    </MainLayout>
  );
}
