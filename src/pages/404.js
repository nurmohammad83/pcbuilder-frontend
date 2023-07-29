// pages/404.js
import React,{} from 'react';
import { Result, Button } from 'antd';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <Result
    className='min-h-screen'
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link href="/">
          <Button type="primary">Back to Home</Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
