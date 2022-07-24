import styled from 'styled-components';

export const ProjectItemStyles = styled.div`
  .projectItem__Img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
      &:hover {
        cursor: default;
      }
    }
  }

  .projectItem__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    min-height: 220px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }

  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }

  .projectButton {
    display: inline-block;
    font-size: 1.8rem;
    text-decoration: underline;
    margin: 2rem 0;
    color: royalblue;
  }
`;
