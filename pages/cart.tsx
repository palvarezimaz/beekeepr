import Page from '../components/Page'
import { useQuery } from 'react-query'
import { fetchJson } from "../lib/api"
import { CartItem } from '../lib/cart'


function CartPage(): JSX.Element {
  const query = useQuery<CartItem[]>('cartItems', () => fetchJson('api/cary'))
  const cartItems = query.data
  return (
    <Page title="Cart">


    </Page>
  )
}

export default CartPage