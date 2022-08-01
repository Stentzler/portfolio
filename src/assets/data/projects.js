import { v4 as uuidv4 } from 'uuid';
import KenzieFood from '../images/KenzieFood.png';
import Breshoppe from '../images/breshoppe.png';
import CatchTheInsect from '../images/catch.png';
import EdgeLedger from '../images/edge.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Edge Ledger',
    desc:
      'Fictional website developed during my studies for sharpening my CSS and HTML skills ',
    img: EdgeLedger,
    link: 'https://stentzler.github.io/EdgeLedger/',
    repo: 'https://github.com/Stentzler/EdgeLedger',
  },
  {
    id: uuidv4(),
    name: 'Kenzie Food',
    desc:
      'Developed HTML, CSS & Vanilla JS. fictional e-commerce website where you can purchase produts and register your own products for sale',
    img: KenzieFood,
    link: 'https://stentzler.github.io/KenzieFood/',
    repo: 'https://github.com/Stentzler/KenzieFood',
  },
  {
    id: uuidv4(),
    name: 'Breshopee',
    desc:
      'React project. Fictional second-hand clothes e-commerce where the user is able to purchase clothes as well as selling own products trhough an API',
    img: Breshoppe,
    link: 'https://m3-capstone-proj.vercel.app/',
    repo: 'https://github.com/noomloof/m3-capstone-proj',
  },
  {
    id: uuidv4(),
    name: 'Catch The Insect',
    desc:
      'Project developed while studying Vanilla JS. A really simple game on an HTML structure',
    img: CatchTheInsect,
    link: 'https://stentzler.github.io/Vanilla-JS/',
    repo: 'https://github.com/Stentzler/Vanilla-JS',
  },
];

export default projects;
