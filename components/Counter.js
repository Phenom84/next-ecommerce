import { Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { useState, useEffect } from "react";

// const scrollHandler = () => console.log("scrollig");

export default function Counter(props) {
  const [count, setCount] = useState(
    props.initialCount || 1
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const { step = 1 } = props;



    return (
      <Grid item container
        direction="row"
        justify="center"
        alignItems="center">
        <Grid>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => {
              const nextCount = count - step;
              setCount(nextCount < 0 ? 0 : nextCount);
            }}
          >
            <RemoveIcon />
          </Button>
        </Grid>
        <Grid>
          <Button variant="text" color="primary" disableRipple>
            {count}
          </Button>
        </Grid>
        <Grid><Button
          variant="contained"
          size="small"
          color="primary"
          onClick={() => setCount(count + step)}
        >
          <AddIcon />
        </Button>
        </Grid>
      </Grid >
    );
  }
