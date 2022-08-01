import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { useContext } from 'react';
import { LanguageContext } from '../../providers/language';
import SectionTitle from '../SectionTitle';
import ContactInfoItem from '../ContactInfoItem';
import ContactForm from '../ContactForm';

const ContactSectionStyles = styled.div`
  padding: 10rem 0;

  .contactSection__wrapper {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
  }

  .contactSection__wrapper::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 50%;
    background-color: var(--gray-1);
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }

  .left {
    width: 100%;
    max-width: 500px;
  }

  .right {
    max-width: 500px;
    width: 100%;
  }

  @media only screen and (max-width: 890px) {
    .contactSection__wrapper::after {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    .contactSection__wrapper {
      flex-direction: column;
    }
    .left,
    .right {
      max-width: 100%;
    }

    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
  }
`;

function ContactSection() {
  const { language } = useContext(LanguageContext);

  return (
    <ContactSectionStyles>
      <div className="container">
        <SectionTitle
          heading={language ? 'Contato' : 'Contact'}
          subheading={language ? 'Envie sua mensagem' : 'Get in touch'}
        />
        <div className="contactSection__wrapper">
          <div className="left">
            <ContactInfoItem
              icon={<MdLocalPhone />}
              text={language ? 'Não disponível' : 'Not available'}
            />
            <ContactInfoItem
              icon={<MdEmail />}
              text="vin.stentzler@gmail.com"
            />
            <ContactInfoItem
              text={language ? 'Curitiba-PR, Brasil' : 'Curitiba-PR, Brazil'}
            />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyles>
  );
}

export default ContactSection;
