
import React, { useState } from 'react';
import { Layout, Select, Button, Card } from 'antd';
import { featuredCategories } from '@/utils';
import Link from 'next/link';

const MyPcBuild = () => {
   

  return (
    <Layout>
    <div style={{ padding: '1rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>PC Builder</h1>
        {featuredCategories.map((category) => (
            <Card key={category.key} style={{ marginBottom: '1rem' }}>
                <div>
                    <div className="flex w-full items-center space-x-2 sm:space-x-4">
                        <img className=" object-cover w-16 h-16 sm:w-20 md:h-20 rounded outline-none" src={category.image} alt="Polaroid camera" />
                        <div className="flex flex-col justify-between w-full pb-4">
                            <div className="flex flex-col sm:flex-row items-center justify-between w-full pb-2 space-x-2">
                                <div className="space-y-1">
                                    <h3 className=" text-base sm:text-lg font-semibold leadi sm:pr-8">{category.label}</h3>
                                    <p className="text-sm bg-gray-400 h-4 w-36 md:w-56"></p>
                                </div>
                                <div className="mt-5 sm:text-right">
                                    <Link href={`/categories/${category.key}`}>
                                        <button className='py-3 cursor-pointer px-10 rounded-md bg-blue-500 border-none text-white'>Add</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="flex mt-5 w-full space-x-2 sm:space-x-4">
        <img className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="Polaroid camera" />
        <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
                <div className="space-y-1">
                    <h3 className="text-lg font-semibold leadi sm:pr-8">Polaroid camera</h3>
                    <p className="text-sm dark:text-gray-400">Classic</p>
                </div>
                <div className="text-right">
                    <p className="text-lg font-semibold">59.99€</p>
                    <p className="text-sm line-through dark:text-gray-600">75.50€</p>
                </div>
            </div>
        </div>
    </div> */}
                </div>
            </Card>
        ))}
        <Button type="primary" style={{ width: '100%' }}>
            Build PC
        </Button>
    </div>
</Layout>
  )
}
export default MyPcBuild