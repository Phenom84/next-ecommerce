import React, { useState, useEffect } from "react";
import { Grid, IconButton, Button } from '@material-ui/core';
import { useGlobal } from '../src/context/GlobalContext';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function Counter(props) {
  const [state, dispatch] = useGlobal();
  const [count, setCount] = useState(
    props.initialCount || 1,
  );
  let id = props.id;

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const { step = 1 } = props;
  const product = state.products.find(product => product.id === id);
  let nextCount = count;

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
            nextCount < 1 ? product.count = 1 : product.count = nextCount;
            setCount(nextCount < 1 ? 1 : nextCount);
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
            product.count = nextCount
            setCount(count + step)
          }
          }
        >
          <AddIcon />
        </IconButton>
      </Grid>
    </Grid >
  );
}
