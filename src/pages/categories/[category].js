import RootLayout from "@/components/Layout/RootLayout"
import Head from "next/head"
import { useRouter } from "next/router"


const CategoryPage = () => {
    const router = useRouter()
    console.log(router.query.category)
    return (
        <div>
            <Head>
                <title>Categories${router?.query?.category}</title>
            </Head>
            <h1>
                CategoryPage
            </h1>
        </div>
    )
}
export default CategoryPage


CategoryPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}