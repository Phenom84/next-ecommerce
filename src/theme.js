import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: "light" ,
    primary: { 
      main: '#404040' 
    },
  },
  props: {
    MuiLink: {
      color: "inherit",
    },
    MuiPaper: {
      square: false
    },
  },
});

export default theme;