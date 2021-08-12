export function getTimeFromMins(mins) {
  const hours = Math.trunc(mins/60);
  const minutes = mins % 60;
  if (hours === 0) {
    return minutes + 'м.';
  }
  return hours + 'ч. ' + minutes + 'м.';
};
export function filterMovies(movies, userQuery) {
  const moviesByUserQuery = movies.filter((movie) => {
  const movieEn = String(movie.nameEN).toLowerCase().trim();
  const movieRu = String(movie.nameRU).toLowerCase().trim();
  const userMovie = userQuery.toLowerCase().trim();
  return movieRu.indexOf(userMovie) !== -1 || movieEn.indexOf(userMovie) !== -1;
});
  return moviesByUserQuery;
};
