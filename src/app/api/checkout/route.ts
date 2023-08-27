import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import Stripe from "stripe";
import { validateCartItems } from 'use-shopping-cart/utilities'
import { Product } from "use-shopping-cart/core";

export async function POST(request: NextRequest) {
  

const cartDetails = await request.json()
const baseUrl = request.headers.get("origen")

const stripeInventory = await stripe.products.list({
  expand: ["data.default_price"]
})

const products = stripeInventory.data.map((p: Stripe.Product): Product =>{
return{
  id: p.id.toString(),
  name: p.name,
  price: (p.default_price as Stripe.Price)?.unit_amount ?? 0,
  currency: (p.default_price as Stripe.Price)?.currency ?? "BRL",
  image: p.images[0]
}
})

const line_items = validateCartItems(products, cartDetails)



  return NextResponse.json({}, {status: 200})
}