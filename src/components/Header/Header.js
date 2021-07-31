import { Link, Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import './Header.css';


function Header({ isLogin=false }) {
  const routs = ['/movies', '/saved-movies', '/profile', '/' ];

  const [isClickedBurgerMenu, setIsClickedBurgerMenu] = useState(false);

  function handleOpenBurgerMenu() {
    setIsClickedBurgerMenu(true);
  }

  function handleCloseBurgerMenu() {
    setIsClickedBurgerMenu(false);
  }

  return (
    <Route exact path={routs}>
      { !isLogin ?
        <header className="header">
          <Link to='/' className="header__logo"/>
          <nav className="header__authentication">
            <Link to='/signup' className="header__authentication-link">Регистрация</Link>
            <Link to='/signin' className="header__authentication-link header__authentication-button">Войти</Link>
          </nav>
        </header>
        :
        <header className="header header__color_FA">
          <nav className="header__movies">
          <div className="header__movies-container">
            <Link to='/' className="header__logo header__movies-logo"/>
            <Link to='/movies' className="header__authentication-link header__movies-link header__authentication-link_disabled">Фильмы</Link>
            <Link to='/saved-movies' className="header__authentication-link header__authentication-link_inactive header__authentication-link_disabled">Сохраненые фильмы</Link>
          </div>
          <div className="header__movies-container header__movies-container_disabled">
            <Link to='/profile' className="header__authentication-link header__movies-link header__authentication-link_disabled">Аккаунт</Link>
            <Link to='/profile' className="header__movies-account-icon header__authentication-link_disabled"></Link>
          </div>
          <button onClick={handleOpenBurgerMenu} className="header__burger-menu-button"></button>
          {
              isClickedBurgerMenu ?
                <>
                  <div className="header__burger-menu-overlay"></div>
                  <div className="header__burger-menu">
                    <div className="header__burger-menu-container">
                      <Link exact to="/" onClick={handleCloseBurgerMenu} className="header__burger-menu-link">Главная</Link>
                      <Link to='/movies' onClick={handleCloseBurgerMenu} className="header__burger-menu-link header__burger-menu-link_active">Фильмы</Link>
                      <Link to='/saved-movies' onClick={handleCloseBurgerMenu} className="header__burger-menu-link">Сохранённые фильмы</Link>
                    </div>
                    <div className="header__burger-menu-account">
                      <Link to='/profile' onClick={handleCloseBurgerMenu} className="header__authentication-link header__movies-link">Аккаунт</Link>
                      <Link to='/profile' onClick={handleCloseBurgerMenu} className="header__movies-account-icon"></Link>
                    </div>
                    <button onClick={handleCloseBurgerMenu} className="header__burger-menu-close"></button>
                  </div>
                </>
                : ''
            }
          </nav>

        </header>
      }
    </Route>


  );
}

export default Header;
