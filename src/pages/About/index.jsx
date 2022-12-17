import { useContext } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiBootstrap,
  SiGithub,
  SiPostgresql,
  SiDjango,
  SiVuedotjs,
  SiExpress,
  SiDocker,
} from 'react-icons/si';
import Ptext from '../../components/Ptext';
import ContactBanner from '../../components/ContactBanner';
import AboutImg from '../../assets/images/about-page-img.png';
import { AboutPageStyles } from './styles';
import AboutInfoItem from '../../components/AboutInfoItem';
import { LanguageContext } from '../../providers/language';

function About() {
  const { language } = useContext(LanguageContext);

  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              {language
                ? 'Olá, me chamo Vinicius Lima'
                : 'Hi, I am Vinicius Lima'}
            </p>
            <h2 className="about__heading">Front-End Developer</h2>
            <div className="about__info">
              <Ptext>
                {language
                  ? 'Iniciei meus estudos em tecnologia por incentivo do meu irmão mais velho, que me ensinou lógica da programação através da linguagem Python. Logo depois entrei na Kenzie Academy com o intuito de aprofundar meus conhecimentos relacionados às tecnologias de front e back-end, melhorei meu conhecimento HTML, CSS, JavaScript, React, Node.js, Postgresql, TypeScript, Python, Django entre outras libraries e frameworks relacionados. Acredito que a área da tecnologia é bastante abrangente e se renova rapidamente, com isso é necessário estar atento às tendências do mercado e sempre disposto a aprender. Esta necessidade de estar sempre se aperfeiçoando e buscando novos conhecimentos é o que me cativou nesta área.'
                  : "I am Vinicius Lima, I've been studying Font-end development for about an year. I followed a full-stack course at Kenzie Academy Brazil, where I also had the opportunity to learn HTML, CSS, JavaScript, React, Express, Node.js, Postgres, Docker, TypeScript, Python, Django and some related libraries/frameworks. Technology is evolving at a fast peace and I am always seeking for new technologies to learn in order to improve the quality of my work."}
              </Ptext>
            </div>
            <a
              href="https://drive.google.com/file/d/1VdJ_7OH1EOfDQGx2jGUQy0eEd9vqKHiu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="right">
            <img src={AboutImg} alt="Vinicius Img" />
          </div>
        </div>
        <div className="about__info__items">
          <div className="about__info__item">
            <h1 className="about__info__heading">
              {language ? 'Educação' : 'Education'}
            </h1>
            <AboutInfoItem
              title={language ? 'Graduação' : 'College'}
              items={
                language
                  ? ['Faculdade Cantareira, São Paulo-SP']
                  : ['Cantareira College, Sao Paulo-SP']
              }
            />
            <AboutInfoItem
              title={language ? 'Mestrado' : 'Master'}
              items={
                language
                  ? ['KASK & Conservatorium, Ghent-Belgium']
                  : ['KASK & Conservatorium, Ghent-Belgium']
              }
            />
            <AboutInfoItem
              title={language ? 'Curso Livre' : 'IT Courses'}
              items={
                language
                  ? ['Kenzie Academy Brasil - Desenvolvedor Full-Stack']
                  : ['Kenzie Academy Brazil - Full-Stack Developer']
              }
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={[<FaReact />, <SiVuedotjs />, <SiTypescript />]}
            />
            <AboutInfoItem
              title="BackEnd"
              items={[<FaNodeJs />, <SiExpress />, <SiDjango />]}
            />
            <AboutInfoItem
              title="Databases"
              items={[<SiMongodb />, <SiPostgresql />, <SiDocker />]}
            />
            <AboutInfoItem
              title={language ? 'Outros' : 'Tools'}
              items={[<SiTailwindcss />, <SiBootstrap />, <SiGithub />]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}

export default About;
