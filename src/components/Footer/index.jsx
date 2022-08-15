import styled from 'styled-components';
import { useContext } from 'react';
import Ptext from '../Ptext';
import FooterCol from '../FooterCol';
import { LanguageContext } from '../../providers/language';

const FooterStyles = styled.footer`
  padding-top: 8rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 4rem;
    align-items: flex-start;
  }

  .footer__col1 {
    flex: 2;
  }

  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }

  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }

  .email {
    a {
      pointer-events: none;
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }

    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

function Footer() {
  const { language } = useContext(LanguageContext);

  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <div className="footer__col1__title">Vinicius Lima</div>
          <Ptext>Full-Stack Developer</Ptext>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Nav-Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading={language ? 'Localização' : 'Location'}
            links={[
              {
                title: language
                  ? 'Curitiba, Paraná, Brasil'
                  : 'Curitiba, Paraná, Brazil',
                path:
                  'https://www.google.com/maps/place/Curitiba,+State+of+Paran%C3%A1/@-25.4532075,-49.3119538,13z/data=!4m13!1m7!3m6!1s0x94dce35351cdb3dd:0x6d2f6ba5bacbe809!2sCuritiba,+State+of+Paran%C3%A1!3b1!8m2!3d-25.4372382!4d-49.2699727!3m4!1s0x94dce35351cdb3dd:0x6d2f6ba5bacbe809!8m2!3d-25.4372382!4d-49.2699727',
                link: false,
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/vinicius-stentzler/',
                link: false,
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <Ptext>&copy; 2022 - Vinicius Lima | Web Developer</Ptext>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
