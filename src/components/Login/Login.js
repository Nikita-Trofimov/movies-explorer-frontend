import { Link } from 'react-router-dom';

import "./Login.css";

function Login({ onLogin }) {

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    onLogin();
  }

  return (
  <section className="login">
    <Link to='/' className="login__logo"/>
    <form className="login__form" onSubmit={handleLoginSubmit}>
      <h2 className="login__title">Рады видеть!</h2>
      <p className="login__input-name">E-mail</p>
      <input name="email" type="email" placeholder="Введите Email" className="login__input"/>
      <p className="login__input-name">Пароль</p>
      <input name="password" type="password" placeholder="Пароль" className="login__input"/>
      <p className="login__input-error">Что-то пошло не так...</p>
      <button type="submit" className="login__submit-button">Войти</button>
    </form>
    <p className="login__subtitle">Ещё не зарегистрированы? <Link className="login__subtitle-link" to='/signup'>Регистрация</Link></p>
  </section>
  );
}

export default Login;
