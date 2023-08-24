"use client"
import Link from "next/link";
import { ShoppingCart } from 'lucide-react';
import { useShoppingCart } from "use-shopping-cart";

export default function CartButton(){
  const { cartCount,formattedTotalPrice} = useShoppingCart()
  return(
    <>
    <Link href={"/cart"} className="flex items-center justify-center gap-6">
      <div className="flex gap-2"> <ShoppingCart className="font-extrabold h-6 w-6"/>({cartCount})</div>
   
     
     <div> {formattedTotalPrice} </div>
    </Link>
    </>
  )
}