'use client';
import '../../globals.css';
import { useState } from 'react';
import { walkthroughData } from '../../models/walkthroughModel';
import { createCookie } from '@/functions/handleCookie';
import { useRouter } from 'next/navigation';
import Button from '@/UI/Button';
import Link from 'next/link';

const Home = () => {
  const router = useRouter();
  const [slideIndex, setSlideIndex] = useState(1);
  const moveDot = (index: any) => {
    setSlideIndex(index);
  };
  const nextSlide = () => {
    if (slideIndex !== walkthroughData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === walkthroughData.length) {
      router.push('/');
    }
  };

  return (
    <div>
      <div className="px-6">
        <div className="container-slider px-6 flex flex-col">
          {walkthroughData?.map((item, index) => {
            return (
              <div
                key={index}
                className={`${slideIndex === index + 1 ? '!opacity-100' : 'opacity-0'} slide flex w-full h-full absolute`}
              >
                <li className="list-none pt-1 my-2 mx-auto">
                  <h1 className="text-2xl text-slate-900">{item.title}</h1>
                  <p className="text-base text-slate-700 font-light">
                    {item.description}
                  </p>
                </li>
              </div>
            );
          })}
          <div className="flex flex-row mx-auto">
            {walkthroughData?.map((_, index) => {
              return (
                <div
                  key={index}
                  onClick={() => moveDot(index + 1)}
                  className={`${slideIndex === index + 1 ? 'bg-orange-500' : 'bg-orange-300'} rounded-full  h-3 w-3 mr-3`}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col">
          <Button
            title={`${slideIndex === walkthroughData.length ? 'Ir para home' : 'Próximo'}`}
            className=" font-bold mt-5 bg-green-700 text-white  py-6"
            onClick={() => nextSlide()}
          />
          <Link
            onClick={(e) => {
              e.preventDefault();
              createCookie({
                name: 'menu-bolu-skipped-walkthrough',
                value: 'true',
              });
              router.push('/');
            }}
            href="/dashboard"
            className="text-center bottom-10 bg-transparent text-slate-600  py-6"
          >
            Pular
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
