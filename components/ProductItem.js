import React from 'react';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Divider
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
});

export default function ProductItem(props) {
  const classes = useStyles();
  const { name, price, description, imageLink } = props;
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}
            image={imageLink}
            title="IQ Puzzle"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography align="center" color="secondary">
              <Divider />
              <strong>{price}</strong>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small"
            variant="contained"
            color="primary"
            startIcon={<ShoppingCartIcon />}
          >
            Add to cart
                    </Button>
          <Button size="small"
            variant="contained"
            color="primary"
            startIcon={<FavoriteIcon />}
          >
            Add to favorite
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};