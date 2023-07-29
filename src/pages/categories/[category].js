import RootLayout from "@/components/Layout/RootLayout"
import FeaturedProducts from "@/components/UI/FeaturedProducts"
import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"


const CategoryPage = ({products}) => {
    const router = useRouter()
    console.log(products)
    return (
        <div>
            <Head>
                <title>Categories/{router?.query?.category}</title>
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
    const categories = ['processor', 'motherboard', 'ram', 'Power Supply Unit', 'Mouse', 'Monitors'];
  const paths = categories.map((category) => ({
    params: { category },
  }));
  return { paths, fallback: false };
  }
  
  export async function getStaticProps({params}) {

    const apiUrl = `${process.env.NEXT_SERVER_URL}/products`; 
    try {
      const response = await axios.get(apiUrl);
      const categoryData = response.data; 
      const result = categoryData.filter((product)=>product?.category === params?.category)
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