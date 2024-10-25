export interface ProductItem {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  extra: {
    description: string;
    sizes?: number[];
  };
}

interface ProductSegment {
  id: number;
  category: string;
  title: string;
  imagePath: string;
  items: ProductItem[];
}

export const ProductsSegments: ProductSegment[] = [
  {
    id: 0,
    title: 'Bolos',
    category: 'bolos',
    imagePath: '/cake-vector.png',
    items: [
      {
        id: 0,
        name: 'Naked Cake',
        description: 'O peladinho que a gente gosta!',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'Um bolo clássico e delicioso, sem cobertura, ideal para festas e eventos.',
        },
      },
    ],
  },
  {
    id: 1,
    title: 'Cookies',
    category: 'cookies',
    imagePath: '/cake-vector.png',
    items: [
      {
        id: 0,
        name: 'Red Velvet',
        description: 'O queridinho da Bo.Lu',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'Cookies com sabor intenso de Red Velvet e cobertura de cream cheese.',
        },
      },
      {
        id: 1,
        name: 'Pistache',
        description: 'Pode ser verde mas é muito maduro',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'Delicioso cookie de pistache com um sabor único e refinado.',
        },
      },
    ],
  },
  {
    id: 2,
    title: 'Tortas',
    category: 'tortas',
    imagePath: '/cake-vector.png',
    items: [
      {
        id: 0,
        name: 'Limão',
        description: 'Bem melhor com limão miliciano',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'Torta de limão com base crocante e recheio cremoso, finalizada com raspas de limão.',
        },
      },
      {
        id: 1,
        name: 'Maçã',
        description: 'Totalmente decolonial',
        imagePath: '/apple-pie.webp',
        extra: {
          description:
            'Torta de maçã com massa crocante e recheio suave de maçãs frescas, levemente aromatizada com canela. Perfeita para acompanhar um café.',
          sizes: [14, 20, 28],
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Brigadeiros',
    category: 'brigadeiros',
    imagePath: '/cake-vector.png',
    items: [
      {
        id: 0,
        name: 'Tradicional',
        description: 'O negão irresistível',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'O tradicional brigadeiro brasileiro, feito com chocolate de alta qualidade.',
        },
      },
      {
        id: 1,
        name: 'Ninho com Nutella',
        description: 'É branco mas é bom',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'Brigadeiro de leite Ninho com recheio cremoso de Nutella.',
        },
      },
      {
        id: 2,
        name: 'Ferrero Rocher',
        description: 'Maior e melhor, senhoras e senhores',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'Brigadeiro inspirado no famoso Ferrero Rocher, com pedaços de avelã.',
        },
      },
    ],
  },
];
