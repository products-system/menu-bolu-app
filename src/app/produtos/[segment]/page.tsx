'use client';
import React from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { ProductItem } from '@/types/productModel';
import { ProductsSegments } from '@/mocks/productsSegments';
import { formatProductName } from '@/functions/formatProductName';
import Product from '@/components/Product/Product';
import Link from 'next/link';

const Products = ({ params }: { params: { segment: string } }) => {
  const product = ProductsSegments.find(
    (item) => item.category == params?.segment,
  );

  return (
    <section className="px-6">
      <div className="flex items-baseline mt-3">
        <Link
          className="w-[45px] h-[45px] flex items-center mr-1"
          href={'/produtos'}
        >
          <MdOutlineArrowBackIosNew className="h-4 w-8 " />
        </Link>
        <p className="text-xl mb-4">
          {`${product?.title} populares (${product?.items?.length})`}
        </p>
      </div>

      {product?.items?.map((item: ProductItem) => {
        return (
          <Link
            key={item?.id}
            href={`${params?.segment}/${formatProductName(item?.name)}`}
          >
            <Product key={item?.id} item={item} />
          </Link>
        );
      })}
    </section>
  );
};
export default Products;
