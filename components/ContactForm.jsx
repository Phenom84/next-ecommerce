import React from 'react';
import { Button, Container, Box } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import Head from 'next/head';
import { TextField } from 'formik-material-ui';
import { makeStyles } from '@material-ui/core/styles';
import { object, string } from 'yup';
import Recaptcha from 'react-recaptcha';

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
            validationSchema={object({
              name: string().required().min(2).max(50),
              email: string()
                .email()
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
                .required()
                .min(6)
                .max(50),
              tel: string()
                .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g)
                .min(6)
                .max(20),
              message: string().required().min(2),
              'g-recaptcha-response': string().required(),
            })}
            initialValues={{
              name: '',
              email: '',
              tel: '',
              'g-recaptcha-response': '',
              message: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
              }, 2000);
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
                .catch((error) => alert(error))
                .finally(() => setSubmitting(false));
            }}
          >
            {({ submitForm, isSubmitting, setFieldValue }) => (
              <Form>
                <Field
                  component={TextField}
                  color="secondary"
                  name="name"
                  type="text"
                  label="Name"
                  variant="outlined"
                  margin="dense"
                  fullWidth
                />
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
                  name="tel"
                  type="tel"
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
                <div className={classes.captcha}>
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
                </div>
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
