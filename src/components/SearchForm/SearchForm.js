import "./SearchForm.css";

function SearchForm() {
  return (
    <section>
      <form className="search-form">
        <input name="search-form__query-input" type="text" placeholder="Фильм" className="search-form__query" minLength="2"/>
        <button type="submit" className="search-form__submit-button">Найти</button>
      </form>
      <div className="search-form__checkbox-container">
        <input className="search-form__checkbox" id="short-movies" type="checkbox"/>
        <label className="search-form__checkbox-label" htmlFor="short-movies"></label>
        <span className="search-form__checkbox-text">Короткометражки</span>
      </div>
    </section>
  );
}

export default SearchForm;
