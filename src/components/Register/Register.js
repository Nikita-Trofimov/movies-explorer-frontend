import { Link } from 'react-router-dom';

import { useFormWithValidation } from '../../utils/useFormWithValidation';
import Preloader from '../Preloader/Preloader';

import "./Register.css";

function Register({ onRegister, errorMessage, isPending }) {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(values);
  }

  return (
    <section className="register">
      <Link to='/' className="register__logo"/>
      {isPending ? <Preloader /> :
        <>
        <form className="register__form"  onSubmit={handleSubmit} noValidate>
          <h2 className="register__title">Добро пожаловать!</h2>
          <p className="register__input-name">Имя</p>
          <input onChange={handleChange} value={values.name || ''}
          name="name" type="text" placeholder="Введите имя" className="register__input" minLength="2" required />
          <p className="register__input-error">{errors.name}</p>
          <p className="register__input-name">E-mail</p>
          <input onChange={handleChange} value={values.email || ''}
          name="email" type="email" placeholder="Введите Email" className="register__input" required />
          <p className="register__input-error">{errors.email}</p>
          <p className="register__input-name">Пароль</p>
          <input onChange={handleChange} value={values.password || ''}
          name="password" type="password" placeholder="Пароль" className="register__input" required />
          <p className="register__input-error">{errors.password}</p>
          <p className="register__submit-error">{errorMessage}</p>
          <button type="submit" disabled={isValid ? '' : true}
          className={isValid ? "register__submit-button" : "register__submit-button register__submit-button_disabled " }>Зарегистрироваться</button>
        </form>
        <p className="register__subtitle">Уже зарегистрированы? <Link className="register__subtitle-link" to='/signin'>Войти</Link></p>
        </>
      }
    </section>
  );
}

export default Register;
