import RootLayout from "@/components/Layout/RootLayout"
import React from 'react';
import { Row, Col, Card } from 'antd';
import Head from "next/head";
import Link from "next/link";
import { featuredCategories } from "@/utils";


const FeaturedCategory = () => {
  return (
    <>
      <Head>
        <title>Featured</title>
      </Head>
      <div className="py-12">
        <Row gutter={[16, 16]}>
          {featuredCategories?.slice(0,3).map((category) => (

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
export default FeaturedCategory
