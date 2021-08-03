import { Route, Switch, useHistory, Redirect } from 'react-router-dom'
import { useState } from 'react';

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
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';

function App() {

  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);

  function handleSignIn() {
    history.push("/movies");
    setIsLogin(true);
  }

  return (
    <div className="App">
    <Header isLogin={isLogin} />
    <Switch>
      <Route exact path="/" >
        <Main>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Portfolio />
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
      <Route path="/saved-movies">
        <SavedMovies />
      </Route>
      <Route path="/profile">
        <Profile />
      </Route>
      <Route path="/404">
        <NotFound />
      </Route>
      <Route path="*">
        <Redirect to="/404" />
      </Route>
    </Switch>
    <Footer />
    </div>
  );
}

export default App;
