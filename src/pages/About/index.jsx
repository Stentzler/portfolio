import Ptext from '../../components/Ptext';
import Button from '../../components/Button';
import ContactBanner from '../../components/ContactBanner';
import AboutImg from '../../assets/images/about-page-img.png';
import { AboutPageStyles } from './styles';
import AboutInfoItem from '../../components/AboutInfoItem';

function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hi, I am <span>Vinicius Lima</span>
            </p>
            <h2 className="about__heading">Web Developer</h2>
            <div className="about__info">
              <Ptext>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                similique eveniet omnis possimus culpa accusantium.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                nostrum ad repellendus, voluptatibus blanditiis aspernatur?
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
                maiores exercitationem dolorem quis earum? Consequatur nulla
                laboriosam fugiat tempora fugit?
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
            <h1 className="about__info__heading">Education</h1>
            <AboutInfoItem
              title="School"
              items={['Dom Bosco Highschool, Curitiba-PR']}
            />
            <AboutInfoItem
              title="College"
              items={['Cantareira College, São Paulo-SP']}
            />
            <AboutInfoItem
              title="College"
              items={['Cantareira College, São Paulo-SP']}
            />
          </div>

          <div className="about__info__item">
            <h1 className="about__info__heading">My Skills</h1>
            <AboutInfoItem
              title="FrontEnd"
              items={['HTML', 'CSS', 'JavaScript', 'React', 'Redux']}
            />
            <AboutInfoItem
              title="BackEnd"
              items={['Python', 'Express', 'Node']}
            />
            <AboutInfoItem
              title="CSS Frameworks"
              items={['Bootstrap', 'Tailwind CSS', 'SASS', 'Styled Components']}
            />
          </div>
        </div>
      </div>
      <ContactBanner />
    </AboutPageStyles>
  );
}

export default About;
