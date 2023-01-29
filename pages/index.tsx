import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from "next/link"
import Title from "../components/Title"
import { getProducts, Product } from "../lib/products"

interface HomePageProps {
  products: Product[]
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const products = await getProducts()
  return {
    props: { products },
    revalidate: 5 * 60,
  }
}


function HomePage({ products }: HomePageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Beekeeper`s Journal E-Shop</title>
      </Head>
      <main className="p-3">
        <Title>Beekeeper`s Journal E-Shop</Title>
        <ul>
          {products.map((product: Product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                {product.title}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}

export default HomePage
