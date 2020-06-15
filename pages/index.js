import React from "react";
import { Typography, Toolbar } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

export default () => {
  return (
    <React.Fragment>
      <Toolbar />
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        <FormattedMessage id="home.page.title" />
      </Typography>
    </React.Fragment>
  );
};