"use client"

import { CartProvider } from 'use-shopping-cart'

interface CartProviderProps{
  children: React.ReactNode
}

export default function AppCartProvider({children}: CartProviderProps){
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABE_KEY!
  return(
    <CartProvider
    shouldPersist={true}
    cartMode='checkout-session'
    stripe={stripeKey}
    currency='BRL'
    >
      {children}
    </CartProvider>
  )
}