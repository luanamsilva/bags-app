import ProductCard from '../../../components/shop/productCard';
import { ProductType } from '@/app/types/ProductsType';
import stripe from '@/lib/stripe';
import Stripe from 'stripe';
import { NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

interface ProductProps {
  params: {
    productsid: string;
  };
}

async function getProducts() {
  try {
    const stripeProducts = await stripe.products.list({
      expand: ['data.default_price'],
    });
    return stripeProducts.data.map((product: Stripe.Product): ProductType => {
      return {
        id: product.id.toString(),
        name: product.name,
        description: product.description,
        price:
          (product.default_price as Stripe.Price)?.unit_amount_decimal ?? '0',
        currency: (product.default_price as Stripe.Price)?.currency ?? 'BRL',
        image: product.images[0],
      };
    });
  } catch (e) {
    console.log(e);
  }
}

const Product: NextPage<ProductProps> = async ({ params: { productsid } }) => {
  const products = await getProducts();
  const item: ProductType | undefined = products!.find(
    (item) => item.id === productsid,
  );

  if (!item) {
    return (
      <>
        <h1>Produto não encontrado</h1>
      </>
    );
  }

  return (
    
    <div className='flex flex-col items-center justify-center m-4'>
      <div className=' flex items-center justify-center w-2/5'>
        <ProductCard key={item.id} {...item} />
      </div>
      <div className="self-end w-2/5">
       
       <Link href={'/'}> 
        <Button className="bg-gray-100 text-logo right-4 hover:text-gray-100">
         Voltar
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
