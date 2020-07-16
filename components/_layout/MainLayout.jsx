import React from 'react';
import Head from 'next/head';
import { PropTypes } from 'prop-types';

const MainLayout = ({ children, title = 'IQ Puzzle' }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#303030" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, maximum-scale=5"
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
        <title>{title}</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple_touch_icon.png" />
      </Head>
      <main>{children}</main>
    </>
  );
};
export default MainLayout;

MainLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
