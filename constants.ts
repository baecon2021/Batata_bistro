import { MenuItem, InstagramPost } from './types';
import imgBatata1 from './images/Batata_recheada.webp';
import imgBatata2 from './images/Batata_recheada2.webp';
import imgBatata3 from './images/Batata_recheada3.webp';

// Constants for text data

// URL for online ordering
export const ORDER_URL = "https://pedido.anota.ai/loja/BatataBistro";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    title: "A Especial do Chef",
    description: "Batata recheada com requeijão, copa-lombo suíno defumado, barbecue artesanal, queijo quark, finalizado com farofa crocante de bacon, maçã verde e farinha panko.",
    price: "R$ 46,00",
    serves: "Serve 01 pessoa",
    image: imgBatata1
  },
  {
    id: 2,
    title: "Rústica de Calabresa",
    description: "Batata assada macia recheada com mix de queijos derretidos, calabresa artesanal acebolada e pimentões salteados, trazendo um sabor caseiro e marcante.",
    price: "R$ 42,00",
    serves: "Serve 01 pessoa",
    image: imgBatata2
  },
  {
    id: 3,
    title: "Supreme de Bacon",
    description: "Uma explosão de sabor com nossa batata recheada com creme de queijo suave, coberta com bacon crocante em cubos e palha de batata artesanal.",
    price: "R$ 44,00",
    serves: "Serve 01 pessoa",
    image: imgBatata3
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: 1, image: imgBatata1, alt: "Nossa especialidade" },
  { id: 2, image: imgBatata2, alt: "Detalhes do prato" },
  { id: 3, image: imgBatata3, alt: "Sabor inigualável" },
  { id: 4, image: imgBatata1, alt: "Ingredientes frescos" },
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