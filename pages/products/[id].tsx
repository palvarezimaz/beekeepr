import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import Image from "next/image";
import { getProduct, getProducts, Product } from '../../lib/products'
import { ApiError } from "../../lib/api";
import Page from "../../components/Page";
import { useUser } from "../../hooks/user";


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
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<ProductPageProps, ProductPageParams> = async ({ params }) => {
  try {
    const product = await getProduct(params?.id as string)
    return {
      props: { product },
      // revalidate: 5 * 60,
    }
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err
  }
}

export default function ProductPage({ product }: ProductPageProps): JSX.Element {
  const user = useUser();
  return (

    <Page title={product.title}>
      <div className="flex flex-col lg:flex-row">
        <div>
          <Image src={product.imageUrl} alt=""
            width={640} height={480}
          />
        </div>
        <div className="flex-1 lg:ml-4">
          <p className="text-sm">Description:
            <br />
            {product.description}
          </p>
          <p className="text-lg font-bold mt-2">Price: {product.price}
          </p>
          {/* <p>Special products for {user.name}</p> */}
        </div>
      </div>
    </Page>
  )
}