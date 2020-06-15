import { fade, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      main: '#F79548',
    },
    // background: {
    //   paper:'rgba(42, 42, 42, 0.66)',
    // } 
  },
  props: {
    MuiLink: {
      color: "inherit",
      underline:'none'
    },
  },
  overrides: {
    MuiContainer: {
      root: {
        paddingTop: '24px',
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage:
            "url(back.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#F79548',
        margin: '16px auto',
      },
    },
  }
});

export default theme;