'use client';
import React, { useRef } from 'react';
import SwiperContainer from '../components/SwiperContainer';
import ProductsSegment from '../components/ProductsSegment';
import 'swiper/css';
import SearchField from '../components/SearchField';

const Dashboard = () => {
  const myRef = useRef(null);

  return (
    <section>
      <SearchField />
      <SwiperContainer />
      <ProductsSegment myRef={myRef} />
    </section>
  );
};

export default Dashboard;
