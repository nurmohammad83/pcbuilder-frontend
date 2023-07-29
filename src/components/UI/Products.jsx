import { Col, Row } from "antd"
import ProductCard from "./ProductCard"

const Products = ({products}) => {
  return (
    <div className="px-5 md:px-16">
<div className="text-center flex items-center justify-center py-2 sm:py-5">
       <div>
       <h1 className="text-center  font-poppins text-2xl">
          Featured Product
        </h1>
        <p className="text-center">We offer you the expertise and resources to create your perfect PC</p>
       </div>
   </div>
      <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
    </div>
  )
}
export default Products