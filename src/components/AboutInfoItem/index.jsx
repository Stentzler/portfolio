import styled from 'styled-components';
import Ptext from '../Ptext';

const AboutItemStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2.5rem;
  position: relative;

  .title {
    font-size: 2.4rem;
  }
  .items {
    display: flex;
    gap: 1.5rem;
    position: absolute;
    left: 18rem;
  }

  .item {
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 8px;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .item {
      position: initial;
      gap: 1rem;
    }
    .title {
      font-size: 2rem;
    }
  }
`;

function AboutInfoItem({ title = 'title', items = ['HTML', 'CSS'] }) {
  return (
    <AboutItemStyles>
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item, index) => (
          <div className="item" key={index}>
            <Ptext>{item}</Ptext>
          </div>
        ))}
      </div>
    </AboutItemStyles>
  );
}

export default AboutInfoItem;
