import React, { Component } from 'react';
import { Container, Box, TextField, Button } from '@material-ui/core';
import Head from 'next/head';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(event) {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  render() {
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
                value={this.state.name}
                onChange={this.onChangeInput}
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
                value={this.state.email}
                onChange={this.onChangeInput}
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
                value={this.state.phone}
                onChange={this.onChangeInput}
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
                value={this.state.message}
                onChange={this.onChangeInput}
              />
              <div
                className="g-recaptcha"
                data-sitekey="6LeW1sIZAAAAAEEVirzFMNoSfMVQz7ZcvW0rDfCG"
              ></div>
              <Button
                type="submit"
                form="contact"
                variant="contained"
                fullWidth
              >
                SUBMIT
              </Button>
            </form>
          </Container>
        </Box>
      </>
    );
  }
}
