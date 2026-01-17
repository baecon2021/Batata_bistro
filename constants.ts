import { MenuItem, InstagramPost } from './types';

// Images provided in the prompt (Kept exactly as requested)
export const BRAND_LOGO = "https://files.edgestore.dev/ab76j88001/public/443722e0-8805-4c0d-b08e-152e9f801b63.jpg";
export const HERO_BG = "https://files.edgestore.dev/ab76j88001/public/8c516335-51ec-43c3-b3c9-f19c01193d56.jpg";

// URL for online ordering (Extracted from the provided Instagram redirect link for stability)
export const ORDER_URL = "https://pedido.anota.ai/loja/BatataBistro";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: "A Especial do Chef",
    description: "Batata recheada com requeijão, copa-lombo suíno defumado, barbecue artesanal, queijo quark, finalizado com farofa crocante de bacon, maçã verde e farinha panko.",
    price: "R$ 46,00",
    serves: "Serve 01 pessoa",
    image: "https://files.edgestore.dev/ab76j88001/public/9e782d00-47e9-444b-9e4a-5f56b005e839.jpg"
  },
  {
    id: 2,
    title: "Rustica de Calabresa",
    description: "Batata assada macia recheada com mix de queijos derretidos, calabresa artesanal acebolada e pimentões salteados, trazendo um sabor caseiro e marcante.",
    price: "R$ 42,00",
    serves: "Serve 01 pessoa",
    image: "https://files.edgestore.dev/ab76j88001/public/3c647963-7186-4f40-8b9a-47124f5a3e14.jpg"
  },
  {
    id: 3,
    title: "Supreme de Bacon",
    description: "Uma explosão de sabor com nossa batata recheada com creme de queijo suave, coberta com bacon crocante em cubos e palha de batata artesanal.",
    price: "R$ 44,00",
    serves: "Serve 01 pessoa",
    image: "https://files.edgestore.dev/ab76j88001/public/7e296e6d-71b3-4682-843c-687254f15a31.jpg"
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