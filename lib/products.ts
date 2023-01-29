import { fetchJson } from './api'

const CMS_URL = process.env.CMS_URL

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export async function getProduct(id: string): Promise<Product> {
  const preProduct = await fetchJson(`${CMS_URL}/api/honey-products/${id}`)
  const product = stripProduct(preProduct.data)
  return product
}


export async function getProducts(): Promise<Product[]> {
  const preProducts = await fetchJson(`${CMS_URL}/api/honey-products/`)
  const products = preProducts.data.
    map(stripProduct)
  return products
}


function stripProduct(product: any): Product {
  return {
    id: product.id,
    title: product.attributes.title,
    description: product.attributes.description,
    price: product.attributes.price
  }
}