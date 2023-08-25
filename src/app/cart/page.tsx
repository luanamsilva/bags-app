"use client"
import React from 'react'
import { useState } from "react";
import Image from "next/image";
import { useShoppingCart } from 'use-shopping-cart';
import { Loader, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { cn } from "@/lib/utils";

export default function Cart() {
  const { cartCount, cartDetails, removeItem, redirectToCheckout } = useShoppingCart();
  const [checkingOut, setCheckinOut] = useState(false);
  const { clearCart } = useShoppingCart()
async function checkout() {
  
}

  return (
    <section className="flex flex-col items-center  justify-center pt-2">
  {cartCount === 0 ? "Seu carrinho está vazio" :
     
          <Table>
          
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">Produto</TableHead>
              <TableHead></TableHead>
              <TableHead className="text-center">Quantidade</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
 
          <TableBody >
{cartDetails &&
        Object.keys(cartDetails).map((key)=>(

            <TableRow  key={cartDetails[key].id}>
              <TableCell className="font-medium">
              <div className="flex items-center ">
                <div className="relative w-28 h-28">
                  <Image
                    src={cartDetails[key].image || ''}
                    fill
                    alt={cartDetails[key].name}
                    className="object-contain my-3 "
                  />
                </div>
              </div>
              </TableCell>
              <TableCell>{cartDetails[key].name}</TableCell>
              <TableCell className="text-center">{cartDetails[key].quantity} </TableCell>
              <TableCell className="text-right ">{cartDetails[key].formattedValue}</TableCell>
              
              <TableCell> 
                <Trash2 size={18} onClick={() => removeItem(cartDetails[key].id)}
 className="center-icon cursor-pointer hover:opacity-40"/>
                </TableCell>
            </TableRow>))}
          </TableBody>  
        </Table> }
  <div className={cn("flex items-center justify-end", 
  cartCount === undefined || cartCount <= 0 ? "hidden" : "")}> 
 <Button
  variant={"default"} 
  size={"lg"}
  onClick={checkout}
  disabled={checkingOut}
  className="m-4">
    {checkingOut ? (<div className="flex items-center justify-between gap-2">
      <Loader className="animate-spin 2s repeat-infinite"/> Finalizando...
    </div>):('Fechar Pedido')}
    
    </Button>
    <Button className="bg-gray-100 text-logo hover:bg-slate-300" onClick={clearCart}>Esvaziar carrinho</Button>
</div>  
    </section>
  );
}
