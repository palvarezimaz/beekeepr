import type { NextPage } from 'next'
import Head from 'next/head'
import Title from "../components/Title"


const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beekeeper`s Journal E-Shop</title>
      </Head>
      <main className="p-3">
        <Title>Beekeeper`s Journal E-Shop</Title>
        <p>something</p>
      </main>
    </>
  )
}

export default HomePage
