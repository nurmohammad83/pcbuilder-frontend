// components/Footer.js

import { FacebookFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';
import { Layout } from 'antd';
import Link from 'next/link';

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#f0f0f0' }}>
     <h2 className="text-black bg-gradient-to-r from-blue-700 text-transparent bg-clip-text to-green-500 uppercase cursor-pointer">
          ALPHA PC
        </h2>
      <p style={{ margin: '0', fontSize: '14px', color: '#888' }}>
        © 2023 Extreme PC. All rights reserved.
      </p>
      <div className='flex gap-4 justify-center py-4'>
        <Link href='https://web.facebook.com/nurmohammad54800'>
        <FacebookFilled  className='text-2xl text-blue-600'/>
        </Link>
       <Link href='https://github.com/nurmohammad83' >
       <GithubFilled className='text-2xl text-gray-500'/>
       </Link>
       <Link href='https://www.linkedin.com/in/nur-mohammad-0a1137259/'>
       
       <LinkedinFilled  className='text-2xl text-blue-600'/></Link>
      </div>
    </Footer>
  );
};

export default AppFooter;
