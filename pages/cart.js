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
  Toolbar,
} from '@material-ui/core';
import { FormattedMessage, useIntl } from 'react-intl';
import { useGlobal } from 'src/context/GlobalContext';
import { makeStyles } from '@material-ui/core/styles';
import ClearIcon from '@material-ui/icons/Clear';

import Link from 'src/Link';
import Counter from 'components/Counter';
import MainLayout from 'components/_layout/MainLayout';

const useStyles = makeStyles({
  table: {
    minWidth: 630,
  },
  cartAvatar: {
    width: '7rem',
    height: '7rem',
  },
});

export default function Cart() {
  const classes = useStyles();
  const [state, dispatch] = useGlobal();
  const intl = useIntl();

  return (
    <MainLayout title={intl.formatMessage({ id: 'cart.page.title' })}>
      <Container maxWidth="lg">
        <Toolbar />
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5" align="center">
              <Box lineHeight={1}>
                <FormattedMessage id="cart.page.title" />{' '}
                {!state.cart.length && (
                  <FormattedMessage id="cart.page.title.empty" />
                )}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={10} lg={8}>
            <TableContainer component={Paper} elevation={6}>
              <Table className={classes.table} aria-label="Shoping cart">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="center">
                      <FormattedMessage id="cart.product.name" />
                    </TableCell>
                    <TableCell align="center">
                      <FormattedMessage id="cart.product.price" />
                    </TableCell>
                    <TableCell align="center">
                      <FormattedMessage id="cart.product.quantity" />
                    </TableCell>
                    <TableCell align="center">
                      <FormattedMessage id="cart.product.amount" />
                    </TableCell>
                    <TableCell
                      align="center"
                      style={{ width: '2rem' }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.cart.map((cartItem) => (
                    <TableRow key={cartItem.name}>
                      <TableCell align="right">
                        <Link
                          href="/products/[product]"
                          as={`/products/${cartItem.id}`}
                        >
                          <Avatar
                            variant="rounded"
                            alt={cartItem.name}
                            src={cartItem.image}
                            className={classes.cartAvatar}
                          />
                        </Link>
                      </TableCell>
                      <TableCell align="center">{cartItem.name}</TableCell>
                      <TableCell align="center">{cartItem.price}</TableCell>
                      <TableCell align="center">
                        <Counter initialCount={cartItem.qty} id={cartItem.id} />
                      </TableCell>
                      <TableCell align="center">
                        ${' '}
                        {Number(cartItem.price.slice(1)) * Number(cartItem.qty)}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          size="small"
                          onClick={(evt) => {
                            if (evt) {
                              evt.preventDefault();
                            }

                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: {
                                id: cartItem.id,
                              },
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
    </MainLayout>
  );
}
