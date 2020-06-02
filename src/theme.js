import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "light" ,
    primary: { 
      main: '#363636',
    },
    secondary: {
      main: '#F79548',
    },
  },
  props: {
    MuiLink: {
      color: "inherit"
    },
  },
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: '#F79548',
        margin: '16px auto',
      }
    }
  }
});

export default theme;