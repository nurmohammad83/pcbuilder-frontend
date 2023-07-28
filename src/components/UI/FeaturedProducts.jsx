import ProductCard from "./ProductCard"

const FeaturedProducts = ({products}) => {
  return (
    <div className="px-3">
      <h1 className="text-center py-2 sm:py-5 font-poppins text-2xl" >Featured Products</h1>
      <div className=" mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products?.map((product) => (
        <ProductCard key={product?._id} product={product} />
      ))}
    </div>
    </div>
  )
}
export default FeaturedProducts