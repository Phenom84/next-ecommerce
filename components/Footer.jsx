import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid, Typography, Divider } from "@material-ui/core";

const Footer = () => {
  return (
    <React.Fragment>
      <Divider style={{ width: "92%", margin: "-1px auto 16px auto" }} />
      <Grid
        container
        style={{ margin: "0px auto" }}
        justify={"center"}
        alignItems={"center"}
      >
        <Grid item xs={4} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            <FormattedMessage id="footer.aboutUs" />
          </Typography>
        </Grid>
        <Grid item xs={4} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            <FormattedMessage id="footer.delivery" />
          </Typography>
        </Grid>
        <Grid item xs={4} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            <FormattedMessage id="footer.contactUs" />
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
