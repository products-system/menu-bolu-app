'use client';
import React, { useEffect, useState } from 'react';
import { ProductsSegments } from '../../models/productModel';
import { Element as ScrollTarget } from 'react-scroll';
import { CiCirclePlus } from 'react-icons/ci';
import Product from '@/components/Product';
import Link from 'next/link';

const ProductsSegment: React.FC<{
  myRef?: any;
}> = ({ myRef }) => {
  return (
    <div className={`mt-8 px-6 `}>
      {ProductsSegments.map((segment) => (
        <div
          ref={myRef}
          id={`${segment?.category}`}
          className="mt-5"
          key={segment.id}
        >
          <ScrollTarget name={segment?.category}>
            <Link
              className="mr-2 flex items-baseline"
              href={`/produtos/${segment?.category}`}
            >
              <h2 className="text-xl mb-5">{segment.title}</h2>
              <CiCirclePlus className="w-[18px] h-[18px] ml-1" />
            </Link>

            {segment.items.map((item) => (
              <Product key={item?.id} item={item} />
            ))}
          </ScrollTarget>
        </div>
      ))}
    </div>
  );
};

export default ProductsSegment;
