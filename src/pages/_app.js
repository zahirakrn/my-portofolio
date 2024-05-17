import "@/styles/globals.css";
import { Header } from '@/components/header'
import Link from 'next/link'

export default function App({ Component, pageProps }) {
  return (
        <>
            <Header />
            <Component {...pageProps} />
        </>
    )
}
