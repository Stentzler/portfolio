import { MdPlace } from 'react-icons/md';
import styled from 'styled-components';
import Ptext from '../Ptext';

function ContactInfoItem({ icon = <MdPlace />, text = 'info here' }) {
  const ItemStyles = styled.div`
    padding: 2rem;
    background-color: var(--deep-dark);
    display: flex;
    align-items: center;
    gap: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
    .icon {
      color: var(--white);
      background-color: var(--gray-2);
      padding: 1.3rem;
      border-radius: 50%;
    }
    svg {
      width: 3.5rem;
    }
  `;

  return (
    <ItemStyles>
      <div className="icon">{icon}</div>
      <div className="info">
        <Ptext>{text}</Ptext>
      </div>
    </ItemStyles>
  );
}

export default ContactInfoItem;
