import styled from 'styled-components';

export const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;
    .span {
      display: inline-block;
      width: 100%;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Montserrat SemiBold';
      color: #fff;
    }
  }

  .hero__img {
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }

  .hero__info {
    margin-top: -14rem;
  }

  .hero__socials,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }

  .hero__socials {
    left: 50px;
  }

  .hero__scrollDown {
    right: 50px;
  }

  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
    .hero__scrollDown {
      img {
        max-height: 70px;
      }
    }
  }
  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }

  svg {
    font-size: 3rem;
    transform: rotate(90deg) translateX(2px);
    transition: all 0.3s;
    &:hover {
      fill: var(--white);
    }
  }

  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }

    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -2.15rem;
      .hero__name {
        font-size: 3.6rem;
      }
    }

    .hero__img {
      height: 380px;
    }

    .hero__info {
      margin-top: -2.4rem;
    }

    .hero__socials {
      left: 0px;
      bottom: 10%;
      width: 20px;

      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }

    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }

    svg {
      font-size: 25px;
      transform: rotate(90deg) translateX(3px);
    }
  }
`;
