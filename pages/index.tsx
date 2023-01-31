import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from "next/link"
import ProductCard from "../components/ProductCart"
import Title from "../components/Title"
import { getProducts, Product } from "../lib/products"

interface HomePageProps {
  products: Product[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const products = await getProducts()
  return {
    props: { products },
    // revalidate: 5 * 60,
  }
}


function HomePage({ products }: HomePageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Beekeeper`s Journal E-Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>Beekeeper`s Journal E-Shop</Title>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product: Product) => (
            <li key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage
