import { useEffect, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import "./MoviesCardList.css";

function MoviesCardList({ movies, nothingFound, moviesLoading, isSavedMoviePage, onSaveMovie, onUnSaveMovie , savedMovies }) {

  const [cardsShowDetails, setCardsShowDetails] = useState({ total: 12, more: 4 });
  const [movieList, setMovieList] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function checkSavedMovie(savedMovies, movie) {
    let save = savedMovies.find(savedMovie => savedMovie.movieId === movie.id);
    return save;
  }

  useEffect(() => {
    function handleScreenResize() {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', resizeTimer, false);

    let resizeTimeout;

    function resizeTimer() {
      if (!resizeTimeout ) {
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          handleScreenResize();
        }, 1000);
      }
    };

    return () => window.removeEventListener('resize', handleScreenResize);
  }, [screenWidth]);

  useEffect(() => {
    if (screenWidth >= 1280) {
      setCardsShowDetails({ total: 12, more: 4 })
    }
    else if (screenWidth <= 768 && screenWidth > 420) {
      setCardsShowDetails({ total: 8, more: 2 })
    }
     else {
      setCardsShowDetails({ total: 5, more: 2 })
    }

  }, [screenWidth]);

  useEffect(() => {
    if (movies.length) {
        const tempMovies = movies.filter((item, i) => i < cardsShowDetails.total);
        setMovieList(tempMovies);
      }
  }, [movies, cardsShowDetails.total]);

  function handleClickMoreMovies() {
    const start = movieList.length;
    const end = start + cardsShowDetails.more;
    const additional = movies.length - start;

    if (additional > 0) {
      const newCards = movies.slice(start, end);
      setMovieList([...movieList, ...newCards]);
    }
  };

  return (
  <>
    {moviesLoading ? <Preloader /> :
      <>
        { nothingFound ? <p className="nothing-found">По вашему запросу ничего не найдено</p> :
          <ul className="movies-cards-list">
            {movieList.map(movie => { return (
                <MoviesCard key={movie.id || movie._id} movie={movie}
                isSavedMoviePage={isSavedMoviePage} onSaveMovie={onSaveMovie} onUnSaveMovie={onUnSaveMovie} isSave={checkSavedMovie(savedMovies, movie)}/>
              );
            })}
          </ul>}
          { isSavedMoviePage || movieList.length === movies.length  ? '' : <button className="movies__more" onClick={handleClickMoreMovies}>Ещё</button> }
      </>
    }
  </>
  );
}

export default MoviesCardList;
