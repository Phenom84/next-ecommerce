import React, { useState } from 'react';
import { Container, Box, TextField, Button } from '@material-ui/core';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  captcha: {
    margin: '8px auto',
    width: '304px',
    height: '78px',
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const updateInputState = (event) => {
    const target = event.target;
    setState({ [target.name]: target.value });
    console.log([target.name] + ' - ' + target.value);
  };

  return (
    <>
      <Head>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Head>
      <Box display="flex" flexDirection="column">
        <Container maxWidth="xs">
          <form
            id="contact"
            method="POST"
            action="https://europe-west1-organic-setup-287317.cloudfunctions.net/Contact_form"
          >
            <TextField
              className={classes.form}
              type="text"
              label="Name"
              name="name"
              placeholder="Enter your Name here..."
              helperText=""
              variant="outlined"
              margin="dense"
              autoComplete="true"
              required
              fullWidth
              defaultValue={state.name}
              onChange={updateInputState}
            />
            <TextField
              className={classes.form}
              type="email"
              label="E-mail"
              name="email"
              placeholder="Enter your E-mail here..."
              helperText=""
              variant="outlined"
              margin="dense"
              autoComplete="true"
              required
              fullWidth
              defaultValue={state.email}
              onChange={updateInputState}
            />
            <TextField
              className={classes.form}
              type="tel"
              label="Phone"
              name="phone"
              placeholder="Enter your phone number here..."
              helperText=""
              variant="outlined"
              margin="dense"
              autoComplete="true"
              fullWidth
              defaultValue={state.phone}
              onChange={updateInputState}
            />
            <TextField
              className={classes.form}
              type="text"
              label="Message"
              name="message"
              placeholder="Leave a message for us..."
              helperText=""
              variant="outlined"
              margin="dense"
              autoComplete="true"
              rows="6"
              rowsMax="12"
              multiline
              required
              fullWidth
              defaultValue={state.message}
              onChange={updateInputState}
            />
            <div
              className={`g-recaptcha ${classes.captcha}`}
              data-sitekey="6LeW1sIZAAAAAEEVirzFMNoSfMVQz7ZcvW0rDfCG"
            ></div>
            <Button type="submit" form="contact" variant="contained" fullWidth>
              SUBMIT
            </Button>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default ContactForm;
