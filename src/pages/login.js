import { Button } from "antd";
import { GoogleOutlined, GithubOutlined, FacebookOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import RootLayout from "@/components/Layout/RootLayout";
import { useRouter } from "next/router";
const LoginPage = () => {
  const router = useRouter()
  const currentPage = router.query.redirect
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <Head>
        <title>Next Login</title>
      </Head>
      <div className='md:w-[30%] sm:mx-24 mx-4 h-[400px] bg-gray-200 rounded-md p-[20px] text-center text-black md:mx-auto my-12' >
        <h3>LOGIN</h3>

        <form className="mt-5 p-5" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input className="w-full my-2 py-2 px-1 " type="email" {...register("email")} />
          <label htmlFor="">Your Password</label>
          <input className="w-full my-2 py-2 px-1 " type="password" {...register("password")} />
          <button  className="py-3 rounded px-6 font-bold cursor-pointer border-none bg-blue-600 text-white mt-5" type="submit">Login</button>
        </form>
        <hr />
        <div className=''>
          <GoogleOutlined className="text-4xl mr-5"  onClick={() => signIn('google', {
            callbackUrl:router.query.callbackUrl || '/',
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