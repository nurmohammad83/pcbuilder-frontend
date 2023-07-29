
import Link from 'next/link';
import React from 'react';
import {  Button, Card ,message } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addComponent } from '@/pages/redux/pcSlice/pcSlice';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const { Meta } = Card;
const ProductCard = ({ product }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const {data:session}= useSession()
  const dispatch = useDispatch()
  const router = useRouter()
  const handelAddComponent = (category)=>{
   if(session?.user){
    dispatch(addComponent({category, product }))
    router.push('/pc_builder')
   }else{
    messageApi.warning({
      type: 'warning',
      content: 'Please Login!',
    });
   }
  }
  return (
 
  <>
  {contextHolder}
   <Card className='relative hover:shadow-2xl transition-all -z-0'>
   <div className="rounded-lg  ">
   <Link href={`/products/${product?._id}`}>
   <img src={product?.image} alt={product?.name}  className="mb-4 w-full h-64 object-fit" />
   </Link>
     
    <Link href={`/products/${product?._id}`}> <Meta className='text-lg' title={product?.name}/></Link>
      <p className="text-gray-500">{product?.category}</p>
     
      <p className={`mt-2 ${product?.status === true ? 'text-green-600' : 'text-red-600'}`}>
        {product?.status  === true ? 'In Stock':'Out of Stock'}
      </p>
      <p className="text-green-600 font-semibold mt-1">Price: ${product?.price}</p>
      <div className="flex items-center mt-2">
        <p className="text-yellow-500">{Array.from({ length: product?.averageRating }).map((_, index) => <StarFilled key={index} />)}</p>
        <p className="ml-2 text-gray-500">({product?.rating} Stars)</p>
      </div>
      
     <Button disabled={product?.status  === false} onClick={()=>handelAddComponent(product?.category)} className={`absolute right-6 overflow-hidden bottom-4 ${product?.status  === false?'bg-gray-200':'bg-blue-500'} text-white z-10`}>Add To Build</Button>
      
    </div>
   </Card>
  </>
  );
};

export default ProductCard;
