import { blogs } from "@/utils";
import { Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const BlogPost = ({blogs}) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        {blogs.map((blog) => (
        <Link href={`/blog/${blog?.id}`} key={blog?.id}>
          <Card
            className="bg-white text-gray-700 min-h-[10rem] transform
            transition duration-500 hover:scale-100 justify-center items-center shadow hover:shadow-2xl rounded-md overflow-hidden"
          >
            <Image
              width={900}
              height={600}
              className="w-full h-56 object-fill"
              src={blog?.images[0]}
              alt=""
            />

            <div>
              <h1 className="text-2xl">
             {blog?.title[0]?.split(' ').slice(0, 60).join(' ')}
              </h1>
            </div>
            <div className="flex justify-between mt-4">
              <span className="font-semibold">by: {blog?.author}</span>
              <span>{blog?.publish_date}</span>
            </div>
          </Card>
        </Link>
        ))}
      </div>
    </div>
  );
};
export default BlogPost;
