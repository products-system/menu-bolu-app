import { ProductItem } from '@/types/productModel';

export const cartMock: ProductItem[] = [
  {
    id: 0,
    name: 'Bolo Naked Cake',
    description: 'Um dos mais pedidos!',
    price: 122.0,
    imagePath: '/cake-vector.png',
    extra: {
      description:
        'Um bolo clássico e delicioso, sem cobertura, ideal para festas e eventos.',
    },
  },
  {
    id: 0,
    name: 'Torta de Limão',
    price: 60.0,
    description: 'Essa aqui não tem erro!',
    imagePath: '/cake-vector.png',
    extra: {
      description:
        'Torta de limão com base crocante e recheio cremoso, finalizada com raspas de limão.',
      choosenSize: 14,
    },
  },
  {
    id: 1,
    name: 'Brigadeiro de Ninho com Nutella',
    price: 7.5,
    description: 'Saboreie-se com essa explosão de sabor!',
    imagePath: '/cake-vector.png',
    extra: {
      description: 'Brigadeiro de leite Ninho com recheio cremoso de Nutella.',
    },
  },
];
