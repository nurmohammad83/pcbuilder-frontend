/* eslint-disable react/no-unescaped-entities */
import { Button, Form, Input } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";
import { useForm } from "react-hook-form";
import Link from "next/link";

const LoginPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: '/'
    })
    reset()
  }


  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/Extreme.png" />
      </Head>
      <div className='md:w-[30%] sm:mx-24 mx-4  bg-gray-200 rounded-md p-[20px] text-center text-black md:mx-auto my-12' >
        <h3 className="text-xl sm:text-2xl">LOGIN</h3>

        <form className="flex justify-center flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
          <label className="text-base text-left font-medium" htmlFor=""> Email</label>

          <input className="text-black placeholder:text-gray-400 border-none rounded-md" placeholder="Enter Your Email" type="email" {...register("email", {
            required: "Email is required",
          })} />
          {errors.email && (
            <p className="text-red-400 m-0" role="alert">
              {errors.email?.message}
            </p>
          )}
          <label className="text-base text-left font-medium" htmlFor=""> Password</label>
          <input className="text-black placeholder:text-gray-400 border-none rounded-md" placeholder="Enter Your Password" type="password" {...register("password", {
            required: "Password is required",
          })} />
          {errors.password && (
            <p className="text-red-400 m-0" role="alert">
              {errors.password?.message}
            </p>
          )}
          <span className="text-right">Create an account?<Link className="text-blue-500" href='/signup'> SignUp</Link></span>
          <button type="submit" className="border-none my-2 bg-blue-500 text-white font-semibold" style={{ padding: '10px 15px', borderRadius: '15px', cursor: 'pointer' }}>Login</button>
        </form>
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