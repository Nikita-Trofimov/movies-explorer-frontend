import "./SearchForm.css"

function SearchForm() {
  return (
    <section>
      <form className="search-form">
        <input name="search-form__query-input" type="text" placeholder="Фильм" className="search-form__query" minLength="2"/>
        <button type="submit" className="search-form__submit-button">Найти</button>
      </form>
    </section>
  );
}

export default SearchForm;