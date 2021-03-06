import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    secondary: {
      main: 'rgba(247, 149, 72, 1)',
    },
    background: {
      paper: 'rgba(255, 255, 255, 0.08)',
    },
  },
  props: {
    MuiLink: {
      color: 'inherit',
      underline: 'none',
    },
  },
  overrides: {
    MuiButton: {
      outlined: {
        borderColor: 'rgba(247, 149, 72, 1)',
      },
    },
    MuiTypography: {
      h4: {
        lineHeight: '2em',
      },
    },
    MuiContainer: {
      root: {
        padding: '1em 0 1em 0',
      },
    },
    MuiOutlinedInput: {
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: '0 0 0 100px rgba(34, 34, 34, 1) inset',
        },
      },
    },

    MuiAppBar: {
      root: {
        backgroundImage: 'url(back.webp)',
        backgroundSize: '100%',
        backgroundPosition: 'top center',
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          minWidth: '334px',
          backgroundImage: 'url(back.webp)',
          backgroundSize: '100%',
          backgroundPosition: 'top center',
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#FFF',
      },
    },
    MuiToolbar: {
      root: {
        height: '66px',
      },
    },
    MuiMenu: {
      paper: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'rgba(0, 0, 0, 1)',
      },
    },
  },
});

export default theme;
