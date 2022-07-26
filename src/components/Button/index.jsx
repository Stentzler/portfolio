import { Link } from 'react-router-dom';
import { ButtonStyle } from './styles';

function Button({ btnLink = 'test', btnText = 'test', outline = false }) {
  return (
    <ButtonStyle outline={outline} className="button-wrapper">
      <Link className="button" to={btnLink}>
        {btnText}
      </Link>
    </ButtonStyle>
  );
}

export default Button;
