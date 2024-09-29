import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ProductItem } from '@models/productModel';
import { formatProductName } from '@/functions/formatProductName';
import { useParams } from 'next/navigation';

const Product: React.FC<{
  item: ProductItem;
}> = ({ item }) => {
  const params = useParams();
  return (
    <Link href={`${params?.segment}/${formatProductName(item?.name)}`}>
      <div
        key={item.id}
        className="segment flex justify-between items-center pb-3 border-b border-slate-300 mb-4"
      >
        <div>
          <h3 className="text-base">{item.name}</h3>
          <p className="text-[13px] font-thin">{item.description}</p>
        </div>
        <Image
          src={item.imagePath}
          className="mr-3"
          alt={item.name}
          width={50}
          height={50}
        />
      </div>
    </Link>
  );
};

export default Product;
