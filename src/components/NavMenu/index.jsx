import { NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';
import { useContext, useState } from 'react';
import { NavMenuStyles } from './styles';
import { LanguageContext } from '../../providers/language';

function NavMenu() {
  const { language, setLanguage } = useContext(LanguageContext);

  const [showNav, setShowNav] = useState(false);

  return (
    <NavMenuStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>
      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {language ? 'Projetos' : 'Projects'}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            {language ? 'Contato' : 'Contact'}
          </NavLink>
        </li>
        <li>
          <button
            type="button"
            onClick={() => {
              setLanguage(!language);
              setShowNav(!showNav);
            }}
            className="btn-lang"
          >
            {language ? 'English' : 'PT-BR'}
          </button>
        </li>
      </ul>
    </NavMenuStyles>
  );
}

export default NavMenu;
