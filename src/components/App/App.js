import logo from '../../images/logo.svg';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Promo />
      </Main>
    </div>
  );
}

export default App;
