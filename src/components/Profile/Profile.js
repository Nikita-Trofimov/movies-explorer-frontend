
import { Link } from 'react-router-dom';

import './Profile.css';

function Profile() {
  return (
    <section className="profile">
      <form className="profile__form">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <label className="profile__label">Имя
        <input name="name" type="text" className="profile__input" value="Виталий" minLength="2" />
        </label>
        <label className="profile__label">E-mail
        <input name="email" type="email" value="pochta@yandex.ru" className="profile__input"/>
        </label>
        <button type="submit" className="profile__submit-button">Редактировать</button>
      </form>
      <button type="submit" className="profile__submit-button profile__submit-button_red">Выйти из аккаунта</button>
      </section>
  );
}

export default Profile;