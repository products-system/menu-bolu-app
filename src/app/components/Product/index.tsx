import Image from 'next/image';
import React from 'react';
import { ProductItem } from '../../models/productModel';

const Product: React.FC<{
  item: ProductItem;
}> = ({ item }) => {
  return (
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
  );
};

export default Product;
