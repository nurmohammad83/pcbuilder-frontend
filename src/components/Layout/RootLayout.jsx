import React from 'react';
import { Anchor ,Layout } from 'antd';
import Link from 'next/link';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
const { Header, Content, Footer } = Layout;
const RootLayout= ({children}) => {

  return (
    <Layout className=''>
   <AppHeader />
      <Content className='min-h-screen'>
        <div className="site-layout-content" >
          {children}
        </div>
      </Content>
     <AppFooter />
    </Layout>
  );
};

export default RootLayout