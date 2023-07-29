import { Button } from "antd"
import ProductCard from "./ProductCard"
import { useRouter } from "next/router"

const FeaturedProducts = ({products}) => {
  const router = useRouter()
  console.log(router.asPath)
  let content = null;
  if(router.asPath === '/'){
     content =  <div className="px-5 md:px-16">
     <div className="py-5">
      <h1 className="text-center font-poppins text-2xl">
         Featured Product
       </h1>
       <p className="text-center text-sm font-poppins font-thin">We offer you the expertise and resources to create your perfect PC</p>
      </div>
     <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
     {products?.slice(0,6).map((product) => (
     <ProductCard key={product?._id} product={product} />
   ))}
   </div>
   </div>
  }else{
    content =  <div className="px-5 md:px-16">
    <div className="py-5">
     <h1 className="text-center font-poppins text-2xl">
        Product
      </h1>
      <p className="text-center text-sm font-poppins font-thin">We offer you the expertise and resources to create your perfect PC</p>
     </div>
    <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {products?.map((product) => (
    <ProductCard key={product?._id} product={product} />
  ))}
  </div>
  </div>
  }
  return content
}
export default FeaturedProducts