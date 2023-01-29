import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import Title from "../../components/Title";
import { getProduct, getProducts, Product } from '../../lib/products'

interface ProductPageParams extends ParsedUrlQuery {
  id: string;
}

interface ProductPageProps {
  product: Product
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts()
  return {
    paths: products.map((product: Product) => ({
      params: { id: product.id.toString() }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<ProductPageProps, ProductPageParams> = async ({ params }) => {
  const product = await getProduct(params?.id as string)
  return {
    props: { product },
    revalidate: 5 * 60,
  }
}

export default function productPage({ product }: ProductPageProps) {
  return (
    <>
      <Head>
        <title>Beekeeper`s Journal E-Shop</title>
      </Head>
      <main className="px-6 py-4">
        <Title>{product.title}</Title>
        <p>Description:
          <br />
          {product.description}
        </p>
        <p>Price: {product.price} AUD</p>
      </main>
    </>
  )
}