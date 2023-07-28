import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
  return (
   <Link href={`products/${product?._id}`}>
    <div className="p-4 rounded-lg bg-white shadow-gray-500  hover:shadow-2xl transition-all">
      <Image src={product.image} alt={product.name} width={100} height={150}  className="mb-4 w-full h-64 object-fit" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.category}</p>
     
      <p className={`mt-2 ${product.status === true ? 'text-green-600' : 'text-red-600'}`}>
        {product.status  === true ? 'In Stock':'Out of Stock'}
      </p>
      <p className="text-green-600 font-semibold mt-1">Price: ${product.price}</p>
      <div className="flex items-center mt-2">
        <p className="text-yellow-500">{Array.from({ length: product.averageRating }).map((_, index) => '⭐')}</p>
        <p className="ml-2 text-gray-500">({product.rating} Stars)</p>
      </div>
     
    </div>
   </Link>
  );
};

export default ProductCard;
