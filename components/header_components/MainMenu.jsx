import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { IconButton, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "../../src/Link";

const useStyles = makeStyles((theme) => ({
  menuIcon: {
    order: 1,
    flexGrow: 1,
    "& svg": {
      color: theme.palette.secondary.main,
    },
  },
}));

const MainMenu = () => {
  const classes = useStyles();
  const intl = useIntl();

  return (
    <Box className={classes.menuIcon}>
      <Link href="/products" underline="none">
        <IconButton
          edge="start"
          color="inherit"
          aria-label={intl.formatMessage({ id: "main.menu.area.label" })}
          title={intl.formatMessage({ id: "main.menu.area.label" })}
        >
          <MenuIcon />
          <Typography variant="h6">
            <FormattedMessage id="product.menu.label" />
          </Typography>
        </IconButton>
      </Link>
    </Box>
  );
};

export default MainMenu;
