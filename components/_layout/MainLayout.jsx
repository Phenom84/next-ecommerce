import React from 'react';
import Head from 'next/head';
import theme from './../../src/theme';

const MainLayout = ({ children, title = 'IQ Puzzle' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple_touch_icon.png"></link>
        <meta name="theme-color" content={theme.palette.primary.main} />
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
      <main>{children}</main>
    </>
  );
};
export default MainLayout;
