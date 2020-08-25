import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Grid,
  Typography,
  Divider,
  IconButton,
  Button,
} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import Link from '../src/Link';

const Footer = () => {
  return (
    <React.Fragment>
      <Divider style={{ width: '92%', margin: '-1px auto 16px auto' }} />
      <Grid
        container
        style={{ margin: '0px auto' }}
        spacing={0}
        justify={'center'}
        alignItems={'center'}
      >
        <Grid item xs={4} md={3}>
          <Link href="/contact">
            <Typography align={'center'} gutterBottom color={'textSecondary'}>
              <Button>
                <FormattedMessage id="footer.contact-us" />
              </Button>
            </Typography>
          </Link>
        </Grid>

        <Grid item xs={4} md={3}>
          <Typography align={'center'} gutterBottom color={'textSecondary'}>
            <Button href="tel:+37360583794" startIcon={<PhoneIphoneIcon />}>
              +37360583794
            </Button>
          </Typography>
        </Grid>

        <Grid item xs={4} md={3}>
          <Typography align={'center'} gutterBottom color={'textSecondary'}>
            <IconButton
              href="http://www.instagram.com/iqpuzzlemd/"
              target="_blank"
              rel="noreferrer"
              aria-label="link to instagram profile"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="http://www.facebook.com/iqpuzzlemd"
              target="_blank"
              rel="noreferrer"
              aria-label="link to facebook profile"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="mailto:info@iqpuzzle.md?subject=Mail from visitor (iqpuzzle.md)"
              aria-label="e-mail us"
            >
              <MailOutlineIcon />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Footer;
