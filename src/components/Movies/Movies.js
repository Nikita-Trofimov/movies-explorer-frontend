import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { filterMovies } from "../../utils/utils";
import { api } from "../../utils/MoviesApi";

function Movies({ onSaveMovie, onUnSaveMovie, savedMovies }) {
  const [nothingFound, setNothingFound] = useState(false);
  const [initialMovies, setInitialMovies] = useState([])
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [isShortMovies, setIsShortMovies] = useState(false);
  const [isError, setIsError] = useState(false);
  const currentUser = useContext(CurrentUserContext);

  function handleSetFilteredMovies(movies, userQuery, isShortMovies) {
    let moviesList = filterMovies(movies, userQuery, isShortMovies);
    moviesList.length === 0 ? setNothingFound(true) : setNothingFound(false);
    console.log(isShortMovies)
    if (isShortMovies) {
      moviesList = moviesList.filter(movie => movie.duration <= 40);
    }
    setInitialMovies(moviesList);
    localStorage.setItem(`movies + ${currentUser.email}`, JSON.stringify(moviesList));
  }

  function handleSearchFilms(inputValue) {
    setIsMoviesLoading(true);
    api.getMovies()
    .then((movie) => {
      handleSetFilteredMovies(movie, inputValue, isShortMovies);
    })
    .catch((err) => {
      setIsError(true);
      console.log('Ошибка ' + err)
    })
    .finally(() => setIsMoviesLoading(false));
  }

  function handleShortMoviesChek() {
    setIsShortMovies(!isShortMovies);
    if(!isShortMovies) {
      setInitialMovies(initialMovies.filter(movie => movie.duration <= 40));
    } else {
      setInitialMovies(JSON.parse(localStorage.getItem(`movies + ${currentUser.email}`)));
    }
  }

  useEffect(() => {
    if (localStorage.getItem(`movies + ${currentUser.email}`)) {
      const movies = JSON.parse(localStorage.getItem(`movies + ${currentUser.email}`));
      movies.length === 0 ? setNothingFound(true) : setNothingFound(false)
      setInitialMovies(movies);
    }
  }, [currentUser.email]);

  return (
    <section className="movies">
      <SearchForm onSearchMovies={handleSearchFilms} isShortMovies={isShortMovies} onChekBoxClick={handleShortMoviesChek}/>
      {isError ? <p className="search-error">Во время запроса произошла ошибка.
      Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p> :
      <MoviesCardList nothingFound={nothingFound} movies={initialMovies} savedMovies={savedMovies}
      moviesLoading={isMoviesLoading} onSaveMovie={onSaveMovie} onUnSaveMovie={onUnSaveMovie}/>
      }
    </section>
  )
}

export default Movies;
