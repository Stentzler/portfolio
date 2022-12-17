import { v4 as uuidv4 } from 'uuid';

import React from '../images/project_logos/react.png';
import Node from '../images/project_logos/node.png';
import DJ from '../images/project_logos/dj.png';
import EdgeLedger from '../images/edge.png';
import Mern from '../images/project_logos/mern.png';

const projetos = [
  {
    id: uuidv4(),
    name: 'Edge_Ledger (HTML/CSS)',
    desc: 'Projeto desenvolvido com o propósito de aprimorar meu CSS e HTML.',
    img: EdgeLedger,
    link: 'https://stentzler.github.io/EdgeLedger/',
    repo: 'https://github.com/Stentzler/EdgeLedger',
  },
  {
    id: uuidv4(),
    name: 'GitHub_Search (React)',
    desc: 'Desenvolvido com React, Tailwind_CSS e Daisy_UI. Faz a busca de um profile no github e exibe suas credenciais ',
    img: React,
    link: 'https://github-finder-lyart-eight.vercel.app/',
    repo: 'https://github.com/Stentzler/Github_search_app',
  },
  {
    id: uuidv4(),
    name: 'Support_App (Full-Stack)',
    desc: 'Projeto utilizando MongoDB, Express, Node.JS e React. Simula uma página de suporte ao usuário que salva os registros em uma Database Mongo',
    img: Mern,
    link: 'https://frontend-iota-lilac-23.vercel.app/',
    repo: 'https://github.com/Stentzler/MERN_ticket_manager',
  },
  {
    id: uuidv4(),
    name: 'CoDelivery (Node.JS)',
    desc: 'API desenvolvida com Node.JS, Express, TypeScript, TypeORM e PostgreSQL. Simula uma API de delivery de alimento. ',
    img: Node,
    link: 'https://github.com/Stentzler/CoDelivery/blob/develop/README.md',
    repo: 'https://github.com/Stentzler/CoDelivery',
  },
  {
    id: uuidv4(),
    name: 'Breshopee (React)',
    desc: 'Projeto React que simula um e-commerce de roupas usadas onde os usuários podem comprar produtos bem como cadastrar produtos para serem vendidos através de uma API. ',
    img: React,
    link: 'https://m3-capstone-proj.vercel.app/',
    repo: 'https://github.com/Stentzler/Breshoppe',
  },
  {
    id: uuidv4(),
    name: 'School_API (Django)',
    desc: 'API desenvolvida com Python, Django e PostgreSQL. Simula uma API para controle escolar de alunos professores e exames. ',
    img: DJ,
    link: 'https://github.com/Stentzler/DjangoAPI/blob/develop/README.md',
    repo: 'https://github.com/Stentzler/DjangoAPI',
  },
  {
    id: uuidv4(),
    name: 'Calc_APP (React)',
    desc: 'APP desenvolvida com React, Styled-Components. Faz o calculo do valor a ser recebido através de uma API. ',
    img: React,
    link: 'https://calc-app-bice.vercel.app/',
    repo: 'https://github.com/Stentzler/calc_app',
  },
];

export default projetos;
