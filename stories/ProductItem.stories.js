import React from "react";
import ProductItem from "./../components/ProductItem";
import { GlobalProvider } from "../src/context/GlobalContext";
import { IntlProvider } from "react-intl";
import translations from "./../components/translations";

export default {
  title: "ProductItem",
  component: ProductItem,
};

export const Default = () => (
  <GlobalProvider>
    <IntlProvider locale={"en"} messages={translations["en"]}>
      <ProductItem />
    </IntlProvider>
  </GlobalProvider>
);
