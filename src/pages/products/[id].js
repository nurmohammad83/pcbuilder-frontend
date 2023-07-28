import RootLayout from "@/components/Layout/RootLayout";
import ProductDetails from "@/components/UI/ProductDetails";
import axios from "axios";

const ProductDetailsPage = ({ product }) => {
    console.log(product)
    return (
      <div>
        <ProductDetails product={product} />
      </div>
    );
  };
  
  export default ProductDetailsPage;

  ProductDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
  }

  export const getStaticPaths = async () => {
    const apiUrl = 'http://localhost:4000/products';
    try {
      const response = await axios.get(apiUrl);
      const products = response.data;
      const paths = products?.map((product) => ({
        params: { id: product._id },
        
      }));
  
      return {
        paths,
        fallback: false, 
      };
    } catch (error) {
      console.error('Error fetching product IDs:', error);
      return {
        paths: [],
        fallback: false,
      };
    }
  }
  
  export const  getStaticProps= async({ params })=> {
    console.log(params.id)
    const apiUrl = `http://localhost:4000/product/${params?.id}`; 
    try {
      const response = await axios.get(apiUrl);
      const product = response.data;
      return {
        props: {
          product:product
        },
      };
    } catch (error) {
      console.error('Error fetching product data:', error);
      return {
        props: {
          product: {},
        },
      };
    }
  }