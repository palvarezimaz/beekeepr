export interface Product {
  id: number;
  title: string;
}

function stripProduct(product: Product): Product {
  return {
    id: product.id,
    title: product.title
  }
}


export async function getProducts(): Promise<Product[]> {
  const products: any = await fetch('http://localhost:1337/api/products')
  return products.map(stripProduct)
}
