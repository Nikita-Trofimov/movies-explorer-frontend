import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

import { movies } from '../../utils/movies-data';

function MoviesCardList({isSavedMovie}) {

  return (
    <>
      <ul className="movies-cards-list">
        {movies.map(movie => { return (
            <MoviesCard src={movie.img} title={movie.title} isSavedMovie={isSavedMovie}/>
          );
        })}
      </ul>
      {isSavedMovie ? '' : <button className="movies__more">Ещё</button>}
    </>
  );
}

export default MoviesCardList;
