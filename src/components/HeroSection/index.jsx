import { AiOutlineLinkedin } from 'react-icons/ai';
import { useContext } from 'react';
import HeroImg from '../../assets/images/hero.png';
import SocialMediaArrow from '../../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../../assets/images/scroll-down-arrow.svg';
import Button from '../Button';
import Ptext from '../Ptext';
import { HeroStyles } from './styles';
import { LanguageContext } from '../../providers/language';

function HeroSection() {
  const { language } = useContext(LanguageContext);

  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            {language ? (
              <span>Bem vindo, me chamo</span>
            ) : (
              <span>Hello, I am</span>
            )}
            <span className="hero__name">Vinicius Lima</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="hero" />
          </div>
          <div className="hero__info">
            <Ptext>Front-End Developer</Ptext>
            <Button
              btnLink="/projects"
              btnText={language ? 'Meus projetos' : 'Check my projects'}
            />
          </div>
          <div className="hero__socials">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="arrow" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/vinicius-stentzler-garcia-de-lima-287130230/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <AiOutlineLinkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__scrollDown">
            <p>scroll</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

export default HeroSection;
