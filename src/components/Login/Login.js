import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/useFormWithValidation';

import Preloader from '../Preloader/Preloader';
import "./Login.css";

function Login({ onLogin, isPending }) {

  const { values, errors, isValid, handleChange, errorMessage } = useFormWithValidation();

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    onLogin(values);
  }

  return (
    <section className="login">
      {isPending ? <Preloader /> :
      <>
      <Link to='/' className="login__logo"/>
      <form className="login__form" onSubmit={handleLoginSubmit}>
        <h2 className="login__title">Рады видеть!</h2>
        <p className="login__input-name">E-mail</p>
        <input onChange={handleChange} value={values.email || ''}
        name="email" type="email" placeholder="Введите Email" className="login__input" required />
        <p className="login__input-error">{errors.email}</p>
        <p className="login__input-name">Пароль</p>
        <input onChange={handleChange} value={values.password || ''}
        name="password" type="password" placeholder="Пароль" className="login__input" required />
        <p className="login__input-error">{errors.password}</p>
        <p className="register__submit-error">{errorMessage}</p>
        <button type="submit" disabled={isValid ? '' : true}
          className={isValid ? "login__submit-button" : "login__submit-button login__submit-button_disabled" }>Войти</button>
      </form>
      <p className="login__subtitle">Ещё не зарегистрированы? <Link className="login__subtitle-link" to='/signup'>Регистрация</Link></p>
      </>
    }
    </section>
  );
}

export default Login;
