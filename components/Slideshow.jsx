import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CardMedia, Button, Card } from '@material-ui/core';
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  svg: {
    color: '#424242',
  },
  relative: {
    position: 'relative',
    maxWidth: '600px',
  },
  arrowLeft: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '10vw',
    [theme.breakpoints.up('md')]: {
      bottom: '75px',
    },
  },
  arrowRight: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '10vw',
    [theme.breakpoints.up('md')]: {
      bottom: '75px',
    },
  },
  thumbnail: {
    height: '10vw',
    opacity: 0.5,
    [theme.breakpoints.up('md')]: {
      height: 75,
    },
  },
  active: {
    opacity: 1,
  },
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const SlideShow = ({ slides, thumbnails, initialSlide = 0 }) => {
  const [activeSlide, setActiveSlide] = useState(initialSlide);
  const classes = useStyles();

  const defaulSlides = [
    {
      src: '/default-product.webp',
      alt: 'Back view',
    },
    {
      src: '/default-product.webp',
      alt: 'Back view',
    },
    {
      src: '/default-product.webp',
      alt: 'Back view',
    },
    {
      src: '/default-product.webp',
      alt: 'Back view',
    },
  ];
  if (!slides) {
    slides = defaulSlides;
    thumbnails = defaulSlides;
  }

  return (
    <Grid container spacing={0} className={classes.relative}>
      <Grid xs={12} item>
        <Card>
          <CardMedia
            component="img"
            image={slides[activeSlide].src}
            title={slides[activeSlide].alt}
          />
        </Card>
      </Grid>
      <Grid container justify="center">
        <Grid item>
          <Button
            className={classes.arrowLeft}
            disableRipple
            onClick={() =>
              setActiveSlide(
                activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1,
              )
            }
          >
            <ArrowBackIosOutlinedIcon
              fontSize="large"
              className={classes.svg}
            />
          </Button>
        </Grid>
        {thumbnails.map((thumbnail, index) => {
          return (
            <Grid key={index} item xs={2}>
              <CardMedia
                className={`${classes.thumbnail} ${
                  activeSlide === index ? classes.active : ''
                }`}
                image={thumbnail.src}
                title={thumbnail.alt}
                onClick={() => setActiveSlide(index)}
              />
            </Grid>
          );
        })}
        <Grid item>
          <Button
            className={classes.arrowRight}
            disableRipple
            onClick={() =>
              setActiveSlide(
                activeSlide + 1 === slides.length ? 0 : activeSlide + 1,
              )
            }
          >
            <ArrowForwardIosOutlinedIcon
              fontSize="large"
              className={classes.svg}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SlideShow;

SlideShow.propTypes = {
  slides: PropTypes.array,
  thumbnails: PropTypes.array,
  initialSlide: PropTypes.number,
};
