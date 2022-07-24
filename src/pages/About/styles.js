import styled from 'styled-components';

export const AboutPageStyles = styled.div`
  margin-top: 20rem;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .right {
    flex: 2;
  }
  .left {
    flex: 3;
  }

  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }

  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }

  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }

  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }

  .about__info__items {
    margin-top: 6rem;
  }

  .about__info__item {
    margin-top: 10rem;
  }

  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 768px) {
    margin-top: 10rem;

    .top-section {
      flex-direction: column;
      gap: 5rem;
    }

    .about__info__item {
      max-width: 100%;
      gap: 3rem;
    }

    .about__subheading {
      font-size: 1.8rem;
    }

    .about__heading {
      font-size: 2.8rem;
    }

    .about__info__heading {
      font-size: 3rem;
    }
  }
`;
