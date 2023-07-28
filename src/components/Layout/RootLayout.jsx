import React from 'react';
import { Anchor ,Layout } from 'antd';
import Link from 'next/link';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
const { Header, Content, Footer } = Layout;
const { Link:AnchorLink } = Anchor;
const RootLayout= ({children}) => {

  return (
    <Layout className="layout container-fluid">
   <AppHeader />
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ padding: "0 24px",
          minHeight: "100vh",}}>
          {children}
        </div>
      </Content>
     <AppFooter />
    </Layout>
  );
};

export default RootLayout