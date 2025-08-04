export interface ProductItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imagePath: string;
  extra: {
    description: string;
    sizes?: number[];
    choosenSize?: number;
  };
}

export interface ProductSegment {
  id: number;
  category: string;
  title: string;
  imagePath: string;
  items: ProductItem[];
}
