import Head from 'next/head'
import Image from 'next/image'
import { Cinzel_Decorative } from '@next/font/google'
import { HomePage } from '@/components/HomePage/HomePage';


export default function Home() {
  return (
    <>
      <Head>
        <title>RevolutionWhales.com</title>
        <meta name="description" content="Swim with the RevolutionWhales!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  )
}
