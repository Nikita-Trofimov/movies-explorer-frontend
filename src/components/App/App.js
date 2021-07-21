import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Promo />
        <AboutProject />
        <Techs />
      </Main>
    </div>
  );
}

export default App;
