import Link from "next/link";
import React from "react";
import { Button, Card, message } from "antd";
import { EyeOutlined, HeartFilled, StarFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addComponent } from "@/redux/pcSlice/pcSlice";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Image from "next/image";

const { Meta } = Card;
const ProductCard = ({ product }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();
  const handelWishList = () => {
    messageApi.warning({
      type: "info",
      content: "Featured coming soon",
    });
  };
  const handelAddComponent = (category) => {
    if (session?.user) {
      dispatch(addComponent({ category, product }));
      router.push("/pc_builder");
    } else {
      messageApi.warning({
        type: "warning",
        content: "Please Login!",
      });
    }
  };
  return (
    <>
      {contextHolder}
      <Card
        className="bg-white text-gray-700 min-h-[10rem] transform
transition duration-500 hover:scale-100 justify-center items-center shadow hover:shadow-2xl rounded-md overflow-hidden"
      >
        <Image
          width={800}
          height={600}
          className="w-full h-56 object-cover"
          layout="responsive"
          src={product?.image}
          alt=""
        />

        {/* Badge */}
        <div className="flex items-center my-3 gap-2">
          <span
            className={`${
              product?.status === true ? "text-blue-500" : "text-red-500"
            } px-3 py-1 rounded-full text-xs bg-gray-100`}
          >
            {product?.status === true ? "In Stock" : "Out of Stock"}
          </span>
          <span className=" px-3 py-1 rounded-full text-xs bg-gray-100">
            {product?.category}
          </span>
        </div>

        {/* Product Title */}
        <Meta
          className="font-semibold text-2xl overflow-ellipsis whitespace-nowrap"
          title={product?.name}
        />

        {/* price */}

        <div className="py-2">
          <span className="text-xl font-bold">${product?.price}</span>
        </div>
        {/* rating */}
        <span className="flex text-orange-500 items-center mt1">
          {Array.from({ length: product?.averageRating }).map((_, index) => (
            <StarFilled key={index} />
          ))}
        </span>
        {/* Button */}
        <div className="mt-5 flex flex-wrap gap-2">
          <Button
            size="middle"
            disabled={product?.status === false}
            onClick={() => handelAddComponent(product?.category)}
            className="bg-blue-500/80 flex-grow hover:bg-blue-600/90 border-none  rounded-md text-white font-medium tracking-wider transition"
          >
            Add To Build
          </Button>
          <Button
            onClick={() => handelWishList()}
            size="middle"
            className="flex-grow flex justify-center items-center bg-gray-300/50 hover:bg-gray-300/80 transition rounded-md"
          >
            <HeartFilled className="text-lg" />
          </Button>
          <Link
            className="flex-grow transition rounded-md flex justify-center items-center"
            href={`/products/${product?._id}`}
          >
            <Button
              size="middle"
              className=" bg-gray-300/50 w-full hover:bg-gray-300/80 "
            >
              <EyeOutlined className="text-lg" />
            </Button>
          </Link>
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
