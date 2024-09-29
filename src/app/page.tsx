'use client';
import 'swiper/css';
import React, { useRef } from 'react';
import SwiperContainer from '../components/SwiperContainer';
import ProductsSegment from '../components/ProductsSegment';
import SearchField from '../components/SearchField';
import Header from '@/components/Header';

const Dashboard = () => {
  const myRef = useRef(null);

  return (
    <section>
      <Header />
      <SearchField />
      <SwiperContainer />
      <ProductsSegment myRef={myRef} />
    </section>
  );
};

export default Dashboard;
