import React from "react";
import { Toolbar, Divider, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles(() => ({
  bigImg: {
    width: "66vw",
    height: "calc(75vw/1.7)",
  },
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
      <Typography variant="h4" align="center">
        <FormattedMessage id="main.page.header" />
      </Typography>
      <Grid
        container
        style={{ margin: "0px auto" }}
        justify={"space-evenly"}
        alignItems={"center"}
      >
        <Grid item xs={7} md={2}>
          <CardMedia
            component="img"
            className={classes.media}
            image="/Bann1-300x440.png"
            title="Product picture"
            alt="Product picture"
          />
          <Typography variant="h5" align="center" paragraph>
            <FormattedMessage id="step.1" />
          </Typography>
          <Typography component="p" variant="h6" align="center">
            <FormattedMessage id="step.1.description" />
          </Typography>
        </Grid>
        <Grid item xs={7} md={2}>
          <CardMedia
            component="img"
            className={classes.media}
            image="/Bann2-300x313.png"
            title="Product picture"
            alt="Product picture"
          />
          <Typography variant="h5" align="center" paragraph>
            <FormattedMessage id="step.2" />
          </Typography>
          <Typography component="p" variant="h6" align="center">
            <FormattedMessage id="step.2.description" />
          </Typography>
        </Grid>
        <Grid item xs={7} md={2}>
          <CardMedia
            component="img"
            className={classes.media}
            image="/Bann3.png"
            title="Product picture"
            alt="Product picture"
          />
          <Typography variant="h5" align="center" paragraph>
            <FormattedMessage id="step.3" />
          </Typography>
          <Typography component="p" variant="h6" align="center">
            <FormattedMessage id="step.3.description" />
          </Typography>
        </Grid>
      </Grid>
      <Toolbar />
      <Divider />

      <Grid
        container
        style={{ margin: "0px auto" }}
        justify={"space-between"}
        alignItems={"center"}
      >
        <Grid item xs={12} md={5}></Grid>
        <Grid item xs={12} md={7}>
          <CardMedia
            component="div"
            className={classes.bigImg}
            image="/with_family.png"
            title="Product picture"
            alt="Product picture"
          >
            <Typography component="p" variant="h4" align="left">
              <FormattedMessage id="solve.puzzles.with.kids" />
            </Typography>
          </CardMedia>
        </Grid>

        <Grid item xs={12} md={7}>
          <CardMedia
            component="div"
            className={classes.bigImg}
            image="/with_colleagues.png"
            title="Product picture"
            alt="Product picture"
          >
            <Typography component="p" variant="h4" align="right">
              <FormattedMessage id="solve.puzzles.with.colleagues" />
            </Typography>
          </CardMedia>
        </Grid>
        <Grid item xs={12} md={5}></Grid>

        <Grid item xs={12} md={5}></Grid>
        <Grid item xs={12} md={7}>
          <CardMedia
            component="div"
            className={classes.bigImg}
            image="/with_frends.png"
            title="Product picture"
            alt="Product picture"
          >
            <Typography component="p" variant="h4" align="left">
              <FormattedMessage id="solve.puzzles.with.friends" />
            </Typography>
          </CardMedia>
        </Grid>
      </Grid>
      <Divider />
    </React.Fragment>
  );
};

module.exports = Index;
