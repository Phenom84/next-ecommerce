import React from "react";
import { FormattedMessage } from 'react-intl';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const Footer = () => (
  <div style={{ maxWidth: 800, margin: "auto", textAlign: "center" }}>
    <Divider style={{ margin: "24px auto" }} />
    <Grid container justify={"center"} spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          <FormattedMessage id='footer.aboutUs' />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          <FormattedMessage id='footer.delivery' />
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          <FormattedMessage id='footer.contactUs' />
        </Typography>
      </Grid>
    </Grid>
  </div>
);

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;