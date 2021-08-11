import { Route, Switch, useHistory, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { mainApi } from '../../utils/MainApi';

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
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [successMessage, setSuccessMessage] = useState('')
  const [savedMovies, setSavedMovies] = useState([])

  useEffect(() => {
    if (isLogin) {
      history.push("/movies");
    }

    mainApi.getUser()
    .then((user) => {
      setCurrentUser(user);
      setIsLogin(true);
    })
    .catch(err => console.log('Ошибка ' + err));

  }, [isLogin, history]);

  useEffect(() => {
    if(isLogin) {
      mainApi.getSavedMovies()
      .then((movies) => {
        setSavedMovies(movies);
      })
      .catch(err => {
        console.log('Ошибка ' + err);
      })
    }
  }, [isLogin]);

  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie).then((res) => {
      setSavedMovies([res, ...savedMovies]);
    })
    .catch(err => console.log('Ошибка ' + err));
  }

  function handleUnSaveMovie(movieId, isSavedMoviePage) {
    let movieToDeleteId;
    if (isSavedMoviePage) {
      movieToDeleteId = movieId;
    }
    else {
      movieToDeleteId = savedMovies.find(movies => movies.movieId === movieId)._id;
    }

    mainApi.unSaveMovie(movieToDeleteId).then((res)=> {
      setSavedMovies(savedMovies.filter(item => item._id !== movieToDeleteId));
    })
    .catch(err => console.log('Ошибка ' + err));
  }

  function handleSignIn(values) {
    mainApi.login(values)
    .then((res) => {
      setIsPending(true);
      setErrorMessage('');
      console.log(res);
      setIsLogin(true);
      history.push("/movies");
    })
    .catch((err) => {
      setErrorMessage(err.message);
      console.log(err.message);
    })
    .finally(()=> setIsPending(false));
  }

  function handleRegister(values) {
    mainApi.register(values)
    .then((res) => {
      setIsPending(true);
      setErrorMessage('');
      console.log(res);
      handleSignIn(values);
    })
    .catch((err) => {
      setErrorMessage(err.message);
      console.log(err.message);
    })
    .finally(()=> setIsPending(false));
  }

  function handleUpdateUser(values) {
    mainApi.updateUser(values)
    .then((res) => {
      setIsPending(true);
      setErrorMessage('');
      setSuccessMessage('Данные успешно изменены')
      console.log(res);
    })
    .catch((err) => {
      setErrorMessage(err.message);
      console.log(err.message);
    })
    .finally(()=> setIsPending(false));
  }

  function onLogOut() {
    mainApi.logout()
    .then((res) => {
      setIsPending(true);
      setIsLogin(false);
      setErrorMessage('');
      history.push("/");
      console.log(res);
    })
    .catch((err) => {
      setErrorMessage(err.message);
      console.log(err.message);
    })
    .finally(()=> setIsPending(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
          <Register onRegister={handleRegister} errorMessage={errorMessage} isPending={isPending}/>
        </Route>
        <Route path="/signin">
          <Login onLogin={handleSignIn} />
        </Route>
        <ProtectedRoute path ="/movies"
                        isLogin={isLogin}
                        component={Movies}
                        onSaveMovie={handleSaveMovie}
                        onUnSaveMovie={handleUnSaveMovie}
                        isPending={isPending}
                        savedMovies={savedMovies} />
        <ProtectedRoute path="/saved-movies"
                        isLogin={isLogin}
                        component={SavedMovies}
                        onUnSaveMovie={handleUnSaveMovie}
                        savedMovies={savedMovies} />
        <ProtectedRoute path="/profile"
                        isLogin={isLogin}
                        component={Profile}
                        onSubmit={handleUpdateUser}
                        errorMessage={errorMessage}
                        isPending={isPending}
                        successMessage={successMessage}
                        onLogOut={onLogOut} />
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
