import { PStyle } from './styles';

function Ptext({ children }) {
  return (
    <PStyle className="para">
      <p>{children}</p>
    </PStyle>
  );
}

export default Ptext;
