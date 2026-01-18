export interface MenuItem {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  serves: string;
  category: 'carne' | 'mar' | 'veg';
}

export interface InstagramPost {
  id: number;
  image: string;
  alt: string;
}