import { addComponent } from "@/redux/pcSlice/pcSlice";
import { StarFilled } from "@ant-design/icons";
import { Button, Divider, Tabs, message } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import Wrapper from "./Wrapper";

const ProductDetails = ({ product }) => {
  const items = [
    {
      key: "1",
      label: `Features`,
      children: (
        <div className="my-4">
          <h3 className="text-lg font-bold mb-2">Key Features</h3>
          <ul className="list-disc pl-6">
            {product?.keyFeatures?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      key: "2",
      label: `Reviews`,
      children: (
        <div className="my-4">
          <h3 className="text-lg font-bold mb-2">Reviews</h3>
          <ul className="list-disc pl-6">
            {product?.reviews?.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      key: "3",
      label: `Rating`,
      children: (
        <>
          <div className="my-4">
            <h3 className="text-lg font-bold mb-2">Individual Rating</h3>
            <div className="flex items-center">
              <StarFilled className="text-yellow-500 mr-1" />
              <p>{product?.individualRating}</p>
            </div>
          </div>
          <div className="my-4">
            <h3 className="text-lg font-bold mb-2">Average Rating</h3>
            <div className="flex items-center">
              <StarFilled className="text-yellow-500 mr-1" />
              <p>{product?.averageRating}</p>
            </div>
          </div>
        </>
      ),
    },
  ];

  const [messageApi, contextHolder] = message.useMessage();
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const router = useRouter();

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
      <div className="w-full md:py-16">
        <Wrapper>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex relative z-20 w-[50%] justify-center">
              <div className="bg-white m-16">
                <div className="absolute bg-gradient-to-r from-[#a3f4e6] to-[#6deccf] w-[10rem] md:w-[28rem] h-[5rem] md:h-[14rem] top-[20%] left-[1%] rounded-3xl -z-10 blur-[120px]"></div>
                <Image
                  width={800}
                  height={600}
                  src={product?.image}
                  alt={product?.name}
                  className="w-72 h-72 object-cover"
                />
              </div>
            </div>
            <div className="my-4 w-full  md:w-[50%]">
              <span className="text-gray-800 mb-2">{product?.category}</span>
              <h2 className="text-2xl font-bold mb-2">{product?.name}</h2>
              <p
                className={`${
                  product?.status === true ? "text-green-500" : "text-red-600"
                } font-semibold mb-2`}
              >
                {product?.status ? "In Stock" : "Out of Stock"}
              </p>
              <p className="text-2xl font-bold mb-2">${product?.price}</p>
              <span className="flex text-2xl text-orange-400 items-center mt1">
                {Array.from({ length: product?.averageRating }).map(
                  (_, index) => (
                    <StarFilled key={index} />
                  )
                )}
              </span>
              <h3 className="text-lg font-bold mb-2">Description</h3>
              <p>{product?.description}</p>

              <Button
                disabled={product?.status === false}
                onClick={() => handelAddComponent(product?.category)}
                type="primary"
                block
                size="large"
              >
                Add To Build
              </Button>
            </div>
          </div>
          <Divider>Details</Divider>
          <div className="p-0  sm:px-16">
            <Tabs defaultActiveKey="1" items={items} />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default ProductDetails;
