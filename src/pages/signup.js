import { Button, Form, Input } from "antd";
import { GoogleOutlined, GithubOutlined, UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";
import { useRouter } from "next/router";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { loginUser } from "@/utils/helper";
const SignUp = () => {
    const [form] = Form.useForm()
    const [submitError, setSubmitError] = useState('')
    const router = useRouter()
    const onFinish =async (values) => {
        const postData = {
            name: values?.name,
            email: values?.email,
            password: values?.password
        }
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/users/create-user`, postData);
            if (response?.values?.success === true) {
                const logInRes = await loginUser({
                    email: postData?.email, 
                    password: postData?.password
                })
                form.resetFields();
                if(logInRes && !logInRes.ok){
                    setSubmitError(logInRes.error || '')
                }else{
                    router.push('/')
                }
            }
            reset()
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorMsg = error?.response?.values?.message
                setSubmitError(errorMsg)
            }
            console.error('Error posting values:', error);
        }
      };

    return (
        <div>
            <Head>
                <title>Extreme Pc | Sign Up</title>
                <link rel="icon" href="/Extreme.png" />
            </Head>
            <div className='md:w-[30%] sm:mx-24 mx-4  bg-gray-200 rounded-md p-[20px]  text-black md:mx-auto my-12' >
                <h3 className=" text-center">Sign Up</h3>

                <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
           <Form.Item
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
     <Input size="middle" placeholder="User Name" prefix={<UserOutlined />} />
    </Form.Item>
           <Form.Item
      label="Email"
      name="Email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
     <Input size="middle" placeholder="Email" prefix={<MailOutlined />} />
    </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} />
          </Form.Item>
          <p className="text-center">Already have an account ? <Link className="font-bold" href='/login'>LogIn</Link></p>
          <Form.Item  className="flex justify-center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
                <hr />
                <div className='text-center py-1'>
                    <GoogleOutlined className="text-4xl mr-5" onClick={() => signIn('google', {
                        callbackUrl: router.query.callbackUrl || '/',
                    })} />
                    <GithubOutlined className="text-4xl" onClick={() => signIn('github', {
                        callbackUrl: router.query.callbackUrl || '/',
                    })} />
                </div>
                <p className="text-red-600 font-semibold text-center">{submitError}</p>
            </div>
        </div>
    );
};

export default SignUp;

SignUp.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}


