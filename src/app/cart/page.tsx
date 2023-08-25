"use client"
import { useState } from "react";
import Image from "next/image";
import { useShoppingCart } from 'use-shopping-cart';
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Cart() {
  const { cartCount, cartDetails, redirectToCheckout } = useShoppingCart();
  const [checkingOut, setCheckinOut] = useState(false);
  return (
    <section className="flex flex-col items-center ">
    
     
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
              
              <TableCell> <Trash2 size={18} className="center-icon cursor-pointer hover:opacity-40"/></TableCell>
            </TableRow>))}
          </TableBody>  
        </Table>
      
 <Button className="m-4">Fechar Pedido</Button>

    </section>
  );
}
