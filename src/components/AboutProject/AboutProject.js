import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__title">О проекте</h2>
      <ul className="about-project__table">
        <li className="about-project__cell">
          <h3 className="about-project__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку,
           добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about-project__cell">
          <h3 className="about-project__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн,
          которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <div className="about-project__time-line">
        <p className="about-project__time-line-text">
          <p className="about-project__time-line-first">1 неделя</p>
          <p className="about-project__time-line-second">4 недели</p>
        </p>
        <p className="about-project__time-line-text about-project__time-line-text_500">
          <span className="about-project__time-line-first about-project__time-line-subtitle">Back-end</span>
          <span className="about-project__time-line-second about-project__time-line-subtitle">Front-end</span>
        </p>
      </div>
    </section>
  )
}

export default AboutProject;