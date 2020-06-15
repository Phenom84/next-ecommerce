import React, { useState } from "react";
import { Grid, IconButton, Button } from "@material-ui/core";
import { useGlobal } from "../src/context/GlobalContext";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PropTypes from "prop-types";

const Counter = ({ initialCount = 1, step = 1, id }) => {
  const [state, dispatch] = useGlobal();
  const [currentCount, setcurrentCount] = useState(initialCount);

  const currentProduct = state.products.find((product) => product.id === id);
  currentProduct.currentCount = currentCount;

  const currentCartItem = state.cart.find((product) => product.id === id);
  let counterValue = currentCount;
  const currentPath = window.location.pathname.toString();

  return (
    <Grid item container direction="row" justify="center" alignItems="center">
      <Grid item>
        <IconButton
          size="small"
          color="secondary"
          onClick={() => {
            counterValue = currentCount - step;
            counterValue < 1
              ? (currentProduct.currentCount = 1)
              : (currentProduct.currentCount = counterValue);
            setcurrentCount(counterValue < 1 ? 1 : counterValue);
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
                  count: currentProduct.currentCount,
                },
              });
            }
          }}
        >
          <RemoveIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Button variant="text" disableRipple>
          {counterValue}
        </Button>
      </Grid>
      <Grid item>
        <IconButton
          size="small"
          color="secondary"
          onClick={() => {
            counterValue = currentCount + step;
            currentProduct.currentCount = counterValue;
            setcurrentCount(currentCount + step);
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
                  count: currentProduct.currentCount,
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

Counter.propTypes = {
  initialCount: PropTypes.number,
  step: PropTypes.number,
  id: PropTypes.string.isRequired,
};
