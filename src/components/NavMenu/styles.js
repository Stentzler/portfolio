import styled from 'styled-components';

export const NavMenuStyles = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  width: 100%;
  padding: 1rem 0;

  background-color: var(--dark-bg);

  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;

    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3 ease background-color;
      &:hover {
        background-color: var(--deep-dark);
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: var(--gray-1);
      outline: none;
    }

    .active {
      color: var(--white);
    }
  }

  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 4rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }

  .closeNavIcon {
    display: none;
  }

  .btn-lang {
    position: absolute;
    right: 45px;
    top: 17px;
    height: 30px;
    border-radius: 8px;
    padding: 2px 6px;
    border: none;
    background-color: #000;
    color: var(--white);
    cursor: pointer;
    &:hover {
      background-color: var(--deep-dark);
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0;

    .btn-lang {
      right: 210px;
      top: 15px;
    }

    .mobile-menu-icon {
      display: block;
    }

    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }

    .navItems {
      --top: 1rem;
      transition: 0.4s ease transform;
      background-color: var(--deep-dark);
      padding: 2rem;
      width: 90%;
      max-width: 320px;
      border-radius: 12px;
      position: absolute;
      top: var(--top);
      right: 1rem;

      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        margin-bottom: 1rem;
      }
    }
  }
`;
