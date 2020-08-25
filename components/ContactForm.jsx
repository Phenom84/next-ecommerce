import React, { useState } from 'react';
import { Container, Box, TextField, Button } from '@material-ui/core';
import Head from 'next/head';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//   captcha: {
//     height: '78px',
//   },
// }));

const ContactForm = () => {
  //const classes = useStyles();
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
          // async
          // defer
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
              className="g-recaptcha"
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
