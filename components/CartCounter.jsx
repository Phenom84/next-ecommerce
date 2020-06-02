import React, { useState, useEffect } from "react";
import { Grid, IconButton, Button } from '@material-ui/core';
import { useGlobal } from '../src/context/GlobalContext';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function CartCounter(props) {
  const [state, dispatch] = useGlobal();
  const [count, setCount] = useState(
    props.initialCount || 1,
  );
  let id = props.id;

  const { step = 1 } = props;
  const cart = state.cart.find(product => product.id === id);
  let nextCount = count

  return (
    <Grid
      item container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <IconButton
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            nextCount = count - step;
            setCount(nextCount < 1 ? 1 : nextCount);
            dispatch({
              type: 'REMOVE_FROM_CART_ONE_ITEM',
              payload: {
                id: cart.id,
                qty: 1
              }
            });
          }
          }
        >
          <RemoveIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Button
          variant="text"
          color="primary"
          disableRipple
        >
          {count}
        </Button>
      </Grid>
      <Grid item>
        <IconButton
          variant="contained"
          size="small"
          color="primary"
          onClick={() => {
            nextCount = count + step;
            setCount(nextCount)
            dispatch({
              type: 'ADD_TO_CART',
              payload: {
                id: cart.id,
                qty: 1
              }
            });
          }
          }
        >
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid >
  );
}
