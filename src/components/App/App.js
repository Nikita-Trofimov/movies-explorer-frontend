import { Route, Switch, useHistory } from 'react-router-dom'

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';

function App() {

  const history = useHistory();

  function handleSignIn() {
    history.push("/movies");
  }

  return (
    <div className="App">
    <Switch>
      <Route exact path="/" >
        <Main>
          <Header />
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
          <Footer />
        </Main>
      </Route>
      <Route path="/signup">
        <Register/>
      </Route>
      <Route path="/signin">
        <Login onLogin={handleSignIn} />
      </Route>
      <Route path="/movies">
        <Movies />
      </Route>
    </Switch>

    </div>
  );
}




export default App;
