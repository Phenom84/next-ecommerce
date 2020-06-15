import React, { useState } from "react";
import { Grid, IconButton, Button } from "@material-ui/core";
import { useGlobal } from "../src/context/GlobalContext";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Counter = (props) => {
  const [state, dispatch] = useGlobal();
  const [count, setCount] = useState(props.initialCount || 1);
  const id = props.id;
  const { step = 1 } = props;

  const currentProduct = state.products.find((product) => product.id === id);
  currentProduct.count = count;

  const currentCartItem = state.cart.find((product) => product.id === id);
  let nextCount = count;
  const currentPath = window.location.pathname.toString();

  return (
    <Grid item container direction="row" justify="center" alignItems="center">
      <Grid item>
        <IconButton
          size="small"
          color="secondary"
          onClick={() => {
            nextCount = count - step;
            nextCount < 1
              ? (currentProduct.count = 1)
              : (currentProduct.count = nextCount);
            setCount(nextCount < 1 ? 1 : nextCount);
            if (currentPath === "/cart") {
              dispatch({
                type: "REMOVE_FROM_CART_ONE_ITEM",
                payload: {
                  id: currentCartItem.id,
                  qty: 1,
                },
              });
            } else {
              dispatch({
                type: "COUNTER_HANDLE",
                payload: {
                  id: currentProduct.id,
                  count: currentProduct.count,
                },
              });
            }
          }}
        >
          <RemoveIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Button variant="text" color="textPrimary" disableRipple>
          {count}
        </Button>
      </Grid>
      <Grid item>
        <IconButton
          size="small"
          color="secondary"
          onClick={() => {
            nextCount = count + step;
            currentProduct.count = nextCount;
            setCount(count + step);
            if (currentPath === "/cart") {
              dispatch({
                type: "ADD_TO_CART",
                payload: {
                  id: currentCartItem.id,
                  qty: 1,
                },
              });
            } else {
              dispatch({
                type: "COUNTER_HANDLE",
                payload: {
                  id: currentProduct.id,
                  count: currentProduct.count,
                },
              });
            }
          }}
        >
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default Counter;
