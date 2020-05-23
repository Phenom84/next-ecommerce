import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const Footer = () => (
  <div style={{ maxWidth: 800, margin: "auto", textAlign: "center" }}>
    <Divider style={{ margin: "24px auto" }} />
    <Grid container justify={"center"} spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          About
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          Blog
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          Terms & Conditions
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography align={"center"} gutterBottom color={"textSecondary"}>
          Contact us
        </Typography>
      </Grid>
    </Grid>
  </div>
);

Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;