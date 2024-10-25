import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductsSegments } from '@models/productModel';

const Products: React.FC<{}> = () => {
  return (
    <section className="px-6 mt-5">
      <p className="text-xl mb-5">Produtos</p>
      <div className="products-container">
        {ProductsSegments.map((product) => {
          return (
            <div className="mb-7">
              <Link key={product?.id} href={`/produtos/${product?.category}`}>
                <div className="w-full h-[137px] relative border-radi">
                  <Image
                    fill={true}
                    src={product?.imagePath}
                    alt={`imagem da categoria ${product?.category}`}
                    className="pb-4"
                    objectFit="cover"
                  />
                </div>
                <p className="text-xl mb-1">{product?.title}</p>
                <div className="flex">
                  {product?.items.slice(0, 3).map((itemTitle, index) => {
                    const isLastItem =
                      index === product.items.slice(0, 3).length - 1;
                    return (
                      <p
                        key={itemTitle?.id}
                        className="text-sm text-slate-400 mr-1 text-nowrap"
                      >
                        {itemTitle?.name}
                        {!isLastItem && ' -'}
                      </p>
                    );
                  })}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
