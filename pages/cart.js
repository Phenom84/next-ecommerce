import React from 'react';
import {
  Grid,
  Container,
  Box,
  Typography,
  Avatar,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { FormattedMessage } from 'react-intl';
import { useGlobal } from '../src/context/GlobalContext';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

import Link from '../src/Link';
import CartCounter from './../components/CartCounter';

const useStyles = makeStyles({
  table: {
    minWidth: 630
  },
  cartAvatar: {
    width: "7rem",
    height: "7rem",
  },
});

export default () => {
  const classes = useStyles();
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Box lineHeight={3} m={1}>
              <FormattedMessage id='cart.page.title' /> {!state.cart.length && <FormattedMessage id='cart.page.title.empty' />}
            </Box>
          </Typography>
        </Grid>
        <Grid item xs={12} md={10} lg={8}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="Shoping cart">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center"><FormattedMessage id='cart.product.name' /></TableCell>
                  <TableCell align="center"><FormattedMessage id='cart.product.price' /></TableCell>
                  <TableCell align="center"><FormattedMessage id='cart.product.quantity' /></TableCell>
                  <TableCell align="center"><FormattedMessage id='cart.product.amount' /></TableCell>
                  <TableCell align="center" style={{ width: '2rem' }}></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.cart.map((cartItem) => (
                  <TableRow key={cartItem.name}>
                    <TableCell align="right">
                      <Link href="/products/[product]" as={`/products/${cartItem.id}`}>
                        <Avatar variant="square" alt={cartItem.name} src={cartItem.image} className={classes.cartAvatar} />
                      </Link>
                    </TableCell>
                    <TableCell align="center">{cartItem.name}</TableCell>
                    <TableCell align="center">{cartItem.price}</TableCell>
                    <TableCell align="center"><CartCounter initialCount={cartItem.qty} id={cartItem.id} /></TableCell>
                    <TableCell align="center">$ {Number(cartItem.price.slice(1)) * Number(cartItem.qty)}</TableCell>
                    <TableCell align="center">
                      <IconButton size="small" color="primary" variant="contained"
                        onClick={(evt) => {
                          if (evt) {
                            evt.preventDefault();
                          }

                          dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: {
                              id: cartItem.id,
                            }
                          });
                        }}
                      >
                        <ClearIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};