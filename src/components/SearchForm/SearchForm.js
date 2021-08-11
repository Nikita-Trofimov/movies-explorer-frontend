import { useState } from 'react';

import "./SearchForm.css";

function SearchForm({ onSearchMovies, isShortMovies, onChekBoxClick }) {
  const [filmQuery, setfilmQuery] = useState('');

  function handleChangeQuery(evt) {
    setfilmQuery(evt.target.value);
  }

  function handleSubmitSearch(evt) {
    evt.preventDefault();
    onSearchMovies(filmQuery)
  }

  return (
    <section>
      <form className="search-form" onSubmit={handleSubmitSearch}>
        <input value={filmQuery || ''} onChange={handleChangeQuery}
        name="search-form__query-input" type="text" placeholder="Фильм" className="search-form__query" minLength="1" required/>
        <button type="submit" className="search-form__submit-button">Найти</button>
      </form>
      <span className="search-form__error">Нужно ввести ключевое слово</span>
      <div className="search-form__checkbox-container">
        <input className="search-form__checkbox" id="short-movies" type="checkbox"  minLength="2" onChange={onChekBoxClick} />
        <label className="search-form__checkbox-label" htmlFor="short-movies"></label>
        <span className="search-form__checkbox-text">Короткометражки</span>
      </div>
    </section>
  );
}

export default SearchForm;
