import styled from 'styled-components';

export const ButtonStyle = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
      props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'var(--gray-1)' : '#000')};
    transition: all 0.3s ease-in-out;

    &:hover {
      color: var(--gray-1);
      background-color: ${(props) =>
        props.outline ? 'var(--gray-2)' : 'var(--gray-2)'};
    }
  }
  @media only screen and (max-width: 768px) {
    .button {
      font-size: 1.8rem;
    }
  }
`;
