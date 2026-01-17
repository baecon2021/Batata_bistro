import { MenuItem, InstagramPost } from './types';

// Updated paths to match the exact filenames provided in the project root
// Filenames: Logo_bataBistro.jpg, Batata_recheada.jpg, Batata_recheada2.jpg, Batata_recheada3.jpg

export const BRAND_LOGO = './Logo_bataBistro.jpg';
export const HERO_BG = './Batata_recheada.jpg';
export const ABOUT_IMAGE = './Batata_recheada2.jpg';

// URL for online ordering
export const ORDER_URL = "https://pedido.anota.ai/loja/BatataBistro";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: "A Especial do Chef",
    description: "Batata recheada com requeijão, copa-lombo suíno defumado, barbecue artesanal, queijo quark, finalizado com farofa crocante de bacon, maçã verde e farinha panko.",
    price: "R$ 46,00",
    serves: "Serve 01 pessoa",
    image: './Batata_recheada.jpg'
  },
  {
    id: 2,
    title: "Rustica de Calabresa",
    description: "Batata assada macia recheada com mix de queijos derretidos, calabresa artesanal acebolada e pimentões salteados, trazendo um sabor caseiro e marcante.",
    price: "R$ 42,00",
    serves: "Serve 01 pessoa",
    image: './Batata_recheada2.jpg'
  },
  {
    id: 3,
    title: "Supreme de Bacon",
    description: "Uma explosão de sabor com nossa batata recheada com creme de queijo suave, coberta com bacon crocante em cubos e palha de batata artesanal.",
    price: "R$ 44,00",
    serves: "Serve 01 pessoa",
    image: './Batata_recheada3.jpg'
  }
];

// Using local images for the Instagram feed to ensure they load correctly
export const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: 1, image: "./Batata_recheada.jpg", alt: "Nossa especialidade" },
  { id: 2, image: "./Batata_recheada2.jpg", alt: "Detalhes do prato" },
  { id: 3, image: "./Batata_recheada3.jpg", alt: "Sabor inigualável" },
  { id: 4, image: "./Batata_recheada.jpg", alt: "Ingredientes frescos" },
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