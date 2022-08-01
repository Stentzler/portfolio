import { useContext } from 'react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import {
  SiRedux,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiBootstrap,
  SiCss3,
} from 'react-icons/si';
import Ptext from '../../components/Ptext';
import Button from '../../components/Button';
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
              Hi, I am <span>Vinicius Lima</span>
            </p>
            <h2 className="about__heading">Front-End Developer</h2>
            <div className="about__info">
              <Ptext>
                {language
                  ? 'Me chamo Vinicius Lima, estudo programação Front-End há aproximadamente um ano. Iniciei formalmente meus estudos em Janeiro de 2022 na Kenzie Academy Brasil, dentro deste período tive a opurtunidade de aprofundar meus conhecimentos tanto no front como no back-end, e também, trabalhar como coach das turmas anteriores a minha por aproximadamente seis meses.'
                  : "I am Vinicius Lima, I've been studying Font-end development for about an year. I followed a full-stack course at Kenzie Academy Brazil, where I also had the opportunity to work as coach for the students that were starting their studies"}
              </Ptext>
            </div>
            <Button btnText="Download CV" btnLink="#" />
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
              title={language ? 'Escola' : 'School'}
              items={
                language
                  ? ['Ensino Médio Dom Bosco, Curitiba-PR']
                  : ['Dom Bosco Highschool, Curitiba-PR']
              }
            />
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
              items={[<FaReact />, <SiRedux />, <SiJavascript />]}
            />
            <AboutInfoItem
              title="BackEnd"
              items={[<FaNodeJs />, <SiTypescript />, <SiMongodb />]}
            />
            <AboutInfoItem
              title="CSS"
              items={[<SiTailwindcss />, <SiBootstrap />, <SiCss3 />]}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}

export default About;
