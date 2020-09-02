import React from 'react';
import { useIntl } from 'react-intl';
import { AppBar, Toolbar, CardMedia, Box } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import MainMenu from 'components/header_components/MainMenu';
import Link from 'src/Link';
import LanguageSelect from './header_components/LanguageSelect';
import IconGrup from './header_components/IconGrup';
import HomeIcon from '@material-ui/icons/Home';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  homeIcon: {
    margin: '-4px 4px 0 0',
  },
  logo: {
    position: 'fixed',
    top: 0,
    left: '50%',
    right: '50%',
    marginTop: '-8px',
    marginLeft: '-55px',
    width: '110px',
  },
  search: {
    height: theme.spacing(3),
    alignSelf: 'flex-end',
    margin: theme.spacing(1),
    width: '100%',
    order: 2,
    [theme.breakpoints.up('sm')]: {
      alignSelf: 'center',
      marginBottom: theme.spacing(0),
      marginTop: theme.spacing(0),
      marginLeft: theme.spacing(1),
      width: '115px',
    },
    [theme.breakpoints.up('md')]: {
      width: '200px',
    },
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  searchIcon: {
    height: '100%',
    position: 'absolute',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(0.5, 1, 1, 1),
    paddingLeft: `calc(1em + ${theme.spacing(1.5)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 0,
  });
  const topTrigger = useScrollTrigger({
    disableHysteresis: true,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={500}>
      {React.cloneElement(children, {
        elevation: topTrigger ? 6 : 0,
      })}
    </Slide>
  );
}

const Header = ({ handleChangeLocale, locale, props }) => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <HideOnScroll {...props}>
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <MainMenu />
          <Box className={classes.logo}>
            <Link href="/">
              <IconButton
                aria-label={intl.formatMessage({ id: 'logo.title' })}
                color="inherit"
              >
                <HomeIcon className={classes.homeIcon} />
                <CardMedia
                  component="img"
                  image="/logo.webp"
                  title={intl.formatMessage({ id: 'logo.title' })}
                />
              </IconButton>
            </Link>
          </Box>
          <Box className={classes.search}>
            <SearchIcon className={classes.searchIcon} />
            <InputBase
              placeholder={intl.formatMessage({ id: 'serch.field' })}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <LanguageSelect
            locale={locale}
            handleChangeLocale={handleChangeLocale}
          />
          <IconGrup />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;

Header.propTypes = {
  locale: PropTypes.string,
  handleChangeLocale: PropTypes.func,
  props: PropTypes.object,
};

HideOnScroll.propTypes = {
  children: PropTypes.element,
  window: PropTypes.element,
};
