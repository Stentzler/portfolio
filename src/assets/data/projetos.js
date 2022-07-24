import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projetos = [
  {
    id: uuidv4(),
    name: 'U Tracker',
    desc:
      'Uma aplicação para monitorar toda sua data em um só local. Eu desenvolvi o app para versão mobile',
    img: UTrackerImg,
    link: 'https://www.google.com',
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc:
      'Um app que concientiza as pessoas de como elas podem deixar a cidade onde vivem mais verde.',
    img: GreenCtgImg,
    link: 'https://www.google.com',
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Com esse app você pode monitorar a valorização de qualquer moeda. Este app também sugere alguns investimentos que estão em alta',
    img: CoinTrackerImg,
    link: 'https://www.google.com',
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'Portfolio de Cavin jr. Artista de New york city. Foi utilizado Next.js e Gatsby.js neste projeto',
    img: CavinImg,
    link: 'https://www.google.com',
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'Um software que permite ao usúario medir o desempenho de um website. Este software também traz algumas dicas de como melhorar a perfomance do website.',
    img: ProjectImg,
    link: 'https://www.google.com',
  },
];

export default projetos;
