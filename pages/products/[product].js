import React from "react";
import { withRouter } from "next/router";
import {
  Grid,
  Container,
  CircularProgress,
  Divider,
  Box,
  Button,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { useGlobal } from "../../src/context/GlobalContext";
import { withStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Counter from "../../components/Counter";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { FormattedMessage } from "react-intl";
import SlideShow from "../../components/SlideShow";

const StyledRating = withStyles({
  iconFilled: {
    color: "#ff9100",
  },
})(Rating);

const ProductPage = (props) => {
  const [{ products, wishlist }, dispatch] = useGlobal();
  const product = products.find(
    (item) => item.id === props.router.query.product
  );
  const wishListIcon = wishlist.find((item) => item.id === product.id) ? (
    <FavoriteIcon color="secondary" />
  ) : (
    <FavoriteBorderOutlinedIcon />
  );

  const wishListButtonText = wishlist.find((item) => item.id === product.id) ? (
    <FormattedMessage id="remove.from.wishlist.button" />
  ) : (
    <FormattedMessage id="add.to.wishlist.button" />
  );

  return product ? (
    <Container>
      <Toolbar />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={6}>
          <SlideShow slides={product.images} thumbnails={product.images} />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          container
          spacing={1}
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h4">{product.name}</Typography>
            <Typography
              variant="caption"
              display="block"
              gutterBottom
              color={"textSecondary"}
            >
              <FormattedMessage id="category" />: {product.category}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledRating
              name="half-rating-read"
              defaultValue={product.rating}
              precision={0.1}
              readOnly
            />
            <Box fontWeight="fontWeightBold" fontSize={24}>
              <Typography gutterBottom variant="h4" component="p">
                {product.price}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography component="p" variant="body1">
              {product.description}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            container
            direction="column"
            justify="space-between"
            alignItems="stretch"
          >
            <Grid item>
              <Divider />
              <Typography align="center">
                <FormattedMessage id="cart.product.quantity" />
              </Typography>
              <Counter id={product.id} />
            </Grid>
          </Grid>
          <Grid item container spacing={1}>
            <Grid item xs={6}>
              <Button
                size="small"
                variant="outlined"
                fullWidth
                endIcon={<ShoppingCartIcon />}
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: "ADD_TO_CART",
                    payload: {
                      id: product.id,
                      qty: product.count || 1,
                    },
                  });
                }}
              >
                <FormattedMessage id="add.to.card.button" />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                size="small"
                variant="outlined"
                fullWidth
                endIcon={wishListIcon}
                onClick={(evt) => {
                  if (evt) {
                    evt.preventDefault();
                  }

                  dispatch({
                    type: "WISHLIST_HANDLE",
                    payload: {
                      id: product.id,
                      qty: 1,
                    },
                  });
                }}
              >
                {wishListButtonText}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  ) : (
    <CircularProgress />
  );
};

export default withRouter(ProductPage);
