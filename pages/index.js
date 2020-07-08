import React from 'react';
import { Toolbar, Divider, Typography, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import { FormattedMessage, useIntl } from 'react-intl';
import Link from '../src/Link';
import MainLayout from '../components/_layout/MainLayout';

const useStyles = makeStyles((theme) => ({
  bigImg: {
    height: 'calc(66.66vw/1.7)',
    padding: '32px',
  },
  order1: {
    order: 1,
  },
  order2: {
    order: 2,
  },
  order3: {
    order: 4,
    [theme.breakpoints.up('md')]: {
      order: 3,
    },
  },
  order4: {
    order: 3,
    [theme.breakpoints.up('md')]: {
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
    height: '100vw',
  },
}));

export default function Index() {
  const classes = useStyles();
  const intl = useIntl();
  return (
    <MainLayout title={intl.formatMessage({ id: 'home.page.title' })}>
      <Box display="flex" flexDirection="column">
        <Toolbar />
        <CardMedia
          component="img"
          srcSet="/Header-IQ-Puzzle-mobile.webp 420w,
                  /Header-IQ-Puzzle-1024w.webp 1024w,
                  /Header-IQ-Puzzle-1920w.webp 1920w"
          sizes="(max-width: 480px) 400px,
                 (max-width: 1024px) 1024px,
                 (max-width: 1920px) 1920px"
          src="/Header-IQ-Puzzle-1920.webp"
          title="Product picture"
          alt="Product picture"
        />
        <Divider />
        <Typography variant="h4" align="center">
          <FormattedMessage id="main.page.header" />
        </Typography>
        <Grid
          container
          style={{ margin: '0px auto' }}
          justify={'space-evenly'}
          alignItems={'center'}
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
          style={{ margin: '0px auto' }}
          justify={'center'}
          alignItems={'center'}
          spacing={0}
        >
          <Grid item xs={9} md={3} className={classes.order1}>
            <Link href="/products/index">
              <CardMedia
                component="img"
                className={classes.media}
                image="/iqpuzzle_m_splash.webp"
                title="Show catalog"
                alt="IQ puzzle picture"
              />
            </Link>
          </Grid>
          <Grid item xs={12} md={9} className={classes.order2}>
            <CardMedia
              component="div"
              className={classes.bigImg}
              srcSet="/with_family_1024w.webp 1024w,
                      /with_family.webp 2048w"
              sizes="(max-width: 1024px) 1024px,
                     1025px"
              src="/with_family_1024w.webp"
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
              srcSet="/with_colleagues_1024w.webp 1024w,
                      /with_colleagues.webp 2048w"
              sizes="(max-width: 1024px) 1024px,
                     1025px"
              src="/with_colleagues_1024w.webp"
              title="Product picture"
              alt="Product picture"
            >
              <Typography component="p" variant="h4" align="right">
                <FormattedMessage id="solve.puzzles.with.colleagues" />
              </Typography>
            </CardMedia>
          </Grid>
          <Grid item xs={9} md={3} className={classes.order4}>
            <Link href="/products/index">
              <CardMedia
                component="img"
                className={classes.media}
                image="/challenging_1_splash.webp"
                title="Show catalog"
                alt="Chelenge puzzle picture"
              />
            </Link>
          </Grid>

          <Grid item xs={9} md={3} className={classes.order5}>
            <Link href="/products/index">
              <CardMedia
                component="img"
                className={classes.media}
                image="/tangram_splash.webp"
                title="Show catalog"
                alt="Wooden puzzle picture"
              />
            </Link>
          </Grid>
          <Grid item xs={12} md={9} className={classes.order6}>
            <CardMedia
              component="div"
              className={classes.bigImg}
              srcSet="/with_frends_1024w.webp 1024w,
                      /with_frends.webp 2048w"
              sizes="(max-width: 1024px) 1024px,
                     1025px"
              src="/with_frends_1024w.webp"
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
    </MainLayout>
  );
}
