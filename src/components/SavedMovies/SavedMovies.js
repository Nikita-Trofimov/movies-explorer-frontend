import { useEffect, useState } from "react";

import "./SavedMovies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { filterMovies } from "../../utils/utils";

function SavedMovies({ onUnSaveMovie, savedMovies }) {

  const [nothingFound, setNothingFound] = useState(true);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [savedMoviesList, setSavedMoviesList] = useState([])
  const [isShortMovies, setIsShortMovies] = useState(false);

  function handleSetFilteredMovies(savedMovies, userQuery, isShortMovies) {
    let moviesList = filterMovies(savedMovies, userQuery, isShortMovies);
    moviesList.length === 0 ? setNothingFound(true) : setNothingFound(false);
    if (isShortMovies) {
      moviesList = moviesList.filter(movie => movie.duration <= 40);
    }
    setSavedMoviesList(moviesList);
  }

  function handleSearchFilms(inputValue) {
      setFilteredMovies(savedMovies);
      handleSetFilteredMovies(filteredMovies, inputValue, isShortMovies);
  }

  function handleShortMoviesChek() {
    setIsShortMovies(!isShortMovies);
    if(!isShortMovies) {
      setSavedMoviesList(savedMoviesList.filter(movie => movie.duration <= 40));
    } else {
      setSavedMoviesList(savedMovies);
    }
    console.log(savedMovies);
  }

  useEffect(() => {
    if(savedMovies.length !== 0) {
      setNothingFound(false);
      setSavedMoviesList(savedMovies);
    } else {
      setNothingFound(true);
    }
  }, [savedMovies])

  return (
    <section className="movies">
      <SearchForm onSearchMovies={handleSearchFilms} onChekBoxClick={handleShortMoviesChek} />
      <MoviesCardList nothingFound={nothingFound} isSavedMoviePage={true}
       movies={savedMoviesList} onUnSaveMovie={onUnSaveMovie} savedMovies={savedMovies} />
    </section>
  );
}

export default SavedMovies;
