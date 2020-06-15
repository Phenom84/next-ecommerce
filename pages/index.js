import React from "react";
import { Toolbar, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    height: "100vw",
  },
}));

export const Index = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Toolbar />
      <CardMedia
        component="img"
        className={classes.media}
        image="/Header-IQ-Puzzle2.png"
        title="Product picture"
        alt="Product picture"
      />
      <Divider />
      <CardMedia
        component="img"
        className={classes.media}
        image="/with_family.png"
        title="Product picture"
        alt="Product picture"
      />
      <Divider />
      <CardMedia
        component="img"
        className={classes.media}
        image="/with_colleagues.png"
        title="Product picture"
        alt="Product picture"
      />
      <Divider />
      <CardMedia
        component="img"
        className={classes.media}
        image="/with_frends.png"
        title="Product picture"
        alt="Product picture"
      />
    </React.Fragment>
  );
};

module.exports = Index;
