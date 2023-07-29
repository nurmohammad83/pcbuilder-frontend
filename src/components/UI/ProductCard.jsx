
import Link from 'next/link';
import React from 'react';
import {  Button, Card } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addComponent } from '@/pages/redux/pcSlice/pcSlice';
import { useRouter } from 'next/router';

const { Meta } = Card;
const ProductCard = ({ product }) => {

  return (
 
   <Card className='' hoverable>
   <div className="rounded-lg  transition-all">
      <img src={product?.image} alt={product?.name}  className="mb-4 w-full h-64 object-fit" />
     <Meta className='text-lg' title={product?.name}/>
      <p className="text-gray-500">{product?.category}</p>
     
      <p className={`mt-2 ${product?.status === true ? 'text-green-600' : 'text-red-600'}`}>
        {product?.status  === true ? 'In Stock':'Out of Stock'}
      </p>
      <p className="text-green-600 font-semibold mt-1">Price: ${product?.price}</p>
      <div className="flex items-center mt-2">
        <p className="text-yellow-500">{Array.from({ length: product?.averageRating }).map((_, index) => <StarFilled key={index} />)}</p>
        <p className="ml-2 text-gray-500">({product?.rating} Stars)</p>
      </div>
      
    <div className='flex justify-between'>
    <Link href={`/products/${product?._id}`}> <Button type='primary' className=' bg-blue-500 text-white '>Add To Builder</Button></Link>
    <Link href='/featured'> <Button type='primary' className=' bg-blue-500 text-white '>Add To Builder</Button></Link>
    </div>
      
    </div>
   </Card>

  );
};

export default ProductCard;
