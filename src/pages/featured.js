import RootLayout from "@/components/Layout/RootLayout"
import React from 'react';
import { Row, Col, Card } from 'antd';
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

const Featured = ({categories}) => {
  return (
    <>
      <Head>
        <title>Featured</title>
        <link rel="icon" href="/Extreme.png" />
      </Head>
      <div className="text-center  py-2 sm:py-5">
        <h1 className="text-center  font-poppins text-2xl">
          Featured Category
        </h1>
        <p className="text-center">Get Your Desired Product from Featured Category!</p>
      </div>
      <div className="py-12 px-5 md:px-16">
        <Row gutter={[16, 16]}>
          {categories?.map((category) => (

            <Col key={category._id} xs={24} sm={24} md={12} lg={8}>
              <Link href={`categories/${category.name}`} >
                <Card  bordered={false} className="flex transform
                                transition duration-500 hover:scale-100 justify-center items-center shadow hover:shadow-2xl">
                  <div className="flex items-center justify-center">
                    <img src={category.image} alt={category.name} className="w-24 h-24 object-cover" />
                  </div>
                  <div className="featured-category-name text-center font-medium pt-3 text-lg">{category.name}</div>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </>
  )
}
export default Featured


Featured.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}


export const getStaticProps = async () => {
  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/categories`; 
  try {
    const response = await axios.get(apiUrl);
    const categories = response.data; 
    return {
      props: {
        categories: categories?.data
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