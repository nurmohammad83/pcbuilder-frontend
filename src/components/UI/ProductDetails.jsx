import { StarFilled } from "@ant-design/icons";
import { Divider } from "antd";

const ProductDetails = ({ product }) => {
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex w-[50%] justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover"
          />
        </div>
        <div className="my-4">

          <p className="text-gray-500 mb-2">{product.category}</p>
          <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
          <p className={`${product.status === true ? 'text-green-600' : 'text-red-600'} mb-2`}>
            {product.status ? "In Stock" : "Out of Stock"}
          </p>
          <p className="text-2xl font-bold mb-2">${product.price}</p>

          <h3 className="text-lg font-bold mb-2">Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
      <Divider>Features</Divider>
      <div className="my-4">
        <h3 className="text-lg font-bold mb-2">Key Features</h3>
        <ul className="list-disc pl-6">
          {product.keyFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-bold mb-2">Individual Rating</h3>
        <div className="flex items-center">
          <StarFilled className="text-yellow-500 mr-1" />
          <p>{product.individualRating}</p>
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-bold mb-2">Average Rating</h3>
        <div className="flex items-center">
          <StarFilled className="text-yellow-500 mr-1" />
          <p>{product.averageRating}</p>
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-lg font-bold mb-2">Reviews</h3>
        <ul className="list-disc pl-6">
          {product.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
