import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Pontano_Sans, Montserrat, Jost } from 'next/font/google'
const pontano = Pontano_Sans({ subsets: ['latin'], variable: '--font-pontano' })
const jost = Jost({ subsets: ['latin'], variable: '--font-jost' })


export default function App({ Component, pageProps }: AppProps) {
  return <main className={` ${pontano.variable} ${jost.variable}`}>
    <Component {...pageProps} />
  </main>
}
