import parmaImage from '../images/parma.svg';
import spaguettiImage from '../images/SpaguettiGambe.svg';
import torradasImage from '../images/TorradasParma.svg';
import ceasarImage from '../images/salad.svg';
import prune from '../images/prune.svg'

const products = [
  {
    id: 1,
    name: "Salada Ravanella",
    description: "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
    price: 49.97,
    image: parmaImage
  },
  {
    id: 2,
    name: "Spaguetti Gambe",
    description: "Massa fresca com camarões e pesto, ótimo para um jantar há duas pessoas",
    price: 79.97,
    image: spaguettiImage
  },
  {
    id: 3,
    name: "Torradinhas de Parma",
    description: "Presunto de parma e rúcula em um pão com fermentação natural",
    price: 25.97,
    image: torradasImage
  },
  {
    id: 4,
    name: "Salada Ceasar",
    description: "Salada com frango assado e maionese e um molho especial para o ceasar",
    price: 29.97,
    image: ceasarImage
  },
  {
    id: 5,
    name: "Prune",
    description: "Prune com tomate e mostarda, é delicioso e serve até 2 pessoas",
    price: 20.97,
    image: prune
  }
];

export default products;
