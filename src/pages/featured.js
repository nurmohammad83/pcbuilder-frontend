import RootLayout from "@/components/Layout/RootLayout"
import React from 'react';
import { Row, Col, Card } from 'antd';
import Head from "next/head";
import Link from "next/link";
import { featuredCategories } from "@/utils";

const Featured = () => {
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
          {featuredCategories.map((category) => (

            <Col key={category.label} xs={24} sm={24} md={12} lg={8}>
              <Link href={`categories/${category.key}`} >
                <Card bordered={false} className="flex justify-center items-center">
                  <div className="flex items-center justify-center">
                    <img src={category.image} alt={category.label} className="w-24 h-24 object-cover" />
                  </div>
                  <div className="featured-category-name text-center font-medium pt-3 text-lg">{category.label}</div>
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