import { useFormWithValidation } from '../../utils/useFormWithValidation';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext, useEffect} from 'react';

import './Profile.css';
import Preloader from '../Preloader/Preloader';

function Profile({ onSubmit, errorMessage, isPending, successMessage, onLogOut }) {

  const { values, errors, isValid, handleChange, setValues, setIsValid, resetForm } = useFormWithValidation();
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    resetForm();
    setValues({name: currentUser.name,
               email: currentUser.email,});
    }, [currentUser, setValues, resetForm]);

  useEffect(() => {
    if (values.name === currentUser.name && values.email === currentUser.email) {
      setIsValid(false);
    }
  }, [values, currentUser, setIsValid]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(values);
  }

  function handleLogOut() {
    onLogOut();
  }


  return (
    <section className="profile">
      {isPending ? <Preloader /> :
      <>
        <form className="profile__form" onSubmit={handleSubmit}>
          <h2 className="profile__title">Привет, Виталий!</h2>
          <label className="profile__label">Имя
          <input onChange={handleChange} value={values.name || ''}
          name="name"  type="text" className="profile__input" minLength="2" required />
          </label>
          <p className="profile__input-error">{errors.name}</p>
          <label className="profile__label">E-mail
          <input onChange={handleChange} value={values.email || ''}
          name="email" type="email" className="profile__input" required/>
          </label>
          <p className="profile__input-error">{errors.email}</p>
          <p className={successMessage ? "profile__submit-succes" : "profile__submit-error"}>{errorMessage || successMessage}</p>
          <button  disabled={isValid ? '' : true}
          type="submit" className={isValid ? "profile__submit-button" :  "profile__submit-button profile__submit-button_disabled"}>Редактировать</button>
        </form>
        <button onClick={handleLogOut} type="submit" className="profile__submit-button profile__submit-button_red">Выйти из аккаунта</button>
      </>
      }
      </section>
  );
}

export default Profile;