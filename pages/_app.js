import 'typeface-roboto';
import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import { GlobalProvider } from '../src/context/GlobalContext';
import Box from '@material-ui/core/Box';
import Footer from '../components/Footer';
import translations from '../components/translations';
import Header from '../components/Header';

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [locale, setLocale] = useState('en');
  const handleChangeLocale = ({ target: { value } }) => setLocale(value);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <IntlProvider locale={locale} messages={translations[locale]}>
          <Box display="flex" flexDirection="column" height="98vh">
            <Box>
              <Header locale={locale} handleChangeLocale={handleChangeLocale} />
            </Box>
            <Box flexGrow={1}>
              <Component locale={locale} {...pageProps} />
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        </IntlProvider>
      </GlobalProvider>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
