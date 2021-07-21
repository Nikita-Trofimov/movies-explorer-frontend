import photo from "../../images/618592738.png";

import "./AboutMe.css";

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <article className="about-me__info">
        <div className="about-me__container">
          <h3 className="about-me__subtitle">Никита</h3>
          <p className="about-me__prof">Frontend-разработчик, 31 год</p>
          <p className="about-me__about">На текущей работе участвовал в создании портала технической поддержки,
            в процессе его создания очень понравилось проектировать интерфейс и делать портал удобным в использовании.
            В веб-разработке меня очень привлекло моментальное отображение результата работы и возможность сделать качественный
            продукт для конечного пользователя. Из-за долгой работы в технической поддержке очень хорошо понимаю потребности
            и желания пользователей.</p>
          <ul className="about-me__link-list">
            <li className="about-me__link-list-item"><a className="about-me__link" target="_blank" rel="noreferrer"
            href="https://ru-ru.facebook.com/">Facebook</a></li>
            <li className="about-me__link-list-item"><a className="about-me__link" target="_blank" rel="noreferrer"
            href="https://github.com/Nikita-Trofimov">Github</a></li>
          </ul>
        </div>
        <img className="about-me__photo" src={photo} alt="Фото студнета"/>
      </article>
    </section>
  );
}

export default AboutMe;
