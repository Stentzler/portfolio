import { v4 as uuidv4 } from 'uuid';
import Mern from '../images/project_logos/mern.png';
import React from '../images/project_logos/react.png';
import Node from '../images/project_logos/node.png';
import DJ from '../images/project_logos/dj.png';
import EdgeLedger from '../images/edge.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Edge Ledger (HTML/CSS)',
    desc: 'Fictional website developed during my studies for sharpening my CSS and HTML skills ',
    img: EdgeLedger,
    link: 'https://stentzler.github.io/EdgeLedger/',
    repo: 'https://github.com/Stentzler/EdgeLedger',
  },
  {
    id: uuidv4(),
    name: 'GitHub_Search (React)',
    desc: 'Developed with React, Tailwind_CSS e Daisy_UI. Request a gitHub user profile and display it. ',
    img: React,
    link: 'https://github-finder-lyart-eight.vercel.app/',
    repo: 'https://github.com/Stentzler/Github_search_app',
  },
  {
    id: uuidv4(),
    name: 'Support_App (Full-Stack)',
    desc: 'Developed with MongoDB, Express, Node.JS e React. Fictional user support page that register an issue and saves it into a Mongo Database',
    img: Mern,
    link: 'https://frontend-iota-lilac-23.vercel.app/',
    repo: 'https://github.com/Stentzler/MERN_ticket_manager',
  },
  {
    id: uuidv4(),
    name: 'CoDelivery (Node.JS)',
    desc: 'Developed with Node.JS, Express, TypeScript, TypeORM e PostgreSQL. Basic food delivery API. ',
    img: Node,
    link: 'https://github.com/Stentzler/CoDelivery/blob/develop/README.md',
    repo: 'https://github.com/Stentzler/CoDelivery',
  },
  {
    id: uuidv4(),
    name: 'Breshopee (React)',
    desc: 'React project. Fictional second-hand clothes e-commerce where the user is able to purchase clothes as well as selling own products trhough an API',
    img: React,
    link: 'https://m3-capstone-proj.vercel.app/',
    repo: 'https://github.com/Stentzler/Breshoppe',
  },
  {
    id: uuidv4(),
    name: 'School_API (Django)',
    desc: 'Developed with Python, Django e PostgreSQL. School API for teachers, student and school managers . ',
    img: DJ,
    link: 'https://github.com/Stentzler/DjangoAPI/blob/develop/README.md',
    repo: 'https://github.com/Stentzler/DjangoAPI',
  },
  {
    id: uuidv4(),
    name: 'Calc_APP (React)',
    desc: 'Developed with React, Styled-Components. Calculates the amout to be paid for a vendor through an API request. ',
    img: React,
    link: 'https://calc-app-bice.vercel.app/',
    repo: 'https://github.com/Stentzler/calc_app',
  },
];

export default projects;
