import styled from 'styled-components';

export const TestimonialSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;

  .testimonial__wrapper {
    position: relative;
    max-width: 700px;
    margin: 0 auto;
  }

  .testimonial__info {
    width: 100%;
    height: fit-content;
    min-height: 280px;
    padding: 3rem;
    background-color: var(--deep-dark);
    border-radius: 12px;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .testimonial__desc {
    .para {
      text-align: center;
    }
  }

  .testimonial__name {
    margin-top: 4rem;
    font-family: 'Montserrat Bold';
    font-size: 2.2rem;
  }

  .testimonial__title {
    font-size: 1.6rem;
    margin-top: 0.3rem;
  }

  .arrows {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 30px;
      pointer-events: none;
    }

    .next,
    .prev {
      margin: 0 0.5rem;
      width: fit-content;
      background-color: var(--deep-dark);
      padding: 0.5rem 2rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }

  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }
  .fade-exit {
    opacity: 1;
    transform: scale(1);
  }
  .fade-exit.active {
    opacity: 0;
    transform: scale(0.96);
    transition: 250ms ease-in;
    transition-property: opacity, transform;
  }

  @media only screen and (max-width: 768px) {
    padding: 0;
  }
`;
