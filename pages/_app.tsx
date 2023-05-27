import MainMenu from '../components/MainMenu'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Beni Yenemezsin</title>
      <meta property="twitter:image" content="../public/logo.png"></meta>
      <meta property="twitter:card" content="../public/logo.png"></meta>
      <meta property="twitter:title" content="Beni Yenemezsin"></meta>
      <meta property="twitter:description" content="Sıra tabanlı matematik oyunu. 0 veya -1 olan kaybeder."></meta>
      <meta property="description" content="Sıra tabanlı matematik oyunu. 0 veya -1 olan kaybeder." />
      <meta property="og:image" content="../public/logo.png"></meta>
      <meta property="og:title" content="Beni Yenemezsin"></meta>
      <meta property="og:description" content="Sıra tabanlı matematik oyunu. 0 veya -1 olan kaybeder."/>
      <meta property="og:url" content="https://beniyenemezsin.vercel.app"></meta>
    </Head>
    <MainMenu/>
    <Component {...pageProps} />
    </>
  
  )
}
