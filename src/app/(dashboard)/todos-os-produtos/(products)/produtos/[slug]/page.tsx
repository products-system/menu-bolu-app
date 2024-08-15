'use client';
import React from 'react';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { ProductItem, ProductsSegments } from '@/app/models/productModel';
import Product from '@/components/Product';
import Link from 'next/link';

const Products = ({ params }: { params: { slug: string } }) => {
  const product = ProductsSegments.find(
    (item) => item.category == params?.slug,
  );
  return (
    <section className="px-6">
      <div className="flex items-baseline mt-3">
        <Link
          className="w-[45px] h-[45px] flex items-center mr-1"
          href={'/todos-os-produtos'}
        >
          <MdOutlineArrowBackIosNew className="h-4 w-8 " />
        </Link>

        <p className="text-xl mb-4">
          {`${product?.title} populares (${product?.items?.length})`}
        </p>
      </div>

      {product?.items?.map((item: ProductItem) => {
        return <Product key={item?.id} item={item} />;
      })}
    </section>
  );
};
export default Products;
