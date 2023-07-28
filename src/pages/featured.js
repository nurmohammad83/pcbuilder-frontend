import RootLayout from "@/components/Layout/RootLayout"
import React from 'react';
import { Row, Col, Card } from 'antd';
import Head from "next/head";
import Link from "next/link";

const featuredCategories = [
  { name: 'Processor', image: 'https://www.pcstudio.in/wp-content/uploads/2021/04/processor-caticon.svg' },
  { name: 'Motherboard', image: 'https://www.pcstudio.in/wp-content/uploads/2021/04/motherboard-caticon.svg' },
  { name: 'RAM', image: 'https://www.pcstudio.in/wp-content/uploads/2021/04/ram-caticon.svg' },
  { name: 'Power Supply Unit', image: 'https://www.pcstudio.in/wp-content/uploads/2021/04/powersupply-caticon.svg' },
  { name: 'Mouse', image: 'https://www.pcstudio.in/wp-content/uploads/2021/04/mouse-caticon.svg' },
  { name: 'Monitor', image: 'https://www.pcstudio.in/wp-content/uploads/2021/04/monitor-caticon.svg ' },
];
const Featured = () => {
  return (
    <>
      <Head>
        <title>Featured</title>
      </Head>
      <div className="py-12">
        <Row gutter={[16, 16]}>
          {featuredCategories.map((category) => (

            <Col key={category.name} xs={24} sm={24} md={12} lg={8}>
              <Link href={`categories/${category.name}`} >
                <Card bordered={false} className="flex justify-center items-center">
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