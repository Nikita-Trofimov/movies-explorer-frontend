import {
  server,
} from "./constants.js";

class MoviesApi {
  constructor (options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status} : ${res.statusText}`);
  }

  _fetch(url) {
    return fetch(`${this._baseUrl}${url}`, {
      headers: this._headers,
    })
    .then(this._checkResponse);
  }

  getMovies(url='/') {
    return this._fetch(url);
  }
}

export const api = new MoviesApi({
  baseUrl: server,
  headers: {
    'Content-Type': 'application/json'
  }
});
