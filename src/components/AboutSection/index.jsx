import { useContext } from 'react';
import SectionTitle from '../SectionTitle';
import { AboutSectionStyle } from './styles';
import Ptext from '../Ptext';
import Button from '../Button';
import AboutImg from '../../assets/images/about-sec-img.png';
import { LanguageContext } from '../../providers/language';

function AboutSection() {
  const { language } = useContext(LanguageContext);

  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading={language ? 'Introdução' : 'Let me introduce myself'}
            heading={language ? 'Sobre mim' : 'About me'}
          />
          <Ptext>
            {language
              ? 'Me chamo Vinicius Lima, desenvolvedor Front-End há aproximadamente um ano. Iniciei formalmente meus estudos em Janeiro de 2022 na Kenzie Academy Brasil, dentro deste período tive a opurtunidade de aprofundar meus conhecimentos como Full-Stack dev. Clique no botão abaixo para me conhecer melhor. '
              : "I am Vinicius Lima, I've been studying Font-end development for about an year. I followed a full-stack course at Kenzie Academy Brazil... Click on the button below to read more"}
          </Ptext>
          <div className="aboutSection__buttons">
            <Button
              btnLink="/projects"
              btnText={language ? 'Projetos' : 'Works'}
            />
            <Button
              btnLink="/about"
              btnText={language ? 'Saiba mais' : 'Read More'}
              outline
            />
          </div>
        </div>
        <div className="aboutSection__right">
          <img src={AboutImg} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}

export default AboutSection;
