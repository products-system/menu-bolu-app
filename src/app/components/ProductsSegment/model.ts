interface ProductItem {
  id: number;
  subtitle: string;
  description: string;
  imagePath: string;
}
interface ProductSegment {
  id: number;
  category: string;
  title: string;
  items: ProductItem[];
}

export const ProductsSegments: ProductSegment[] = [
  {
    id: 0,
    title: 'Bolos',
    category: 'cake',
    items: [
      {
        id: 0,
        subtitle: 'Naked Cake',
        description: 'O peladinho que a gente gosta!',
        imagePath: '/cake-vector.png',
      },
      {
        id: 1,
        subtitle: 'Bolo de pote',
        description: 'Pra saciar fome everywhere!',
        imagePath: '/cake-vector.png',
      },
    ],
  },
  {
    id: 1,
    title: 'Cookies',
    category: 'cookie',
    items: [
      {
        id: 0,
        subtitle: 'Red Velvet',
        description: 'O queridinho da Bo.Lu',
        imagePath: '/cake-vector.png',
      },
      {
        id: 1,
        subtitle: 'Pistache',
        description: 'Pode ser verde mas é muito maduro',
        imagePath: '/cake-vector.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Tortas',
    category: 'pie',
    items: [
      {
        id: 0,
        subtitle: 'Limão',
        description: 'Bem melhor com limão miliciano',
        imagePath: '/cake-vector.png',
      },
      {
        id: 1,
        subtitle: 'Maçã',
        description: 'Totalmente decolonial',
        imagePath: '/cake-vector.png',
      },
    ],
  },
  {
    id: 3,
    title: 'Brigadeiros',
    category: 'brazillian-chocolate-truffle',
    items: [
      {
        id: 0,
        subtitle: 'Tradicional',
        description: 'O negão irresistível',
        imagePath: '/cake-vector.png',
      },
      {
        id: 1,
        subtitle: 'Ninho com Nutella',
        description: 'É branco mas é bom',
        imagePath: '/cake-vector.png',
      },
      {
        id: 2,
        subtitle: 'Ferrero Rocher',
        description: 'Maior e melhor, senhoras e senhores',
        imagePath: '/cake-vector.png',
      },
    ],
  },
];
