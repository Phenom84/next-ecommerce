import React from "react";
import SlideShow from "../components/Slideshow";

const slides = [
  {
    src:
      "https://raw.githubusercontent.com/Phenom84/next-ecommerce/master/public/p1.webp",
    alt: "Alternative text 1dd",
  },
  {
    src:
      "https://raw.githubusercontent.com/Phenom84/next-ecommerce/master/public/p2.webp",
    alt: "Alternative text 2",
  },
  {
    src:
      "https://raw.githubusercontent.com/Phenom84/next-ecommerce/master/public/p3.webp",
    alt: "Alternative text 3",
  },
  {
    src:
      "https://raw.githubusercontent.com/Phenom84/next-ecommerce/master/public/p4.webp",
    alt: "Alternative text 4",
  },
  {
    src:
      "https://raw.githubusercontent.com/Phenom84/next-ecommerce/master/public/p5.webp",
    alt: "Alternative text 5",
  },
  {
    src:
      "https://raw.githubusercontent.com/Phenom84/next-ecommerce/master/public/p6.webp",
    alt: "Alternative text 6",
  },
];

export default {
  title: "Slideshow",
  component: SlideShow,
};

export const Default = () => <SlideShow slides={slides} thumbnails={slides} />;
