import { useState } from 'react';

import errorImg from '../../images/imgNotFound.png';
import './MoviesCard.css';

function MoviesCard({ src, title, isSavedMovie }) {

  const [isSaved, setIsSaved] = useState(false);

  function errorLoadImg(evt){
    evt.target.src=errorImg;
  };

  function handleSaveMovie(){
    setIsSaved(true);
  }

  const cardLikeButtonClassName = (
    `card__not-save ${isSaved ? 'card__save' : ''}`
  );

  const cardSaveButtonClassName = (
    `card__not-save ${isSavedMovie ? 'card__unsave': ''}`
  )

  return (
    <li className="card">
    <img onError={errorLoadImg} src={src} alt="Превью фильма" className="card__image" />
      <div className="card__image-subtitle">
        <h2 className="card__title">{title}</h2>
        <button type="button" className={isSavedMovie ? cardSaveButtonClassName : cardLikeButtonClassName} onClick={handleSaveMovie} ></button>
      </div>
      <p className="card__movie-duration">1ч 42м</p>
    </li>
  );
}

export default MoviesCard;