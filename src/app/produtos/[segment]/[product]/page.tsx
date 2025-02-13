'use client';
import Image from 'next/image';
import Button from '@/UI/Button';
import React from 'react';
import { useParams } from 'next/navigation';
import { ProductsSegments } from '@/models/productModel';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { BsDashCircleFill, BsPlusCircleFill } from 'react-icons/bs';
import { formatProductName } from '@/functions/formatProductName';

const Product = () => {
  const params = useParams<{ segment: string; product: string }>();
  const { segment, product } = params;
  const decodedProduct = decodeURIComponent(product?.toString());
  const router = useRouter();
  const item = ProductsSegments.find(
    (segmentItem) => segmentItem.category === segment,
  )?.items.find(
    (item) =>
      formatProductName(item.name) ===
      formatProductName(decodedProduct?.toString().toLowerCase()),
  );

  return (
    <section>
      <header className="swiper-header">
        <div className="w-full h-[220px] relative">
          <div
            className="w-[45px] h-[45px] flex items-center justify-center rounded-full left-6 top-[25px] mr-1 absolute z-10 bg-slate-100"
            onClick={() => router.back()}
          >
            <MdOutlineArrowBackIosNew className="h-4 w-8 " />
          </div>
          <Image
            fill={true}
            src={`${item?.imagePath ? item.imagePath : '/fallback-image.png'}`}
            alt={`imagem da categoria`}
            className="rounded-b-[30px]"
            objectFit="cover"
          />
        </div>
      </header>
      <div className="p-6">
        <h1 className="text-xl font-bold mb-2">{item?.name}</h1>
        <p className="text-justify word-tight text-sm text-slate-400 mb-6">
          {item?.extra.description}
        </p>
        {item?.extra.sizes && (
          <span className="flex items-center ">
            {item?.extra?.sizes?.map((size: number, idx: number) => (
              <div
                key={idx}
                className="mr-2  bg-slate-200   rounded-full text-center py-[20px] px-[10px] "
              >
                <p className=" text-sm" key={idx}>
                  {size} cm
                </p>
              </div>
            ))}
          </span>
        )}
      </div>
      <footer className="pt-5 pb-[30px] px-6 bg-slate-100 rounded-t-[30px] fixed w-full bottom-0">
        <div className="flex justify-between mb-6 items-center">
          <span className="text-2xl">R$ 32</span>
          <div className="flex bg-customDark py-3 px-4 rounded-3xl items-center justify-center">
            <BsDashCircleFill className="text-customGrey h-6 w-6" />
            <p className="mx-5 text-white">2</p>
            <BsPlusCircleFill className="text-customGrey h-6 w-6" />
          </div>
        </div>
        <Button
          title="Adicionar ao carrinho"
          className="bg-orange-500 text-slate-100 py-5 font-bold text-2xl "
        />
      </footer>
    </section>
  );
};

export default Product;
