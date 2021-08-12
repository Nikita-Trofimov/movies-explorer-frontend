import errorImg from '../../images/imgNotFound.png';
import './MoviesCard.css';
import { getTimeFromMins } from '../../utils/utils';
import { imgServer } from "../../utils/constants";

function MoviesCard({ movie, isSavedMoviePage, onSaveMovie, onUnSaveMovie, isSave }) {

  function errorLoadImg(evt) {
    evt.target.src=errorImg;
  };

  function handleSaveMovie() {
    onSaveMovie(movie);
  }

  function handleUnSave(isSavedMoviePage) {
    onUnSaveMovie(movie._id || movie.id, isSavedMoviePage);
  }

  const cardLikeButtonClassName = (
    `card__not-save ${ isSave   ? 'card__save' : ''}`
  );

  const cardSaveButtonClassName = (
    `card__not-save ${isSavedMoviePage ? 'card__unsave': ''}`
  )

  return (
    <li className="card">
    <a href={isSavedMoviePage ? movie.trailer : movie.trailerLink} target="_blank" rel="noreferrer">
      <img onError={errorLoadImg} src={ isSavedMoviePage ?  movie.image : `${imgServer}${movie.image.url}`} alt={movie.nameRU}
      className="card__image" />
    </a>
      <div className="card__image-subtitle">
        <h2 className="card__title">{movie.nameRU}</h2>
        <button type="button" className={isSavedMoviePage ? cardSaveButtonClassName : cardLikeButtonClassName}
         onClick={isSavedMoviePage || isSave ? () => handleUnSave(isSavedMoviePage) : handleSaveMovie } ></button>
      </div>
      <p className="card__movie-duration">{getTimeFromMins(movie.duration)}</p>
    </li>
  );
}

export default MoviesCard;
