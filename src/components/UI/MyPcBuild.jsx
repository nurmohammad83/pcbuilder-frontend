import React, { Fragment, useState } from "react";
import { Layout, Button, Card, Divider, message } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { removeComponent } from "@/redux/pcSlice/pcSlice";
import Image from "next/image";

const MyPcBuild = () => {
  const pc = useSelector((state) => state.pc);
  const dispatch = useDispatch();
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.open({
      type: "success",
      content: "Your Pc Build Successfully",
    });
    dispatch(removeComponent());
  };

  const isCompleteBuildEnabled = () => {
    const pCounts = Object.values(pc).reduce(
      (total, categoryproduct) => total + categoryproduct.length,
      0
    );
    return pCounts >= 5;
  };

  return (
    <Layout>
      {contextHolder}
      <div className="px-5 md:px-16">
        <div className="text-center">
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            PC Builder
          </h1>
          <p>Build Your Own Computer</p>
        </div>
        {Object.entries(pc).map(([category, product]) => (
          <Card key={category} style={{ marginBottom: "1rem" }}>
            <div>
              <div>
                <div className="flex w-full items-center space-x-2 sm:space-x-4">
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className=" text-base uppercase sm:text-lg font-semibold sm:pr-8">
                          {category}
                        </h3>
                        <p className="text-sm bg-gray-400 h-4 w-36 md:w-56"></p>
                      </div>
                      <div className="mt-5 sm:text-right">
                        <Link href={`/categories/${category}`}>
                          <button className="py-3 cursor-pointer px-10 rounded-md bg-blue-500 border-none text-white">
                            Choose
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {product.map((p) => (
                <Fragment key={p._id}>
                  <Divider />
                  <div className="flex  w-full items-center space-x-2 sm:space-x-4">
                    <div className="w-24 h-24">
                      <Image
                        src={p?.image}
                        alt="Image description"
                        width={300}
                        height={200}
                        layout="responsive"
                        className="w-full h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <p className="text-sm uppercase text-gray-400">
                            {p?.category}
                          </p>
                          <h3 className="text-base sm:text-lg sm:font-semibold sm:pr-8">
                            {p?.name}
                          </h3>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">${p?.price}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              ))}
            </div>
          </Card>
        ))}

        <div className="flex py-5 justify-center">
          <Button
            type="primary"
            size="large"
            disabled={!isCompleteBuildEnabled()}
            onClick={info}
          >
            Complete Build
          </Button>
        </div>
      </div>
    </Layout>
  );
};
export default MyPcBuild;
