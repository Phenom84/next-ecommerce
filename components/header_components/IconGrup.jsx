import React from 'react'
import { useIntl, FormattedMessage } from 'react-intl';
import {
  Box,
  IconButton,
  Badge,
  Menu,
  MenuItem
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Link from '../../src/Link';
import { useGlobal } from '../../src/context/GlobalContext';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  sectionDesktop: {
    order: 6,
    marginRight: '-10px',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    order: 6,
    marginRight: '-10px',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

const IconGrup = () => {
  
  const intl = useIntl();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [state] = useGlobal();
  const cartCounter = state.cart.length;
  const wishListCounter = state.wishlist.length;

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}><FormattedMessage id='account' /></MenuItem>
      <MenuItem onClick={handleMenuClose}><FormattedMessage id='logout' /></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label={intl.formatMessage({ id: 'account' })}
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        Profile
      </MenuItem>
      <Link href="/wish-list">
        <MenuItem>
          <IconButton aria-label={`show ${wishListCounter} product`} color="inherit">
            <Badge badgeContent={wishListCounter} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
          Wishlist
        </MenuItem>
      </Link>
      <Link href="/cart">
        <MenuItem>
          <IconButton aria-label={`show ${cartCounter} product`} color="inherit">
            <Badge badgeContent={cartCounter} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          Cart
        </MenuItem>
      </Link>
    </Menu>
  );
  return (
    <React.Fragment>
      <Box className={classes.sectionDesktop}>
        <Link href="/wish-list">
          <IconButton
            title={intl.formatMessage({ id: 'wishlist.page.title' })}
            aria-label={`show ${wishListCounter} product`}
            color="inherit"
          >
            <Badge badgeContent={wishListCounter} color="secondary">
              <FavoriteIcon />
            </Badge>
          </IconButton>
        </Link>
        <Link href="/cart">
          <IconButton
            title={intl.formatMessage({ id: 'cart.page.title' })}
            aria-label={`show ${cartCounter} product`}
            color="inherit"
          >
            <Badge badgeContent={cartCounter} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
        <IconButton
          title={intl.formatMessage({ id: 'account' })}
          aria-label={intl.formatMessage({ id: 'account' })}
          aria-controls={menuId}
          aria-haspopup="true"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Box>
      <Box className={classes.sectionMobile}>
        <IconButton
          aria-label={intl.formatMessage({ id: 'show.more' })}
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreIcon />
        </IconButton>
      </Box>
      {renderMobileMenu}
      {renderMenu}
    </React.Fragment>
  )
}

export default IconGrup;