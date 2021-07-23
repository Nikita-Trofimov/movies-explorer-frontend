import { Route, Switch } from 'react-router-dom'

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

function App() {
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
        <Login />
      </Route>
    </Switch>

    </div>
  );
}




export default App;
