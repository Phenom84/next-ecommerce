import React from 'react';
import ContactForm from '../components/ContactForm';
import { useIntl } from 'react-intl';

import { Toolbar } from '@material-ui/core';

export default function Contact() {
  const intl = useIntl();
  return (
    <>
      <Toolbar />
      <ContactForm />
    </>
  );
}
