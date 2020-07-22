import React from 'react';
import SlideShow from '../components/Slideshow';
import { withNextRouter } from './../.storybook/decorators/NextRouterDecorator';

const slides = [
  {
    src: '/p1_600w.webp',
    alt: 'Front view',
  },
  {
    src: '/back1_600w.webp',
    alt: 'Back view',
  },
];

export default {
  title: 'Slideshow',
  component: SlideShow,
  decorators: [withNextRouter],
};

export const Default = () => <SlideShow />;

export const WithProps = () => (
  <SlideShow slides={slides} thumbnails={slides} />
);
