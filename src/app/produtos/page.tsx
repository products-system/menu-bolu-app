import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductsSegments } from '@/mocks/productsSegments';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const Products: React.FC<{}> = () => {
  return (
    <section className="px-6 mt-5">
      <Link href={`/`}>
        <span className="flex items-baseline ">
          <MdOutlineArrowBackIosNew className="h-2 w-4 " />
          <p className="mb-5">Voltar</p>
        </span>
      </Link>
      <h1 className="text-2xl mb-7">Produtos</h1>
      <div className="products-container">
        {ProductsSegments.map((product) => {
          return (
            <div key={product?.id} className="mb-7">
              <Link key={product?.id} href={`/produtos/${product?.category}`}>
                <div className="w-full h-[137px] relative border-radius">
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
