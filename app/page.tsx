import Desktop from '@/components/Desktop/Desktop';
import Collections from '@/components/Mobile/Collections';
import Carousel from '@/components/Mobile/carousel';
import Featured from '@/components/featured';
import Features from '@/components/shared/features';
import { getCollections, getProducts } from '@/lib/shopify';

import React, { Suspense } from 'react';
async function Page() {
  const Carousel_products = await getProducts({
    query: 'tag:authentic_rug',
  });
  const collections = await getCollections();

  return (
    <>
      <div className='hidden md:block'>
        <Desktop />
      </div>
      <Carousel products={Carousel_products} />
      <Suspense fallback={'hello'}>
        <Collections collections={collections} />
      </Suspense>
      <div className='hidden md:block'>
        <Featured />
      </div>
      <Features />
    </>
  );
}

export default Page;
