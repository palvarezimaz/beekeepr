import { fetchJson } from './api'

const CMS_URL = process.env.CMS_URL

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  imageUrl: any
}

export async function getProduct(id: string): Promise<Product> {
  const preProduct = await fetchJson(`${CMS_URL}/api/honey-products/${id}?populate=*`)
  const product = stripProduct(preProduct.data)
  return product
}


export async function getProducts(): Promise<Product[]> {
  const preProducts = await fetchJson(`${CMS_URL}/api/honey-products?populate=*`)
  const products = preProducts.data.
    map(stripProduct)
  return products
}

function stripProduct(product: any): Product {
  return {
    id: product.id,
    title: product.attributes.title,
    description: product.attributes.description,
    price: product.attributes.price + ' AUD',
    imageUrl: CMS_URL + product.attributes.images.data[0].attributes.url,
  }
}