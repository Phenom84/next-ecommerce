import React from "react";
import { FormattedMessage } from "react-intl";
import { Grid, Typography, Divider, IconButton, Button } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

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
            <FormattedMessage id="footer.blog" />
          </Typography>
        </Grid>
        <Grid item xs={4} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
            <Button href="tel:+37360583794"
              startIcon={<PhoneIphoneIcon />}
              >
              +37360583794
            </Button>
          </Typography>
        </Grid>
        <Grid item xs={4} md={3}>
          <Typography align={"center"} gutterBottom color={"textSecondary"}>
          <IconButton href="http://www.instagram.com/iqpuzzlemd/" target="_blank" rel="noreferrer" alt="instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton href="http://www.facebook.com/iqpuzzlemd" target="_blank" rel="noreferrer" alt="facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton href="mailto:info@iqpuzzle.md?subject=Mail from visitor (iqpuzzle.md)" alt="e-mail">
              <MailOutlineIcon />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
