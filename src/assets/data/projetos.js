import { v4 as uuidv4 } from 'uuid';

import KenzieFood from '../images/KenzieFood.png';
import Breshoppe from '../images/breshoppe.png';
import CatchTheInsect from '../images/catch.png';
import EdgeLedger from '../images/edge.png';

const projetos = [
  {
    id: uuidv4(),
    name: 'Edge Ledger',
    desc: 'Projeto desenvolvido com o propósito de aprimorar meu CSS e HTML.',
    img: EdgeLedger,
    link: 'https://stentzler.github.io/EdgeLedger/',
    repo: 'https://github.com/Stentzler/EdgeLedger',
  },
  {
    id: uuidv4(),
    name: 'Kenzie Food',
    desc:
      'Projeto utilizando HTML, CSS e Vanilla JS. Simula um e-commerce onde o usuário pode comprar e cadastrar produtos através de uma API',
    img: KenzieFood,
    link: 'https://stentzler.github.io/KenzieFood/',
    repo: 'https://github.com/Stentzler/KenzieFood',
  },
  {
    id: uuidv4(),
    name: 'Breshopee',
    desc:
      'Projeto React que simula um e-commerce de roupas usadas onde os usuários podem comprar produtos bem como cadastrar produtos para serem vendidos através de uma API. ',
    img: Breshoppe,
    link: 'https://m3-capstone-proj.vercel.app/',
    repo: 'https://github.com/noomloof/m3-capstone-proj',
  },
  {
    id: uuidv4(),
    name: 'Catch The Insect',
    desc:
      'Projeto desenvolvido enquanto estudava JS vanilla. Tentei desenvolver o sistema de um jogo simples no HTML',
    img: CatchTheInsect,
    link: 'https://stentzler.github.io/Vanilla-JS/',
    repo: 'https://github.com/Stentzler/Vanilla-JS',
  },
];

export default projetos;
