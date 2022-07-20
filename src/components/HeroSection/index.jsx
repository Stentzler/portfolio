import { AiOutlineLinkedin } from 'react-icons/ai';
import HeroImg from '../../assets/images/hero.png';
import SocialMediaArrow from '../../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../../assets/images/scroll-down-arrow.svg';
import Button from '../Button';
import Ptext from '../Ptext';
import { HeroStyles } from './styles';

function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, I am</span>
            <span className="hero__name">Vinicius Stentzler</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="hero" />
          </div>
          <div className="hero__info">
            <Ptext>Front-End Developer</Ptext>
            <Button btnLink="/projects" btnText="Check my projects" />
          </div>
          <div className="hero__socials">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocialMediaArrow} alt="" />
            </div>
            <div className="hero__social__text">
              <ul>
                <li>
                  <a href="#" target="_blank" rel="noreferrer">
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
