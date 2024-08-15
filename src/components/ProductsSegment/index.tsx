'use client';
import React from 'react';
import { ProductsSegments } from '../../app/models/productModel';
import { useAppSelector } from '@/hooks/hooks';
import { isHeaderSticky } from '@/app/lib/features/swiperSlice';
import { Element as ScrollTarget } from 'react-scroll';
import Product from '../Product';
import Link from 'next/link';
import { CiCirclePlus } from 'react-icons/ci';

const ProductsSegment: React.FC<{
  myRef?: any;
}> = ({ myRef }) => {
  const stickyValue = useAppSelector(isHeaderSticky);

  return (
    <div className={`mt-8 px-6 ${stickyValue == 'sticky' ? 'pt-[158px]' : ''}`}>
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
              href={`/todos-os-produtos/produtos/${segment?.category}`}
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
