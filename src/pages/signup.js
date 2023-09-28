import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import { signIn } from "next-auth/react";
import RootLayout from "@/components/Layout/RootLayout";
import { useRouter } from "next/router";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { loginUser } from "@/utils/helper";
import { useState } from "react";
const SignUp = () => {
  const [submitError,setSubmitError] = useState()
    const router = useRouter()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const postData = {
             name:data?.name,
             email: data?.email,
             password: data?.password
        }
        try {
            const response = await axios.post(`https://backend-nine-beta.vercel.app/api/v1/users/create-user`, postData);
            if (response?.data?.success === true) {
                const logInRes = await loginUser({
                    email: postData?.email, 
                    password: postData?.password
                })
                if(logInRes && !logInRes.ok){
                    setSubmitError(logInRes.error || '')
                }else{
                    router.push('/')
                }
            }
            reset()
        } catch (error) {
            if (error instanceof AxiosError) {
                const errorMsg = error?.response?.data?.message
                setSubmitError(errorMsg)
            }
            console.error('Error posting data:', error);
        }
    }

    return (
        <div>
        <Head>
          <title>Signup</title>
          <link rel="icon" href="/Extreme.png" />
        </Head>
        <div className='md:w-[30%] sm:mx-24 mx-4  bg-gray-200 rounded-md p-[20px] text-center text-black md:mx-auto my-12' >
          <h3 className="text-xl sm:text-2xl">SIGN UP</h3>
  
          <form className="flex justify-center flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
            <label className="text-base text-left font-medium" htmlFor=""> Name</label>
            <input className="text-black placeholder:text-gray-400 border-none rounded-md" placeholder="Enter Your Name" type="text" {...register("name",{
                  required: "Name is required",
                })}/>
                {errors.name && (
                <p className="text-red-400 m-0" role="alert">
                  {errors.name?.message}
                </p>
              )}
            <label className="text-base text-left font-medium" htmlFor=""> Email</label>
            
            <input className="text-black border-none placeholder:text-gray-400 rounded-md" placeholder="Enter Your Email" type="email" {...register("email",{
                  required: "Email is required",
                })}/>
            {errors.email && (
                <p className="text-red-400 m-0" role="alert">
                  {errors.email?.message}
                </p>
              )}
            <label className="text-base text-left font-medium" htmlFor=""> Password</label>
            <input  className="text-black placeholder:text-gray-400 border-none rounded-md" placeholder="Enter Your Password" type="password" {...register("password",{
                  required: "Password is required",
                })} />
                 {errors.password && (
                <p className="text-red-400 m-0" role="alert">
                  {errors.password?.message}
                </p>
              )}
            <span className="text-right">Already have an account?<Link className="text-blue-500" href='/login'> LogIn</Link></span>
            <button type="submit" className="border-none my-2 bg-blue-500 text-white font-semibold" style={{padding:'10px 15px',borderRadius:'15px',cursor:'pointer'}}>Sign Up</button>
          </form>
          <p className="text-red-500">{submitError}</p>
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

export default SignUp;

SignUp.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}


