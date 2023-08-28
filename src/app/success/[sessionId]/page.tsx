"use client"

import { Check } from "lucide-react"
import { useEffect } from "react"
import { useShoppingCart } from "use-shopping-cart"

interface SuccessProps{
  params: {
    sessionId: string
  }
}
export default function Success({params}: SuccessProps){
  const {clearCart} = useShoppingCart()
  useEffect(()=> {
  clearCart()
},[clearCart])

  return(
<div className="container my-10 space-y-4 flex flex-col items-center justify-center">
<Check className="w-20 h-20 text-green-500"/>
<h1>Pedido realizado com sucesso!</h1>
</div>
  )
}