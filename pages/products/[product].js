import React from 'react';
import { withRouter } from 'next/router';
import { Grid, Container, CardMedia, CircularProgress, Divider, Box, Button, Paper, ListItemSecondaryAction } from '@material-ui/core';
import { useGlobal } from '../../src/context/GlobalContext';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TabPanel from '../../components/TabPanel';
import Rating from '@material-ui/lab/Rating';
import Counter from '../../components/Counter'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


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
}));

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff9100',
    },
})(Rating);


const ProductPage = (props) => {
    const [{ products }, dispatch] = useGlobal();
    const [qty, setQty] = React.useState(1);

    const product = products.find(item => item.id === props.router.query.product)
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        product ?
            <Container maxWidth="lg">
                <Typography variant="h5" align="center">
                    <Box lineHeight={3} m={1}>
                        Product page
                    </Box>
                </Typography>
                <Grid
                    container
                    spacing={4}
                    justify="center"
                    alignItems="flex-start">
                    <Grid xs={12} sm={11} md={6} item>
                        <Paper>
                            <CardMedia component="img"
                                className={classes.media}
                                image={product.image}
                                title={product.name}
                            />
                        </Paper>
                    </Grid>
                    <Grid xs={12} sm={11} md={6} item container direction="column" spacing={2}>
                        <Grid item>
                            <Typography variant="h6">
                                {product.name}
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom color={"textSecondary"}>
                                Category: {product.category}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <StyledRating name="half-rating-read" defaultValue={product.rating} precision={0.1} readOnly />
                            <Box fontWeight="fontWeightBold" fontSize={24}>
                                <Typography gutterBottom color={"secondary"}> 
                                    {product.price}
                                </Typography>
                                </Box>
                        </Grid>
                        <Grid item>
                            <Typography paragraph variant="body2">
                                {product.description}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Divider />
                        </Grid>
                        <Grid item>
                            <Typography align="center">
                                Quantity
                            </Typography>
                            <Counter initialCount={1} initialStep={1} id={product.id} />
                        </Grid>
                        <Grid item container spacing={1}>
                            <Grid item xs={6}>
                                <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    endIcon={<ShoppingCartIcon />}
                                    fullWidth
                                    onClick={(evt) => {
                                        if (evt) {
                                            evt.preventDefault();
                                        }

                                        dispatch({
                                            type: 'ADD_TO_CART',
                                            payload: {
                                                id: product.id,
                                                qty: product.count
                                            }
                                        });console.log(product.count)
                                    }}
                                >
                                    Add to cart
              </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button
                                    size="small"
                                    color="primary"
                                    variant="contained"
                                    endIcon={<FavoriteIcon />}
                                    fullWidth
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
                                    Add to wishlist
              </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12} item>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                            variant="fullWidth"
                            centered
                        >
                            <Tab label="Description" {...a11yProps(0)} />
                            <Tab label="Information" {...a11yProps(1)} />
                            <Tab label="Reviews" {...a11yProps(2)} />
                        </Tabs>
                        <TabPanel value={value} index={0}>Description</TabPanel>
                        <TabPanel value={value} index={1}>Info</TabPanel>
                        <TabPanel value={value} index={2}>Review</TabPanel>
                    </Grid>
                    <Grid xs={12} item>
                        Related products
                    </Grid>
                </Grid>

            </Container>
            : <CircularProgress />
    );
};

export default withRouter(ProductPage) 