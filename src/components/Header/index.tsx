'use client';
import Image from 'next/image';
import { useMemo } from 'react';
import { selectCount } from '../../app/lib/features/cartSlice';
import { useAppSelector } from '@/hooks/hooks';

const Header = () => {
  const count = useAppSelector(selectCount);

  const greeting = useMemo(() => {
    const now = new Date();
    const hours = now.getHours();
    if (hours >= 5 && hours < 12) {
      return 'Bom dia!';
    } else if (hours >= 12 && hours < 18) {
      return 'Boa tarde!';
    } else {
      return 'Boa noite!';
    }
  }, []);
  return (
    <div className="px-6 pt-11">
      <div className="flex flex-row justify-between">
        <div className="flex">
          <Image
            src="/icons/menu.svg"
            alt="Menu icon"
            width={45}
            height={45}
            priority
          ></Image>
          <div className="ml-5">
            <h3>Cardápio Digital da Bolu</h3>
            <p>Adoçando seu dia</p>
          </div>
        </div>
        <div className="">
          <div className="relative">
            <Image
              src="/icons/cart.svg"
              alt="Cart icon"
              width={45}
              height={45}
              priority
            ></Image>
            <span className="absolute bg-orange-500 top-0 left-6 rounded-full px-2 text-white">
              {count}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h3>
          <span className="font-bold">{greeting}</span> vai um Bolu?
        </h3>
      </div>
    </div>
  );
};

export default Header;
