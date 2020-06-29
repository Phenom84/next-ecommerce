import React from "react";
import WishListItem from "./../components/WishListItem";
import { GlobalProvider } from "../src/context/GlobalContext";
import { IntlProvider } from "react-intl";
import translations from "./../components/translations";
import { withNextRouter } from "./../.storybook/decorators/NextRouterDecorator";

export default {
  title: "WishListItem",
  component: WishListItem,
  decorators: [withNextRouter],
};

export const Default = () => (
  <GlobalProvider>
    <IntlProvider locale={"en"} messages={translations["en"]}>
      <WishListItem />
    </IntlProvider>
  </GlobalProvider>
);
