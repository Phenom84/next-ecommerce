import React from 'react';
import Head from 'next/head';

const MainLayout = ({ children, title = 'IQ Puzzle.Brain Fitness' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
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
