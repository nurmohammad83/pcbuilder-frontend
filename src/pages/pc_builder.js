import React from 'react';
import RootLayout from '@/components/Layout/RootLayout';
import MyPcBuild from '@/components/UI/MyPcBuild';
import Head from 'next/head';

const PCBuildPage = () => {
  return (
    <div>
      <Head>
        <title>PC Build</title>
        <link rel="icon" href="/Extreme.png" />
      </Head>
      <MyPcBuild />
    </div>
  );
};

export default PCBuildPage;

PCBuildPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}
