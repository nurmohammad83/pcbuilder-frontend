import React from 'react';
import { Anchor ,Layout } from 'antd';
import Link from 'next/link';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
const { Header, Content, Footer } = Layout;
const { Link:AnchorLink } = Anchor;
const RootLayout= ({children}) => {

  return (
    <Layout className="">
   <AppHeader />
      <Content >
        <div className="site-layout-content px-2 sm:px-14" >
          {children}
        </div>
      </Content>
     <AppFooter />
    </Layout>
  );
};

export default RootLayout