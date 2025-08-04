import { ProductSegment } from '@/types/productModel';

export const ProductsSegments: ProductSegment[] = [
  {
    id: 0,
    title: 'Bolos',
    category: 'bolos',
    imagePath: '/cake-vector.png',
    items: [
      {
        id: 0,
        name: 'Bolo Naked Cake',
        description: 'Um bolo clássico e elegante, com camadas à mostra.',
        price: 122.0,
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
        name: 'Cookie Red Velvet',
        description:
          'Um cookie aveludado e irresistível, com recheio de cream cheese.',
        imagePath: '/cake-vector.png',
        price: 15.0,
        extra: {
          description:
            'Cookies com sabor intenso de Red Velvet e cobertura de cream cheese.',
        },
      },
      {
        id: 1,
        name: 'Cookie de Pistache',
        description:
          'Sabor único e sofisticado, com pedaços crocantes de pistache.',
        imagePath: '/cake-vector.png',
        price: 15.0,
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
        name: 'Torta de Limão',
        price: 60.0,
        description:
          'O equilíbrio perfeito entre o azedinho do limão e a doçura da massa.',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'Torta de limão com base crocante e recheio cremoso, finalizada com raspas de limão.',
        },
      },
      {
        id: 1,
        name: 'Torta de Maçã',
        description: 'Um clássico reconfortante com um toque de canela.',
        imagePath: '/apple-pie.webp',
        price: 75.69,
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
        name: 'Brigadeiro Tradicional',
        price: 7.5,
        description: 'O sabor clássico do chocolate que todo mundo ama.',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'O tradicional brigadeiro brasileiro, feito com chocolate de alta qualidade.',
        },
      },
      {
        id: 1,
        name: 'Brigadeiro de Ninho com Nutella',
        price: 7.5,
        description:
          'A combinação perfeita de Leite Ninho cremoso com Nutella.',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'Brigadeiro de leite Ninho com recheio cremoso de Nutella.',
        },
      },
      {
        id: 2,
        name: 'Brigadeiro de Ferrero Rocher',
        price: 8.49,
        description: 'Uma explosão de sabor com chocolate e avelãs crocantes.',
        imagePath: '/cake-vector.png',
        extra: {
          description:
            'Brigadeiro inspirado no famoso Ferrero Rocher, com pedaços de avelã.',
        },
      },
    ],
  },
];
