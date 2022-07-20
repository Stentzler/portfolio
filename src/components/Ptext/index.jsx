import { PStyle } from './styles';

function Ptext({ children }) {
  return (
    <PStyle>
      <p>{children}</p>
    </PStyle>
  );
}

export default Ptext;
