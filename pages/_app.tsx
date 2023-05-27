import MainMenu from '../components/MainMenu'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Beni Yenemezsin</title>
    </Head>
    <MainMenu/>
    <Component {...pageProps} />
    </>
  
  )
}
