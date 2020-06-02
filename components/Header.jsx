import React from 'react'
import { useIntl } from 'react-intl';
import { AppBar, Toolbar, Box } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, makeStyles } from '@material-ui/core/styles';
import MainMenu from '../components/header_components/MainMenu'
import LanguageSelect from './header_components/LanguageSelect';
import IconGrup from './header_components/IconGrup';

const useStyles = makeStyles((theme) => ({
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
    height:theme.spacing(3),
    alignSelf: 'flex-end',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    width: '100%',
    order: 2,
    [theme.breakpoints.up('sm')]: {
      alignSelf: 'center',
      marginBottom: theme.spacing(0),
      marginLeft: theme.spacing(1),
      width: '120px',
    },
    [theme.breakpoints.up('md')]: {
      width: '210px',
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
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = ({ handleChangeLocale, locale }) => {
  
  const classes = useStyles();
  const intl = useIntl();

  return (
    <AppBar>
      <Toolbar>
        <MainMenu />
        {/* <Box className={classes.logo}>
          <Link href="/">
            <IconButton aria-label={intl.formatMessage({ id: 'logo.title' })} color="inherit" >
              <CardMedia
                component="img"
                image="/level-logo.png"
                title={intl.formatMessage({ id: 'logo.title' })}
              />
            </IconButton>
          </Link>
        </Box> */}
        <Box className={classes.search}>
            <SearchIcon className={classes.searchIcon}/>
          <InputBase
            placeholder={intl.formatMessage({ id: 'serch.field' })}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </Box>
        <LanguageSelect locale={locale} handleChangeLocale={handleChangeLocale}/>
        <IconGrup />
      </Toolbar>
    </AppBar>
  )
}

export default Header;