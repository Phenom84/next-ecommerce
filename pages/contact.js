import React from 'react';
import ContactForm from '../components/ContactForm';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Toolbar } from '@material-ui/core';
import MainLayout from '../components/_layout/MainLayout';

export default function Contact({ locale }) {
  const intl = useIntl();
  return (
    <MainLayout title={intl.formatMessage({ id: 'footer.contact-us' })}>
      <Toolbar />
      <ContactForm locale={locale} />
    </MainLayout>
  );
}

Contact.propTypes = {
  locale: PropTypes.string,
};
