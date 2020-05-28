import React from 'react';
import { Grid, Container, Box, Typography, CardMedia, Avatar, IconButton } from '@material-ui/core';
import { useGlobal } from '../src/context/GlobalContext';
import { makeStyles } from '@material-ui/core/styles';
import CartItem from '../components/CartItem1';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ClearIcon from '@material-ui/icons/Clear';
import Counter from '../components/Counter'

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
  cartAvatar: {
    width: "8rem",
    height: "8rem",
    
  },
});

export default () => {
  const classes = useStyles();
  const [state, dispatch] = useGlobal();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={12}>
        <Typography variant="h5" align="center">
        <Box lineHeight={3} m={1}>
          Your cart {!state.cart.length && 'is empty...'}
        </Box>
      </Typography>
        </Grid>
        <Grid item xs={12} md={10} lg={8}>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="Shoping cart">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: '8rem' }}></TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center" style={{ width: '2rem' }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {state.cart.map((product) => (
        <TableRow key={product.name}>
        <TableCell style={{ width: '8rem' }} align="right">
        <Avatar variant="square" alt={product.name} src={product.image} className={classes.cartAvatar}/>
        </TableCell>
        <TableCell align="center">{product.name}</TableCell>
        <TableCell align="center">{product.price}</TableCell>
        <TableCell align="center"><Counter initialCount={product.qty}/></TableCell>
        <TableCell align="center">0</TableCell>
        <TableCell align="center" style={{ width: '2rem' }}>
        <IconButton
                size="small"
                color="primary"
                variant="contained"
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: {
                      id: product.id,
                    }
                  });
                }}
              >
                <ClearIcon/>
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