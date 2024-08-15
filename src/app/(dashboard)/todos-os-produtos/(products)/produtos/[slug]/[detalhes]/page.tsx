import Image from 'next/image';
import React from 'react';

const Detalhes = () => {
  return (
    <section>
      <header className="swiper-header">
        <div className="w-full h-[137px] relative border-radi">
          <Image
            fill={true}
            src={'/cake-vector.png'}
            alt={`imagem da categoria`}
            className="pb-4"
            objectFit="cover"
          />
        </div>
      </header>
    </section>
  );
};

export default Detalhes;
