'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperSlideData, scrollOptions } from '../../models/swiperModel';
import { IoIosArrowForward } from 'react-icons/io';
import { Link as ScrollLink, scroller } from 'react-scroll';
import './styles.css';

const SwiperContainer = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div ref={headerRef} className="!sticky top-0 pt-1 bg-white">
      <div className="categories-wrapper mt-8">
        <div className="categories-header flex justify-between mb-5 px-6">
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
          const correctSwiperData = SwiperSlideData.find(
            (x) => x.id === swiper.activeIndex,
          );
          if (correctSwiperData)
            scroller.scrollTo(correctSwiperData?.category, scrollOptions);
        }}
      >
        {SwiperSlideData.map((slide) => {
          return (
            <SwiperSlide
              onClick={() => {}}
              key={slide?.id}
              className={`!w-max`}
            >
              <ScrollLink
                to={slide?.category}
                smooth={scrollOptions.smooth}
                offset={scrollOptions.offset}
                duration={scrollOptions.duration}
                onClick={() => setActiveIndex(slide?.id)}
              >
                <div
                  className={`categories-slider my-2 flex items-center p-2 shadow-sm shadow-slate-500/50 rounded-3xl ${activeIndex === slide.id ? 'bg-lime-400' : ''}`}
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
    </div>
  );
};

export default SwiperContainer;
