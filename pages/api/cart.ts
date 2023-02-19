import { NextApiHandler } from "next";
import { fetchJson } from "../../lib/api";
import { CartItem } from "../../lib/cart";

const { CMS_URL } = process.env

function stripCartItem(cartItem: any): CartItem {
  return {
    id: cartItem.id,
    product: {
      id: cartItem.product.id,
      title: cartItem.product.title,
      price: cartItem.product.price,
    },
    quantity: cartItem.quantity
  }
}

