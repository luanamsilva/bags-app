import { ProductType } from "@/app/types/ProductsType"
import stripe from "@/lib/stripe"
import Stripe from "stripe"
import ProductCard from "./productCard"

async function getProducts(){
  try{
const stripeProducts = await stripe.products.list({
  limit: 6,
  expand: ["data.default_price"]
})
return stripeProducts.data.map((p: Stripe.Product): ProductType =>{
  return{
    id: p.id.toString(),
    name: p.name,
    price: (p.default_price as Stripe.Price)?.unit_amount_decimal ?? "0",
    image: p.images[0]

  }
})
  } catch(e){

console.log(e)
  }
}

export default async function ProductList(){
  const products = await getProducts()
  return(
  <>
{products?.map((product)=>(
<ProductCard key={product.id}{...product}/>
))}
  </>
  )
}