'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperSlideData } from './model';
import { IoIosArrowForward } from 'react-icons/io';
import { Link as ScrollLink } from 'react-scroll';
import './styles.css';

const SwiperContainer: React.FC<{
  myRef: any;
}> = ({ myRef }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <header ref={headerRef} className="!sticky top-0 pt-1 bg-white">
      <div className="categories-wrapper mt-8">
        <div className="categories-header flex justify-between mb-5">
          <p className="text-xl">Categorias</p>
          <span className="flex items-center">
            <p className="mr-2">veja todas</p>
            <IoIosArrowForward />
          </span>
        </div>
      </div>
      <Swiper
        spaceBetween={14}
        slidesPerView={2}
        className="categories-slider-container "
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          myRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }}
      >
        {SwiperSlideData.map((slide, idx) => {
          return (
            <SwiperSlide
              onClick={() => setActiveIndex(idx)}
              key={slide?.id}
              className={`!w-max `}
            >
              <ScrollLink
                to={slide?.category}
                smooth={true}
                offset={-170}
                duration={500}
              >
                <div
                  className={`categories-slider my-2 flex items-center p-2 shadow-sm shadow-slate-500/50 rounded-3xl ${activeIndex == idx ? 'bg-lime-400' : ''}`}
                >
                  <Image
                    src={slide?.imagePath}
                    alt={slide?.imageAlt}
                    className="rounded-full mr-3"
                    width={44}
                    height={44}
                  ></Image>
                  <p className="font-medium text-xs">{slide?.title}</p>
                </div>
              </ScrollLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </header>
  );
};

export default SwiperContainer;
