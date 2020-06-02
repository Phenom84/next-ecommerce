import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Divider,
  Button
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobal } from '../src/context/GlobalContext';
import Link from '../src/Link';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
  }
}));

const ProductItem = ({ product }) => {
  const classes = useStyles();
  const [state, dispatch] = useGlobal();
  const intl = useIntl();

  const wishListIcon =
    (state.wishlist.find(item => item.id === product.id))
      ? <FavoriteIcon color='secondary' />
      : <FavoriteBorderOutlinedIcon />


  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.card}>
        <CardActionArea>
          <Link href="/products/[product]" as={`/products/${product.id}`}>
            <CardMedia component="img"
              className={classes.media}
              image={product.images[0].src}
              title={product.images[0].alt}
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
              <FormattedMessage id='category' />: {product.category}
            </Typography>
            <Divider variant="middle" />
            <Typography variant='h5' align="center" component='p' color="secondary">
              {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Grid container spacing={1}>
            <Grid item xs={10} align='center'>
              <Button
                size="small"
                variant='outlined'
                fullWidth
                aria-label={intl.formatMessage({ id: 'add.to.cart' })}
                endIcon={<ShoppingCartIcon />}
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
                <FormattedMessage id='add.to.cart' />
              </Button>
            </Grid>
            <Grid item xs={2} align='center'>
              <IconButton
                size="small"
                aria-label="Add to wishlist"
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: 'WISHLIST_HANDLE',
                    payload: {
                      id: product.id,
                      qty: 1
                    }
                  });
                }}
              >
                {wishListIcon}
              </IconButton>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProductItem;
