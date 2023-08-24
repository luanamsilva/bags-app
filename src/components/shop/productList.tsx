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
    description: p.description,
    price: (p.default_price as Stripe.Price)?.unit_amount_decimal ?? "0",
    currency: (p.default_price as Stripe.Price)?.currency ?? 'BRL',
    image: p.images[0],
   
  }
})
  } catch(e){

console.log(e)
  }
}

export default async function ProductList(){
  const products = await getProducts()
  return(
  <section className="grid gap-5 m-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
{products?.map((product)=>(
<ProductCard key={product.id}{...product}/>
))}
  </section>
  )
}