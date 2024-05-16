import { Metadata } from 'next';
import { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';

export const metadata: Metadata = {
  title: 'Frontend Release Manager',
  description: 'A manager for frontend releases',
};

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
