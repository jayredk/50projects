;(() => {

  const API_URL = 'https://api.themoviedb.org/3';
  const API_KEY = '8f03f5e7cab2bf977a793ba0230cbefd';
  const API_MOVIE_URL = `${API_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
  const API_SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w1280';
  
  const listOfMovie = document.querySelector('.movie-list');
  const search = document.querySelector('#search');
  let movies = [];
  
  async function getData (url) {
    const res = await fetch(url);
    const data = await res.json();
    movies = await data.results;

  }

  function getClassByRate(rate) {
    if (rate >= 8) {
      return 'high-rate';
    } else if (rate >= 5) {
      return 'medium-rate';
    }
    return 'low-rate';
  }

  function showMovies(data) {
    
    const moveiEl = data.map((movie) => {
      const { overview, poster_path, title, vote_average } = movie;

      return `<li class="movie">
        <img src="${IMAGE_URL + poster_path}" alt="${title} poster">
        <div class="movie-info">
          <h3 class="movie-title">${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>${overview}</p>
        </div>
      </li>`
    }).join('');

    listOfMovie.innerHTML = moveiEl;
  }
  
  search.addEventListener('keydown', async (e) => {
    if (e.code !== 'Enter') return;
    
    const oTarget = e.target;
    if (oTarget.value.trim() !== '') {
      await getData(`${API_SEARCH_URL}${oTarget.value}`);
      showMovies(movies);
      oTarget.value = '';
    }
  })
  
  
  async function init() {
    await getData(API_MOVIE_URL);
    showMovies(movies);
  }

  init();
})();
