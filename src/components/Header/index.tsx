'use client';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="px-6 pt-11 ">
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
              {3}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
