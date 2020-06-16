import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    secondary: {
      main: "#F79548",
    },
    // background: {
    //   paper:'rgba(42, 42, 42, 0.66)',
    // }
  },
  props: {
    MuiLink: {
      color: "inherit",
      underline: "none",
    },
  },
  overrides: {
    MuiTypography: {
      h4: {
        margin: "0px auto",
        padding: "32px",
      },
    },
    MuiContainer: {
      root: {
        paddingTop: "24px",
      },
    },
    MuiAppBar: {
      root: {
        backgroundImage: "url(back.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "top center",
      },
    },
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundImage: "url(back.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#F79548",
      },
    },
  },
});

export default theme;
