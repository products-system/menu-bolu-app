'use client';
import React, { useRef } from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import SwiperContainer from '../components/SwiperContainer';
import ProductsSegment from '../components/ProductsSegment';
import 'swiper/css';

const Dashboard = () => {
  const myRef = useRef(null);

  return (
    <main className="px-6">
      <div className="search-field-wrapper flex items-center bg-slate-100 mt-4 px-5 py-6 rounded-md ">
        <FaMagnifyingGlass className="mr-2 h-4 w-4" />
        <input
          className="bg-slate-100 border-none outline-none w-full text-sm"
          type="text"
          placeholder="Pesquise por bolos, doces..."
        />
      </div>

      <SwiperContainer myRef={myRef} />
      <ProductsSegment myRef={myRef} />
    </main>
  );
};

export default Dashboard;
