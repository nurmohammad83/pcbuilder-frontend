/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input } from "antd";
import { GoogleOutlined, GithubOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";
import { useRouter } from "next/router";
import Link from "next/link";



const LoginPage = () => {
  const router = useRouter()
  const [form] = Form.useForm()

  const onFinish = (values) => {
    signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: '/'
    })
    form.resetFields();
  };

  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/Extreme.png" />
      </Head>
      <div className='md:w-[30%] sm:mx-24 mx-4  bg-gray-200 rounded-md p-[20px] text-center text-black md:mx-auto my-12' >
        <h3>LOGIN</h3>

        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
         
          autoComplete="on"
        >
           <Form.Item
      label="Email"
      name="Email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
     <Input size="middle" placeholder="Email" prefix={<UserOutlined />} />
    </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>
    <p>Don't have an account ? <Link className="font-bold" href='/signup'>SignUp</Link></p>
          <Form.Item  className="flex justify-center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <hr />
        <div className=''>
          <GoogleOutlined className="text-4xl mr-5" onClick={() => signIn('google', {
            callbackUrl: router.query.callbackUrl || '/',
          })} />
          <GithubOutlined className="text-4xl" onClick={() => signIn('github', {
            callbackUrl: router.query.callbackUrl || '/',
          })} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}