import { Link } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header className="header">
      <Link to='/' className="header__logo"/>
      <nav className="header__authentication">
        <Link to='/signup' className="header__authentication-link">Регистрация</Link>
        <Link to='/signin' className="header__authentication-link header__authentication-button">Войти</Link>
      </nav>
    </header>
  );
}

export default Header;