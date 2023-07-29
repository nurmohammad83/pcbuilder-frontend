import RootLayout from "@/components/Layout/RootLayout"
import Banner from "@/components/UI/Banner"
import FeaturedCategory from "@/components/UI/FeaturedCategory"
import FeaturedProducts from "@/components/UI/FeaturedProducts"
import axios from "axios"
import Head from "next/head"

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="This is pc builder site  made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Extreme.png" />
      </Head>
      <Banner />
      <FeaturedCategory />
      <FeaturedProducts products={products} />
    </div>
  )
}
export default HomePage

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}

export async function getStaticProps() {

  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER_URL}/products`;
  try {
    const response = await axios.get(apiUrl);
    const products = response.data;
    return {
      props: {
        products: products
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
