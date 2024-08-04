import parmaImage from '../images/parma.svg';
import spaguettiImage from '../images/SpaguettiGambe.svg';
import torradasImage from '../images/TorradasParma.svg';

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
  }
];

export default products;
