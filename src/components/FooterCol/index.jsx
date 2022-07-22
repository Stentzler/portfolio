import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyles = styled.div`
  .heading {
    font-size: 1.4rem;
    margin-bottom: 2rem;
  }

  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

function FooterCol({
  heading = 'col heading',
  links = [
    {
      type: 'link',
      title: 'Home',
      path: '/',
    },
    {
      type: 'link',
      title: 'About',
      path: '/about',
    },
  ],
}) {
  return (
    <ColStyles>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((item, index) => (
          <li key={index}>
            {item.type === 'link' ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a href={item.path} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyles>
  );
}

export default FooterCol;
