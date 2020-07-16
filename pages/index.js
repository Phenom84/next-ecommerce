import React from 'react';
import { Toolbar, Divider, Typography, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import { FormattedMessage, useIntl } from 'react-intl';
import Link from '../src/Link';
import MainLayout from '../components/_layout/MainLayout';

const useStyles = makeStyles((theme) => ({
  bg: {
    height: 'calc(100vw/2.12)',
  },
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
          className={classes.bg}
          component="img"
          sizes="(max-width: 7200px) 100vw, 2880px"
          srcSet="/images/Header-IQ-Puzzle-2880w_xfmzlk/Header-IQ-Puzzle-2880w_xfmzlk_c_scale,w_480.webp 480w,
                  /images/Header-IQ-Puzzle-2880w_xfmzlk/Header-IQ-Puzzle-2880w_xfmzlk_c_scale,w_993.webp 993w,
                  /images/Header-IQ-Puzzle-2880w_xfmzlk/Header-IQ-Puzzle-2880w_xfmzlk_c_scale,w_1375.webp 1375w,
                  /images/Header-IQ-Puzzle-2880w_xfmzlk/Header-IQ-Puzzle-2880w_xfmzlk_c_scale,w_1809.webp 1809w,
                  /images/Header-IQ-Puzzle-2880w_xfmzlk/Header-IQ-Puzzle-2880w_xfmzlk_c_scale,w_2222.webp 2222w,
                  /images/Header-IQ-Puzzle-2880w_xfmzlk/Header-IQ-Puzzle-2880w_xfmzlk_c_scale,w_2880.webp 2880w"
          src="/images/Header-IQ-Puzzle-2880w_xfmzlk/Header-IQ-Puzzle-2880w_xfmzlk_c_scale,w_2880.webp"
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
              sizes="(max-width: 5120px) 100vw, 2048px"
              srcSet="/images/with_family_qjpygl/with_family_qjpygl_c_scale,w_480.webp 480w,
                      /images/with_family_qjpygl/with_family_qjpygl_c_scale,w_1025.webp 1025w,
                      /images/with_family_qjpygl/with_family_qjpygl_c_scale,w_1516.webp 1516w,
                      /images/with_family_qjpygl/with_family_qjpygl_c_scale,w_2031.webp 2031w,
                      /images/with_family_qjpygl/with_family_qjpygl_c_scale,w_2048.webp 2048w"
              image="/images/with_family_qjpygl/with_family_qjpygl_c_scale,w_2048.webp"
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
              sizes="(max-width: 2560px) 100vw, 1024px"
              srcSet="/images/with_colleagues_knovjm/with_colleagues_knovjm_c_scale,w_480.webp 480w,
                      /images/with_colleagues_knovjm/with_colleagues_knovjm_c_scale,w_1017.webp 1017w,
                      /images/with_colleagues_knovjm/with_colleagues_knovjm_c_scale,w_1503.webp 1503w,
                      /images/with_colleagues_knovjm/with_colleagues_knovjm_c_scale,w_1998.webp 1998w,
                      /images/with_colleagues_knovjm/with_colleagues_knovjm_c_scale,w_2029.webp 2029w,
                      /images/with_colleagues_knovjm/with_colleagues_knovjm_c_scale,w_2048.webp 2048w"
              image="/images/with_colleagues_knovjm/with_colleagues_knovjm_c_scale,w_2048.webp"
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
              sizes="(max-width: 2560px) 100vw, 1024px"
              srcSet="/images/with_frends_oqzpxj/with_frends_oqzpxj_c_scale,w_480.webp 480w,
                      /images/with_frends_oqzpxj/with_frends_oqzpxj_c_scale,w_1060.webp 1060w,
                      /images/with_frends_oqzpxj/with_frends_oqzpxj_c_scale,w_1637.webp 1637w,
                      /images/with_frends_oqzpxj/with_frends_oqzpxj_c_scale,w_2034.webp 2034w,
                      /images/with_frends_oqzpxj/with_frends_oqzpxj_c_scale,w_2048.webp 2048w"
              image="/images/with_frends_oqzpxj/with_frends_oqzpxj_c_scale,w_2048.webp"
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
