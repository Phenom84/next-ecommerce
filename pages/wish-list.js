import React from 'react';
import { Grid, Container, Typography, Box } from '@material-ui/core';
import { useGlobal } from '../src/context/GlobalContext';
import WishListItem from '../components/WishListItem.jsx';
import { FormattedMessage } from 'react-intl';

export default () => {
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="lg">
      <Typography variant="h5" align="center">
        <Box lineHeight={3} m={1}>
          <FormattedMessage id='wishlist.page.title' /> {!state.wishlist.length && <FormattedMessage id='wishlist.page.title.empty' />}
        </Box>
      </Typography>

      <Grid container spacing={3} alignItems="stretch">
        {state.wishlist.map((product, index) => <WishListItem key={index} product={product} />)}
      </Grid>
    </Container>
  );
};