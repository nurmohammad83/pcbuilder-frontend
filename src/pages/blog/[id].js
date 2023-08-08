/* eslint-disable react/no-unescaped-entities */
import RootLayout from "@/components/Layout/RootLayout";
import { blogs } from "@/utils";
import { Button, Divider } from "antd";
import Image from "next/image";
const items = [
    {
        key: "Processor",
    },
    {
        key: "Motherboard",

    },
    { key: "Ram", link: '/' },
    {
        key: "Power Supply Unit",
    },
    {
        key: "Monitors",
    },
    {
        key: "Storage Device",
    },
    {
        key: "Mouse",
    },
    {
        key: "Keyboard",
    },
]
const BlogDetails = ({ blog }) => {
    return (
        <div className="px-5 bg-[#ebf4fa] py-5 sm:py-16 flex gap-8 sm:px-16">

            <div className="bg-white/95 p-5">
                <Image
                    width={900}
                    height={900}
                    className="w-full h-96 object-fill"
                    src={blog?.images[0]}
                    alt=""
                />
                <div>
                    <h1 className="text-2xl text-blue-500">{blog?.title[0]}</h1>
                    <div className="flex py-3 items-center gap-x-2">
                    <Image src='https://res.cloudinary.com/dyy4n4fmh/image/upload/v1679461420/samples/people/smiling-man.jpg' alt="author" className="w-12 h-12 object-fill rounded-full" height={100} width={100} />
                        <div className="flex flex-col justify-center">
                            <span className="text-red-500 text-lg">{blog?.author}</span>
                            <span className="text-sm">{blog?.publish_date}</span>
                        </div>
                    </div>
                    <Divider className="py-5" />
                    <p className="text-gray-500 py-2 text-lg">{blog?.description}</p>

                    <div className="py-4">
                        <h1 className="text-2xl text-blue-500">{blog?.title[1]}</h1>
                        <p className="text-gray-500 py-2 text-lg">{blog?.subTitle[0]}</p>
                        <Image
                            width={900}
                            height={900}
                            className="w-full h-96 object-fill"
                            src={blog?.images[1]}
                            alt=""
                        />
                    </div>
                    <Divider/>
                    <div className="py-4">
                        <h1 className="text-2xl text-blue-500">{blog?.title[2]}</h1>
                        <p className="text-gray-500 py-2 text-lg">{blog?.subTitle[1]}</p>
                        <Image
                            width={900}
                            height={900}
                            className="w-full h-96 object-fill"
                            src={blog?.images[2]}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="hidden w-[30rem] lg:flex flex-col gap-8">
                <div className=" w-full h-80 bg-white rounded-md">
                    <div className="px-4 w-72 py-6">
                        <h1>Author</h1>
                        <Divider />
                        <div className="flex gap-x-2 items-center">
                            <Image src='https://res.cloudinary.com/dyy4n4fmh/image/upload/v1679461420/samples/people/smiling-man.jpg' alt="author" className="w-12 h-12 object-cover rounded-full" height={100} width={100} />

                            <span className="text-lg font-medium"><span className="text-red-400">Hello</span> I'm <br />
                                PC Builder</span>

                        </div>
                        <p>This blog is just started to help peoples in building their first PC with our awesome tutorials and reviews about the latest components.</p>
                    </div>
                </div>
                <div className=" w-full h-80 bg-white rounded-md">
                    <div className="px-4 w-72 py-6">
                        <h1 className="text-left">Category</h1>
                        <Divider />
                        <ul className="mt-6 flex-grow p-0 space-y-1">
                            {
                                items.map(i => (

                                    <Button href={`/categories/${i.key}`} className="mr-1" key={i.key}><li className="list-none mr-1" >{i.key}</li></Button>

                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogDetails


BlogDetails.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}


export const getStaticPaths = async () => {

    const paths = blogs?.map((blog) => ({
        params: { id: blog.id },
    }));
    return {
        paths,
        fallback: false,
    };

}

export const getStaticProps = async ({ params }) => {
    const blog = blogs.find(blog => blog.id === params.id)
    return {
        props: {
            blog
        },
    };

}
