import RootLayout from "@/components/Layout/RootLayout"
import FeaturedProducts from "@/components/UI/FeaturedProducts"
import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"


const CategoryPage = ({products}) => {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>Categories/{router?.query?.category}</title>
                <link rel="icon" href="/Extreme.png" />
            </Head>
            <h1>
                 <FeaturedProducts products={products}/>
            </h1>
        </div>
    )
}
export default CategoryPage


CategoryPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}

  export const getStaticPaths = async () => {
    const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/categories`; 
    try {
      const response = await axios.get(apiUrl);
      const categories = response.data; 
      const paths = categories?.data?.map((category) => ({
        params: { category:category?.name },
      }));
      return { paths, fallback: false };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          categories: [],
        },
      };
    }
  
  }
  
  export async function getStaticProps({params}) {

    const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/products`; 
    try {
      const response = await axios.get(apiUrl);
      const categoryData = response.data; 
      const result = categoryData?.data?.data?.filter((product)=>product?.category === params?.category)
      return {
        props: {
          products:result
        },
        revalidate: 3600, // 1 hour (3600 seconds)
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        props: {
          products: [],
        },
      };
    }
  }