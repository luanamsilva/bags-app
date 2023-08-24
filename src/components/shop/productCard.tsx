"use client"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { ProductType } from "@/app/types/ProductsType"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"
import Image from "next/image"
import { useToast } from "../ui/use-toast"



export default function ProductCard({id, name, price, description, image, currency}: ProductType){
  
  const {addItem} = useShoppingCart()

  const {toast} = useToast()

  const formatPrice = formatCurrencyString({
    value: Number(price),
    currency,
    language: 'pt-BR'
  })

  const  addCart = async (e: React.MouseEvent <HTMLButtonElement>)=>{
    e.preventDefault()
    addItem({
      name,
      id,
      price: Number(price),
      currency,
      image
    })
    toast({
      title: `${name} adicionado(a) com sucesso!`
    })
  }
  return(
<Card >
  <CardHeader>
    <CardTitle className="flex items-center justify-center">{name}</CardTitle>
  </CardHeader>
  <CardDescription className="relative w-full h-60 ">
  <Image 
  src={image}
  fill
  sizes="100%"
   alt={name}
   className="object-contain"
   />
  </CardDescription> 
  <CardContent className="flex items-center justify-center mt-5">  <p className="min-h-[6rem]">{description}</p></CardContent>
 
  <CardFooter className="flex items-center justify-between">
    <div>
      <p>Preço:</p>
      <strong>{formatPrice}</strong>
    </div>
    <Button size={"lg"} variant={"default"} onClick={addCart}> Comprar</Button>
  </CardFooter>
</Card>

  )
}