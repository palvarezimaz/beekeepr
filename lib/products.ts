export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

function stripProduct(product: any): Product {
  return {
    id: product.id,
    title: product.attributes.title,
    description: product.attributes.description,
    price: product.attributes.price
  }
}

export async function getProduct(id: string) {
  const response = await fetch(`http://localhost:1337/api/honey-products/${id}`)
  const preProduct = await response.json()
  const product = stripProduct(preProduct.data)
  return product
}


export async function getProducts(): Promise<Product[]> {
  const response = await fetch('http://localhost:1337/api/honey-products/')
  const preProducts = await response.json()
  const products = preProducts.data.
    map(stripProduct)
  return products
}


