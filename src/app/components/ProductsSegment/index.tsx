'use client';
import React from 'react';
import { ProductsSegments } from './model';
import Image from 'next/image';
import { useAppSelector } from '@/hooks/hooks';
import { isHeaderSticky } from '@/app/lib/features/swiperSlice';
import { Element as ScrollTarget } from 'react-scroll';

const ProductsSegment: React.FC<{
  myRef: any;
}> = ({ myRef }) => {
  const stickyValue = useAppSelector(isHeaderSticky);

  return (
    <div className={`mt-8 ${stickyValue == 'sticky' ? 'pt-[158px]' : ''}`}>
      {ProductsSegments.map((segment) => (
        <div
          ref={myRef}
          id={`${segment?.category}`}
          className="mt-5"
          key={segment.id}
        >
          <ScrollTarget name={segment?.category}>
            <h2 className="text-xl mb-5">{segment.title}</h2>
            {segment.items.map((item) => (
              <div
                key={item.id}
                className="segment flex justify-between items-center pb-3 border-b border-slate-300 mb-4"
              >
                <div>
                  <h3 className="text-base">{item.subtitle}</h3>
                  <p className="text-[13px] font-thin">{item.description}</p>
                </div>
                <Image
                  src={item.imagePath}
                  className="mr-3"
                  alt={item.subtitle}
                  width={50}
                  height={50}
                />
              </div>
            ))}
          </ScrollTarget>
        </div>
      ))}
    </div>
  );
};

export default ProductsSegment;
