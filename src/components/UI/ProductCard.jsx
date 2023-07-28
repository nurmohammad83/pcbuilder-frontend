
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {  Button, Card } from 'antd';

const { Meta } = Card;
const ProductCard = ({ product }) => {
  return (
   <Link href={`/products/${product?._id}`}>
   <Card className='relative -z-0' hoverable>
   <div className="p-4 rounded-lg  transition-all">
      <Image src={product?.image} alt={product?.name} width={100} height={150}  className="mb-4 w-full h-64 object-fit" />
     <Meta className='text-lg' title={product?.name}/>
      <p className="text-gray-500">{product?.category}</p>
     
      <p className={`mt-2 ${product?.status === true ? 'text-green-600' : 'text-red-600'}`}>
        {product?.status  === true ? 'In Stock':'Out of Stock'}
      </p>
      <p className="text-green-600 font-semibold mt-1">Price: ${product?.price}</p>
      <div className="flex items-center mt-2">
        <p className="text-yellow-500">{Array.from({ length: product?.averageRating }).map((_, index) => '⭐')}</p>
        <p className="ml-2 text-gray-500">({product?.rating} Stars)</p>
      </div>
      

     <Button className='absolute right-6 bottom-4 bg-blue-500 text-white z-10'>Add To Builder</Button>
     
    </div>
   </Card>
   </Link>
  );
};

export default ProductCard;
