import React from "react";
import { Toolbar, Divider, Typography, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  bigImg: {
    height: "calc(66.66vw/1.7)",
    padding: "32px",
  },
  order1: {
    order: 1,
  },
  order2: {
    order: 2,
  },
  order3: {
    order: 4,
    [theme.breakpoints.up("md")]: {
      order: 3,
    },
  },
  order4: {
    order: 3,
    [theme.breakpoints.up("md")]: {
      order: 4,
    },
  },
  order5: {
    order: 5,
  },
  order6: {
    order: 6,
  },
  card: {
    height: "100vw",
  },
}));

export const Index = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column">
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
            image="/step1.webp"
            title="Product picture"
            alt="Product picture"
          />
          <Typography variant="h5" align="center" paragraph>
            <FormattedMessage id="step.1" />
          </Typography>
          <Typography component="p" variant="body1" align="center">
            <FormattedMessage id="step.1.description" />
          </Typography>
        </Grid>
        <Grid item xs={7} md={2}>
          <CardMedia
            component="img"
            className={classes.media}
            image="/step2.webp"
            title="Product picture"
            alt="Product picture"
          />
          <Typography variant="h5" align="center" paragraph>
            <FormattedMessage id="step.2" />
          </Typography>
          <Typography component="p" variant="body1" align="center">
            <FormattedMessage id="step.2.description" />
          </Typography>
        </Grid>
        <Grid item xs={7} md={2}>
          <CardMedia
            component="img"
            className={classes.media}
            image="/step3.webp"
            title="Product picture"
            alt="Product picture"
          />
          <Typography variant="h5" align="center" paragraph>
            <FormattedMessage id="step.3" />
          </Typography>
          <Typography component="p" variant="body1" align="center">
            <FormattedMessage id="step.3.description" />
          </Typography>
        </Grid>
      </Grid>
      <Toolbar />
      <Divider />

      <Grid
        container
        style={{ margin: "0px auto" }}
        justify={"center"}
        alignItems={"center"}
        spacing={0}
      >
        <Grid item xs={9} md={3} className={classes.order1}>
          <CardMedia
            component="img"
            className={classes.media}
            image="/iqpuzzle_m_splash.webp"
            title="Product picture"
            alt="Product picture"
          />
        </Grid>
        <Grid item xs={12} md={9} className={classes.order2}>
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

        <Grid item xs={12} md={9} className={classes.order3}>
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
        <Grid item xs={9} md={3} className={classes.order4}>
          <CardMedia
            component="img"
            className={classes.media}
            image="/challenging_1_splash.webp"
            title="Product picture"
            alt="Product picture"
          />
        </Grid>

        <Grid item xs={9} md={3} className={classes.order5}>
          <CardMedia
            component="img"
            className={classes.media}
            image="/tangram_splash.webp"
            title="Product picture"
            alt="Product picture"
          />
        </Grid>
        <Grid item xs={12} md={9} className={classes.order6}>
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
    </Box>
  );
};

module.exports = Index;
