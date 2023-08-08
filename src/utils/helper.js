const { signIn } = require("next-auth/react")

export const loginUser = async ({email,password})=>{
    const res = await signIn("credentials",{
        email,
        password,
        redirect:false,
    })
    return res;
}

export const  truncateTitle =(title, wordCount)=> {
    const words = title.split(' ');
    const truncatedTitle = words.slice(0, wordCount).join(' ');
    return truncatedTitle;
  }