import React from 'react';
import { Button, Container, Box } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import Head from 'next/head';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';

let Recaptcha = require('react-recaptcha');

const useStyles = makeStyles(() => ({
  captcha: {
    margin: '8px auto',
    width: '304px',
    height: '78px',
  },
}));

const ContactForm = () => {
  const classes = useStyles();

  const callback = () => {
    console.log('Done!!!!');
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
          <Formik
            initialValues={{
              name: '',
              email: '',
              tel: '',
              'g-recaptcha-response': '',
              message: '',
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              if (!values.name) {
                errors.name = 'Required';
              }
              if (!values.message) {
                errors.message = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                let searchParams = new URLSearchParams();
                for (let pair of Object.entries(values)) {
                  searchParams.append(pair[0], pair[1]);
                }
                fetch(
                  'https://europe-west1-organic-setup-287317.cloudfunctions.net/Contact_form',
                  {
                    method: 'POST',
                    body: searchParams,
                  },
                )
                  .then((response) => response.json())
                  .then((result) => alert(result.message))
                  .catch((error) => alert(error));
                // alert(JSON.stringify(values, null, 2));
              }, 0);
            }}
          >
            {({ submitForm, isSubmitting, errors, setFieldValue }) => (
              <Form>
                <Field
                  component={TextField}
                  color="secondary"
                  name="name"
                  type="name"
                  label="Name"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />
                {errors.name ? errors.name : null}
                <Field
                  component={TextField}
                  color="secondary"
                  name="email"
                  type="email"
                  label="E-mail"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />
                <br />
                <Field
                  component={TextField}
                  color="secondary"
                  name="phone"
                  type="phone"
                  label="Phone number"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />
                <br />
                <Field
                  component={TextField}
                  color="secondary"
                  name="message"
                  type="message"
                  label="Message"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                  rows="6"
                  rowsMax="12"
                  multiline
                />
                <Recaptcha
                  name="recaptcha"
                  type="recaptcha"
                  label="Recaptcha"
                  sitekey="6LeW1sIZAAAAAEEVirzFMNoSfMVQz7ZcvW0rDfCG"
                  render="explicit"
                  theme="dark"
                  onloadCallback={callback}
                  verifyCallback={(response) => {
                    setFieldValue('g-recaptcha-response', response);
                  }}
                />
                <Button
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  fullWidth
                >
                  SUBMIT
                </Button>
              </Form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default ContactForm;
