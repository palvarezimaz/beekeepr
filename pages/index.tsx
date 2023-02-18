import type { GetStaticProps } from 'next'
import Link from "next/link"
import ProductCard from "../components/ProductCard"
import { getProducts, Product } from "../lib/products"
import Page from "../components/Page"

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
    <Page title="Bee products">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>

  )
}

export default HomePage
