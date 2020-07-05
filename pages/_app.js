import "typeface-roboto";
import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import { GlobalProvider } from "../src/context/GlobalContext";
import Box from "@material-ui/core/Box";
import Footer from "../components/Footer";
import translations from "../components/translations";
import Header from "../components/Header";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const [locale, setLocale] = useState("en");
  const handleChangeLocale = ({ target: { value } }) => setLocale(value);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Project e-commerce</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta 
          name="description" 
          lang="en"
          content="Unique puzzles IQ puzzle is a daily simulator for your brain.
          At first glance, it might seem that it's easy, but it's harder than you think."
        />
        <meta name="keywords" content="puzzles, brain fitness, iqpuzzle" />
        <meta name="author" content="Denis Cerneaga" />
        <meta name="robots" content="index" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <IntlProvider locale={locale} messages={translations[locale]}>
            <Box display="flex" flexDirection="column" height="98vh">
              <Box>
                <Header
                  locale={locale}
                  handleChangeLocale={handleChangeLocale}
                />
              </Box>
              <Box flexGrow={1}>
                <Component {...pageProps} />
              </Box>
              <Box>
                <Footer />
              </Box>
            </Box>
          </IntlProvider>
        </GlobalProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
