import { MenuItem, InstagramPost } from './types';

// Image URLs (High Resolution)
export const IMAGES = {
  HERO_MAIN: "https://drive.google.com/thumbnail?id=1BHYfGPJIZOOoAmPY_QC1MViza7KfIYPq&sz=w2000",
  STROGONOFF_CARNE: "https://drive.google.com/thumbnail?id=15pPY1jjaXrUjLIyQCC6S0F7VN2BPfsmY&sz=w1400",
  MEXICANA: "https://drive.google.com/thumbnail?id=1fOjABeMfj5BoD7yIKJW_iYjgsrjP4dKn&sz=w1400",
  BROCOLIS: "https://drive.google.com/thumbnail?id=1qYDweP8XunPa2ctPNoXCv-fVsUxJE_JB&sz=w1400",
  CORACAO: "https://drive.google.com/thumbnail?id=1k9obl5ja4IEVfoLzImmzci7KzbnFT2Pi&sz=w1400"
};

export const ORDER_URL = "https://pedido.anota.ai/loja/BatataBistro";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: "Batata Strogonoff de Carne",
    description: "Requeijão, carne em cubos, molho de mostarda, bacon, queijo e batata palha artesanal.",
    price: "R$ 42,90",
    serves: "Serve 01 pessoa",
    image: IMAGES.STROGONOFF_CARNE,
    category: 'carne'
  },
  {
    id: 2,
    title: "Batata Mexicana",
    description: "Requeijão, calabresa em cubos, pimentão, azeitona, pimenta, bacon, queijo e batata palha.",
    price: "R$ 42,90",
    serves: "Serve 01 pessoa",
    image: IMAGES.MEXICANA,
    category: 'carne'
  },
  {
    id: 3,
    title: "Batata Strogonoff de Coração",
    description: "Requeijão, coração premium, bacon, queijo derretido e batata palha crocante.",
    price: "R$ 44,90",
    serves: "Serve 01 pessoa",
    image: IMAGES.CORACAO,
    category: 'carne'
  },
  {
    id: 4,
    title: "Quatro Queijos com Brócolis",
    description: "Requeijão, gorgonzola, mussarela, provolone, brócolis fresco e batata palha.",
    price: "R$ 36,90",
    serves: "Serve 01 pessoa",
    image: IMAGES.BROCOLIS,
    category: 'veg'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: 1, image: IMAGES.STROGONOFF_CARNE, alt: "Sabor Incomparável" },
  { id: 2, image: IMAGES.MEXICANA, alt: "A Pimenta Perfeita" },
  { id: 3, image: IMAGES.CORACAO, alt: "Clássico do Bistrô" },
  { id: 4, image: IMAGES.BROCOLIS, alt: "Equilíbrio Verde" },
];

export const INSTAGRAM_URL = "https://www.instagram.com/batata_bistro/";

export const OPERATING_SCHEDULE = [
  { day: "Domingo", hours: "18h25 às 22h50" },
  { day: "Segunda-feira", hours: "Fechado" },
  { day: "Terça-feira", hours: "Fechado" },
  { day: "Quarta-feira", hours: "18h25 às 23h" },
  { day: "Quinta-feira", hours: "18h25 às 23h" },
  { day: "Sexta-feira", hours: "18h25 às 23h" },
  { day: "Sábado", hours: "18h25 às 23h" },
];