import React from "react";
import ProductItem from "./../components/ProductItem";
import { withNextRouter } from "./../.storybook/decorators/NextRouterDecorator";

const product = {
  id: "1",
  category: "IQ Puzzle",
  name: "Rachtangle",
  price: "$ 3.00",
  description:
    'The figure has 4 corners, in the puzzle there are 4 parts. "Everything is fine, boss, I can handle it quickly," the brain reports. Then the fun begins! The brain discovers that the figures have 3 and 5 sides. They also vary greatly in size! How to put them in a simple rectangle? You will know this if you try to assemble the Rectangle.',
  image:
    "https://raw.githubusercontent.com/Phenom84/next-ecommerce/master/public/p1.webp",
  rating: 3.8,
  images: [
    {
      src: "/p1.webp",
      alt: "Front view",
    },
    {
      src: "/back1.webp",
      alt: "Back view",
    },
  ],
};

export default {
  title: "ProductItem",
  component: ProductItem,
  decorators: [withNextRouter],
};

export const Default = () => <ProductItem product={product} />;
