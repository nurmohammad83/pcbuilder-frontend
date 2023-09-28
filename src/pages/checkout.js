
import Head from 'next/head';
import CheckoutCom from '@/components/UI/CheckoutCom';
import RootLayout from '@/components/Layout/RootLayout';

const Checkout = () => {

  return (
    <div>
        <Head>
        <Head>
        <title>Checkout</title>
      </Head>
        </Head>
       <CheckoutCom />
    </div>
  );
};

export default Checkout;
Checkout.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
  }