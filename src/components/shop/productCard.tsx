"use client"

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

export default function ProductCard({id, name, price, description, image}: ProductType){
  
  
  return(
<Card>
  <CardHeader>
    <CardTitle>{name}</CardTitle>
   
  </CardHeader>
  <CardContent>
    <p>{description}</p>
  </CardContent>
  <CardFooter>
    <div>
      <p>Preço</p>
      <p>{price}</p>
    </div>
    <Button size={"lg"} variant={"default"}> Comprar</Button>
  </CardFooter>
</Card>

  )
}