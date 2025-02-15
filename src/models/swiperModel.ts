interface SwiperSlideItem {
  id: number;
  imagePath: string;
  imageAlt: string;
  title: string;
  category: string;
}
export const scrollOptions = {
  offset: -170,
  smooth: true,
  duration: 500,
};

export const SwiperSlideData: SwiperSlideItem[] = [
  {
    id: 0,
    category: 'bolos',
    title: 'Bolo',
    imagePath: '/cake-vector.png',
    imageAlt: 'Imagem de bolo',
  },
  {
    id: 1,
    category: 'cookies',
    title: 'Cookies',
    imagePath: '/cake-vector.png',
    imageAlt: 'Imagem de Cookie',
  },
  {
    id: 2,
    category: 'tortas',
    title: 'Tortas',
    imagePath: '/cake-vector.png',
    imageAlt: 'Imagem de tortas',
  },
  {
    id: 3,
    category: 'brigadeiros',
    title: 'Brigadeiros',
    imagePath: '/cake-vector.png',
    imageAlt: 'Imagem de brigadeiro',
  },
];
