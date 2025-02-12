'use client';
import 'swiper/css';
import {
  Header,
  ProductsSegment,
  SwiperContainer,
  SearchField,
} from '@/components';

const Dashboard = () => {
  return (
    <section>
      <Header />
      <SearchField />
      <SwiperContainer />
      <ProductsSegment />
    </section>
  );
};

export default Dashboard;
