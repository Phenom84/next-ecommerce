import React from "react";
import WishListItem from "./../components/WishListItem";
import { GlobalProvider } from "../src/context/GlobalContext";
import { IntlProvider } from "react-intl";
import translations from "./../components/translations";

export default {
  title: "WishListItem",
  component: WishListItem,
};

export const Default = () => (
  <GlobalProvider>
    <IntlProvider locale={"en"} messages={translations["en"]}>
      <WishListItem />
    </IntlProvider>
  </GlobalProvider>
);
