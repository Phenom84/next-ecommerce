import React from 'react';
import { useIntl } from 'react-intl';
import { Button, Container, Box } from '@material-ui/core';
import { Formik, Form, Field } from 'formik';
import Head from 'next/head';
import { TextField } from 'formik-material-ui';
import Recaptcha from 'react-recaptcha';
import { string, object, setLocale } from 'yup';

let previousLocale = undefined;

const ContactForm = ({ locale }) => {
  const intl = useIntl();

  setLocale({
    mixed: {
      default: 'field_invalid',
    },
    string: {
      required: () => `${intl.formatMessage({ id: 'validate.min' })}`,
      min: ({ min }) => `${intl.formatMessage({ id: 'validate.min' })} ${min}`,
      max: ({ max }) => `${intl.formatMessage({ id: 'validate.max' })} ${max}`,
      email: () => `${intl.formatMessage({ id: 'validate.email' })}`,
      matches: () => `${intl.formatMessage({ id: 'validate.matches' })}`,
    },
  });

  const schema = object().shape({
    name: string()
      .required(intl.formatMessage({ id: 'validate.required' }))
      .min(2)
      .max(50),
    email: string()
      .email()
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)
      .required(intl.formatMessage({ id: 'validate.required' }))
      .min(6)
      .max(50),
    tel: string()
      .matches(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g)
      .min(6)
      .max(20),
    message: string()
      .required(intl.formatMessage({ id: 'validate.required' }))
      .min(2),
    'g-recaptcha-response': string().required(
      intl.formatMessage({ id: 'validate.required' }),
    ),
  });

  schema.validate({ name: 'jimmy', age: 11 }).catch(function (err) {
    err.name;
    err.errors;
  });

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
            validationSchema={schema}
            onSubmit={(values, { setSubmitting }) => {
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
            {({
              submitForm,
              isSubmitting,
              setFieldTouched,
              values,
              setFieldValue,
            }) => {
              if (locale !== previousLocale) {
                schema.validate().catch(() => {
                  setFieldTouched();
                  previousLocale = locale;
                });
              }
              return (
                <Form name="contactForm">
                  <Field
                    component={TextField}
                    color="secondary"
                    name="name"
                    type="text"
                    label={intl.formatMessage({ id: 'form.name' })}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                  />
                  <Field
                    component={TextField}
                    color="secondary"
                    name="email"
                    type="email"
                    label={intl.formatMessage({ id: 'form.email' })}
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
                    label={intl.formatMessage({ id: 'form.phone' })}
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
                    label={intl.formatMessage({ id: 'form.message' })}
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    rows="6"
                    rowsMax="12"
                    multiline
                  />
                  <Recaptcha
                    ref={(response) => {
                      if (response) {
                        response.execute();
                      }
                    }}
                    name="recaptcha"
                    type="recaptcha"
                    label="Recaptcha"
                    //6LeW1sIZAAAAAEEVirzFMNoSfMVQz7ZcvW0rDfCG
                    sitekey="6LcIiMQZAAAAAH3te4WEVgURGe6rmpT8rO-Ytf4C"
                    size="invisible"
                    onloadCallback={(response) => {
                      if (response) {
                        response.execute();
                      }
                    }}
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
              );
            }}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default ContactForm;
