import MainMenu from '../components/MainMenu'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <MainMenu/>
    <Component {...pageProps} />
    </>
  
  )
}
