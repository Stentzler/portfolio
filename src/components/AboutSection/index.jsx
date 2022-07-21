import SectionTitle from '../SectionTitle';
import { AboutSectionStyle } from './styles';
import Ptext from '../Ptext';
import Button from '../Button';
import AboutImg from '../../assets/images/about-sec-img.png';

function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection__left">
          <SectionTitle
            className="section-title"
            subheading="Let me introduce myself"
            heading="About me"
          />
          <Ptext>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            aut magnam consectetur quia earum laboriosam illum tenetur,
            consequuntur quo eaque quas voluptas, ab fugiat iste.
          </Ptext>
          <div className="aboutSection__buttons">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
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
