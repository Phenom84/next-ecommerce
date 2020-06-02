import React, { useState } from 'react';
import { withRouter } from 'next/router';
import {
    Grid,
    Container,
    CardMedia,
    CircularProgress,
    Divider,
    Box,
    Button,
    Paper,
    Tabs,
    Tab,
    Typography,
    Toolbar,
    Table,
    TableContainer,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';
import { useGlobal } from '../../src/context/GlobalContext';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TabPanel from '../../components/TabPanel';
import Rating from '@material-ui/lab/Rating';
import Counter from '../../components/Counter'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { FormattedMessage } from 'react-intl';
import SlideShow from '../../components/SlideShow';


function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    description: {
        '& td': {
            borderBottom: 'none',
            padding: '4px 0 4px 4px',
        }
    }
}));

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff9100',
    },
})(Rating);


const ProductPage = (props) => {
    const [{ products, wishlist }, dispatch] = useGlobal();
    const product = products.find(item => item.id === props.router.query.product)
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const wishListIcon = 
    (wishlist.find(item => item.id === product.id)) 
    ? <FavoriteIcon color='secondary'/> 
    : <FavoriteBorderOutlinedIcon />

    const wishListButtonText = 
    (wishlist.find(item => item.id === product.id)) 
    ? <FormattedMessage id='remove.from.wishlist.button' /> 
    : <FormattedMessage id='add.to.wishlist.button' />
    

    return (
        product ?
            <Container>
                <Toolbar />
                <Grid container
                    spacing={2}
                    direction='row'
                    justify='space-between'
                    alignItems="flex-start"
                >
                    <Grid item xs={12} md={6} >
                        <Paper>
                            <SlideShow
                                slides={product.images}
                                thumbnails={product.images}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}
                        container spacing={4}
                        direction="column"
                        justify='space-evenly'
                        alignItems='center'
                        spacing={1}
                    >
                        <Grid item xs={12}>
                            <Typography variant="h4">
                                {product.name}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom color={"textSecondary"}>
                                <FormattedMessage id='category' />: {product.category}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <StyledRating name="half-rating-read" defaultValue={product.rating} precision={0.1} readOnly />
                            <Box fontWeight="fontWeightBold" fontSize={24}>
                                <Typography
                                    gutterBottom
                                    color={"secondary"}
                                    variant="h4"
                                    component='p'
                                >
                                    {product.price}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component='p' variant='body1'>
                                {product.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}
                            container
                            direction="column"
                            justify='space-between'
                            alignItems='stretch'>
                            <Grid item>
                                <Divider />
                                <Typography align="center">
                                    <FormattedMessage id='cart.product.quantity' />
                                </Typography>
                                <Counter initialCount={1} initialStep={1} id={product.id} />
                            </Grid>
                        </Grid>
                        <Grid item
                            container
                            spacing={1}>
                            <Grid item xs={6}>
                                <Button size="small" color="primary" variant="contained" fullWidth
                                    endIcon={<ShoppingCartIcon />}
                                    onClick={(evt) => {
                                        if (evt) {
                                            evt.preventDefault();
                                        }

                                        dispatch({
                                            type: 'ADD_TO_CART',
                                            payload: {
                                                id: product.id,
                                                qty: product.count || 1
                                            }
                                        });
                                    }}
                                >
                                    <FormattedMessage id='add.to.card.button' />
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button size="small" color="primary" variant="outlined" fullWidth
                                    endIcon={wishListIcon}
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
                                    {wishListButtonText}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            : <CircularProgress />
    );
};

export default withRouter(ProductPage); 