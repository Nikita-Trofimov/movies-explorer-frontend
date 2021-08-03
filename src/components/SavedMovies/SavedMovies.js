import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./SavedMovies.css";

function SavedMovies() {

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList isSavedMovie={true} />
    </section>
  );
}

export default SavedMovies;
