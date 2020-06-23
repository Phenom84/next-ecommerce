import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, CssBaseline, Container } from "@material-ui/core";
import { GlobalProvider } from "../src/context/GlobalContext";
import theme from "../src/theme";
import { IntlProvider } from "react-intl";
import translations from "../components/translations";

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalProvider>
      <CssBaseline />
      <IntlProvider locale={"en"} messages={translations["en"]}>
        <Container>
          {storyFn()}
        </Container>
      </IntlProvider>
    </GlobalProvider>
  </ThemeProvider>
));
