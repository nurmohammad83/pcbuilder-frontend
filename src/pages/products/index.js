import RootLayout from "@/components/Layout/RootLayout"
import React, { useState } from 'react';
import axios from "axios";
import { Breadcrumb, Layout, Menu, Input, Button } from 'antd';
import Products from "@/components/UI/Products";
import Link from "next/link";
const { Content, Sider } = Layout;
const { Search } = Input;

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



const AllProducts = ({ products }) => {
  const [initialValue, setInitialValue] = useState(null)
  let content = null;
  if (initialValue) {
    const filterData = products.filter(p => p.category === initialValue)
    content = <Products products={filterData} />
  } else {
    content = <Products products={products} />
  }
  const handelCategoryData = (data) => {
    setInitialValue(data)
  }
  return (
    <div className="sm:flex">
      <div className=" hidden md:flex h-screen sticky top-8 w-72 flex-col justify-between border-e bg-white">
        <div className="px-4 w-72 py-6">
          <h1 className="text-center">Category</h1>

          <ul className="mt-6 p-0 space-y-1 flex flex-col">
            {
              items.map(i => (

                <Button block onClick={() => handelCategoryData(i.key)} key={i.key}><li className="list-none" >{i.key}</li></Button>

              ))
            }
          </ul>
        </div>
      </div>
      <div>
        {content}
      </div>
    </div>
  );
};
export default AllProducts;

AllProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}


export const getStaticProps = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/products`;
  try {
    const response = await axios.get(apiUrl);
    const categories = response.data;
    console.log(categories)
    return {
      props: {
        products: categories?.data?.data
      },
      revalidate: 3600, // 1 hour (3600 seconds)
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        products: [],
      },
    };
  }
}
