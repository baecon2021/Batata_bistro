import { MenuItem, InstagramPost } from './types';

// Using direct paths for images to avoid module resolution issues
// These paths are relative to the public root (index.html location)
export const BRAND_LOGO = './images/Logo_batata.jpg';
export const HERO_BG = './images/Batata_recheada.jpg';
export const ABOUT_IMAGE = './images/Batata_recheada (2).jpg';

// URL for online ordering (Extracted from the provided Instagram redirect link for stability)
export const ORDER_URL = "https://pedido.anota.ai/loja/BatataBistro";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: "A Especial do Chef",
    description: "Batata recheada com requeijão, copa-lombo suíno defumado, barbecue artesanal, queijo quark, finalizado com farofa crocante de bacon, maçã verde e farinha panko.",
    price: "R$ 46,00",
    serves: "Serve 01 pessoa",
    image: 'images/Batata_recheada.jpg'
  },
  {
    id: 2,
    title: "Rustica de Calabresa",
    description: "Batata assada macia recheada com mix de queijos derretidos, calabresa artesanal acebolada e pimentões salteados, trazendo um sabor caseiro e marcante.",
    price: "R$ 42,00",
    serves: "Serve 01 pessoa",
    image: './images/Batata_recheada2.jpg'
  },
  {
    id: 3,
    title: "Supreme de Bacon",
    description: "Uma explosão de sabor com nossa batata recheada com creme de queijo suave, coberta com bacon crocante em cubos e palha de batata artesanal.",
    price: "R$ 44,00",
    serves: "Serve 01 pessoa",
    image: '../images/Batata_recheada3.jpg'
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1573167101669-476636169a22?auto=format&fit=crop&q=80&w=600", alt: "Ambiente do restaurante" },
  { id: 2, image: "https://images.unsplash.com/photo-1544253132-7d2d6594d30c?auto=format&fit=crop&q=80&w=600", alt: "Preparação artesanal" },
  { id: 3, image: "https://images.unsplash.com/photo-1628198908331-b8be3574519f?auto=format&fit=crop&q=80&w=600", alt: "Detalhes do prato" },
  { id: 4, image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600", alt: "Ingredientes frescos" },
];

export const INSTAGRAM_URL = "https://www.instagram.com/batata_bistro/";

// Structured for the hover menu based on the image provided
export const OPERATING_SCHEDULE = [
  { day: "Domingo", hours: "18h25 às 22h50" },
  { day: "Segunda-feira", hours: "Fechado" },
  { day: "Terça-feira", hours: "Fechado" },
  { day: "Quarta-feira", hours: "18h25 às 23h" },
  { day: "Quinta-feira", hours: "18h25 às 23h" },
  { day: "Sexta-feira", hours: "18h25 às 23h" },
  { day: "Sábado", hours: "18h25 às 23h" },
];