'use client';
import React from 'react';
import { ProductsSegments } from '@/mocks/productsSegments';
import { Element as ScrollTarget } from 'react-scroll';
import { CiCirclePlus } from 'react-icons/ci';
import { formatProductName } from '@/functions/formatProductName';
import Product from '@/components/Product/Product';
import Link from 'next/link';

const ProductsSegment = () => {
  return (
    <div className={`mt-8 px-6`}>
      {ProductsSegments.map((segment) => (
        <div id={`${segment?.category}`} className="mt-5" key={segment.id}>
          <ScrollTarget name={segment?.category}>
            <Link
              className="mr-2 flex items-baseline"
              href={`/produtos/${segment?.category}`}
            >
              <h2 className="text-xl mb-5">{segment.title}</h2>
              <CiCirclePlus className="w-[18px] h-[18px] ml-1" />
            </Link>
            {segment.items.map((item) => (
              <Link
                key={item?.id}
                href={`produtos/${segment?.category}/${formatProductName(item?.name)}`}
              >
                <Product key={item?.id} item={item} />
              </Link>
            ))}
          </ScrollTarget>
        </div>
      ))}
    </div>
  );
};

export default ProductsSegment;
