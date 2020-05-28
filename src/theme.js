import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "light" ,
    primary: { 
      main: '#404040' 
    },
    primary: { 
      main: '#404040' 
    },
    secondary: {
      main: '#ff9100',
    },
  },
  props: {
    MuiLink: {
      color: "inherit"
    },
    MuiPaper: {
      square: false
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      textPrimary: {
        // Some CSS
        fontSize: 16,
      },
    },
  },
});

export default theme;