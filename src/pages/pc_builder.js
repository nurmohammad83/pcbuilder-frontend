import React from 'react';
import RootLayout from '@/components/Layout/RootLayout';
import MyPcBuild from '@/components/UI/MyPcBuild';

const PCBuildPage = () => {

    return (
      <div>
        <MyPcBuild />
      </div>
    );
};

export default PCBuildPage;

PCBuildPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}
