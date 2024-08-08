'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { FaCirclePlus } from 'react-icons/fa6';
import { ProductItem, ProductsSegments } from '@/app/models/productModel';
import Product from '@/app/components/Product';

const Products = () => {
  const correctSegment = ProductsSegments.find(
    (item) => item.category == 'cake',
  );
  useEffect(() => {
    console.log(correctSegment);
  }, []);
  return (
    <section className="px-6">
      <nav className="flex mb-6">
        <div className="bg-slate-100 py-3 px-1  w-[45px] h-[45px] flex items-center rounded-full">
          <MdOutlineArrowBackIosNew className="h-4 w-8 " />
        </div>
      </nav>
      <p className="text-xl">
        {`Bolos Populares (${correctSegment?.items.length})`}{' '}
      </p>

      {correctSegment?.items?.map((item: ProductItem) => {
        return <Product item={item} />;
      })}
    </section>
  );
};
export default Products;
