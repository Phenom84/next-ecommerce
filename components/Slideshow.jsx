import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  CardMedia,
  IconButton,
} from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


const useStyles = makeStyles((theme) => ({
  relative: {
    position: "relative",
  },
  arrowLeft: {
    position: "absolute",
    top: '40%',
    left:'0'
  },
  arrowRight: {
    position: "absolute",
    top: '40%',
    right:'0'
  },
  media: {

    height: 480,
    [theme.breakpoints.up('md')]: {
      height: 380,
    },
  },
  thumbnail: {
    height: 80,
    opacity: 0.3,
    [theme.breakpoints.up('md')]: {
      height: 60,
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

const SlideShow = ({
  slides = [],
  thumbnails = [],
  initialSlide = 0,
}) => {
  const [activeSlide, setActiveSlide] = useState(initialSlide);
  const classes = useStyles();

  if (!slides.length || !thumbnails.length) {
    return null;
  }

  return (
    <Grid container spacing={0} className={classes.relative}>
      <Grid xs={12} item>
        <CardMedia
          component="img"
          className={classes.media}
          image={slides[activeSlide].src}
          title={slides[activeSlide].alt}
        />


      </Grid>
      <Grid container
        justify='center' spacing={0}>
        <Grid item>
          <IconButton className={classes.arrowLeft}
            onClick={() =>
              setActiveSlide(activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1)
            }
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
        </Grid>
        {thumbnails.map((thumbnail, index) => {
          return (
            <Grid xs={2} item>
              <CardMedia
                className={`${classes.thumbnail} ${activeSlide === index ? classes.active : ''}`}
                image={thumbnail.src}
                title={thumbnail.alt}
                onClick={() => setActiveSlide(index)}
              />
            </Grid>
          )
        })}
        <Grid item>
          <IconButton className={classes.arrowRight}
            onClick={() =>
              setActiveSlide(activeSlide + 1 === slides.length ? 0 : activeSlide + 1)
            }
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default SlideShow; 