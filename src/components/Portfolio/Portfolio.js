import './Portfolio.css'

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__list-item"><a className="portfolio__link" target="_blank" rel="noreferrer"
            href="https://nikita-trofimov.github.io/how-to-learn/">Статичный сайт</a></li>
        <li className="portfolio__list-item"><a className="portfolio__link" target="_blank" rel="noreferrer"
            href="https://nikita-trofimov.github.io/russian-travel/">Адаптивный сайт</a></li>
        <li className="portfolio__list-item"><a className="portfolio__link" target="_blank" rel="noreferrer"
            href="https://nikita-trofimov.github.io/react-mesto-auth">Одностраничное приложение</a></li>
        </ul>
    </section>
  );
}

export default Portfolio;
