import React from 'react';
import {
  Button,
  IconButton,
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
import { useGlobal } from '../src/context/GlobalContext';
import Link from '../src/Link';


const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  }
}), { name: 'ProductItem' });

export default function ProductItem({ product }) {
  const classes = useStyles();
  const [state, dispatch] = useGlobal();

  return (
    <Grid item xs={12} sm = {6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <Link href="/products/[product]" as={`/products/${product.id}`}>
          <CardMedia component="img"
                                className={classes.media}
                                image={product.image}
                                title={product.name}
                            />
          </Link>
          <CardContent align="center">
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography 
              variant="caption" 
              display="block" 
              gutterBottom 
              color={"textSecondary"}
              >
                Category: {product.category}
            </Typography>
            <Divider variant="middle" />
            <Typography align="center" fontSize={24} color="secondary">
              {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container spacing={1} >
            <Grid item xs={6} align='center'>
              <IconButton
                size="small"
                color="primary"
                aria-label="Add to cart"
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: {
                      id: product.id,
                      qty: 1
                    }
                  });
                }}
              >
                <ShoppingCartIcon />
              </IconButton>
            </Grid>
            <Grid item xs={6} align='center'>
              <IconButton
                size="small"
                color="primary"
                aria-label="Add to wishlist"
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: 'ADD_TO_WISHLIST',
                    payload: {
                      id: product.id,
                      qty: 1
                    }
                  });
                }}
              >
                <FavoriteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}
