import styled from 'styled-components';
import Ptext from '../Ptext';
import Button from '../Button';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0;
    text-align: center;
  }

  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  @media only screen and (max-width: 768px) {
    .contactBanner__heading {
      font-size: 2.7rem;
    }
  }
`;

function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <Ptext>Have A project in mind?</Ptext>
          <h3 className="contactBanner__heading">Let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}

export default ContactBanner;
