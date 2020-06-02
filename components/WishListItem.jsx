import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  CardActions,
  CardContent,
  CardMedia,
  Card,
  CardActionArea,
  Button,
} from '@material-ui/core';
import { useGlobal } from '../src/context/GlobalContext';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { FormattedMessage } from 'react-intl';
import Link from '../src/Link';

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  }
}));

export default function WishListItem({ product }) {
  const classes = useStyles();
  const [state, dispatch] = useGlobal();

  return (
    <Grid item xs={12} md={6} lg={4}>
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
            <Typography variant="body2" component="p" align="center" fontSize={16}>
              {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                fullWidth
                endIcon={<FavoriteIcon />}
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: 'WISHLIST_HANDLE',
                    payload: {
                      id: product.id,
                    }
                  });
                }}
              >
                <FormattedMessage id='remove.from.wishlist.button' />
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                fullWidth
                endIcon={<ShoppingCartIcon />}
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }
                  dispatch({
                    type: 'ADD_TO_CART',
                    payload: {
                      id: product.id,
                      qty: 1,
                    }
                  });
                  dispatch({
                    type: 'WISHLIST_HANDLE',
                    payload: {
                      id: product.id,
                    }
                  });
                }}
              >
                <FormattedMessage id='move.to.cart.button' />
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}