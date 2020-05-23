import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import PrimarySearchAppBar from '../components/PrimarySearchAppBar';
import { GlobalProvider } from '../src/context/GlobalContext';
import Box from '@material-ui/core/Box';
import Footer from "../components/Footer"

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Project e-commerce</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <Box
            display="flex"
            flexDirection="column"
            height="98vh"
          >
            <Box>
              <PrimarySearchAppBar />
            </Box>
            <Box flexGrow={1}>
              <Component {...pageProps} />
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>

        </GlobalProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};