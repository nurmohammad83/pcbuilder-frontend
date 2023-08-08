import RootLayout from "@/components/Layout/RootLayout";
import ProductDetails from "@/components/UI/ProductDetails";
import axios from "axios";
import Head from "next/head";

const ProductDetailsPage = ({ product }) => {
    return (
      <div>
         <Head>
                <title>Product</title>
                <link rel="icon" href="/Extreme.png" />
            </Head>
        <ProductDetails product={product} />
      </div>
    );
  };
  
export default ProductDetailsPage;

  ProductDetailsPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
  }

  export const getStaticPaths = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/products`;
    try {
      const response = await axios.get(apiUrl);
      const products = response?.data;
      const paths = products?.data?.data?.map((product) => ({
        params: { id: product?._id },
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

    const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/products/${params?.id}`; 
    try {
      const response = await axios.get(apiUrl);
      const product = response?.data;
      return {
        props: {
          product:product?.data
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