import { Link } from 'react-router-dom';

import "./Register.css";

function Register() {
  return (
  <section className="register">
    <Link to='/' className="register__logo"/>
    <form className="register__form">
      <h2 className="register__title">Добро пожаловать!</h2>
      <p className="register__input-name">Имя</p>
      <input name="text" type="text" placeholder="Введите имя" className="register__input" minLength="2"/>
      <p className="register__input-name">E-mail</p>
      <input name="email" type="email" placeholder="Введите Email" className="register__input"/>
      <p className="register__input-name">Пароль</p>
      <input name="password" type="password" placeholder="Пароль" className="register__input"/>
      <p className="register__input-error">Что-то пошло не так...</p>
      <button type="submit" className="register__submit-button">Зарегистрироваться</button>
    </form>
    <p className="register__subtitle">Уже зарегистрированы? <Link className="register__subtitle-link" to='/signin'>Войти</Link></p>
  </section>
  );
}

export default Register;
