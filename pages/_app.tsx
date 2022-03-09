import '../styles/globals.css'
import '../styles/footer.css'
import '../styles/bootstrap/css/bootstrap.min.css'
import type { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </UserProvider>
  )
}

export default MyApp
