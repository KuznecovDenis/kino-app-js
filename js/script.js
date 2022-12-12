

function changeTheme (btnSelector, themeClass) {
  const themeBtn = document.querySelector(btnSelector)

  if (localStorage.getItem('style-theme') == themeClass) {
    document.body.classList.toggle(themeClass)
    themeBtn.classList.add('active') 
  }
  
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(themeClass)
  
    if (document.body.classList.contains(themeClass)) {
      localStorage.setItem('style-theme', themeClass)
      themeBtn.classList.add('active') 
    } else {
      localStorage.setItem('style-theme', '')
      themeBtn.classList.remove('active')
    }
  })
}

changeTheme('.theme-btn', 'theme_light')


function films() {
  const API_KEY = '9a8641e9-fa5d-4217-a734-9ef717964e5f'
  const API_URL_POPULAR = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1'


  getMovies(API_URL_POPULAR)


  async function getMovies(url) {
    const response = await fetch( url , {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY,
        'Content-Type': 'application/json',
      },
    })

    const responseData = await response.json()
    console.log(responseData);
    showMoviesInPage(responseData)

  }

  function showMoviesInPage(data) {
    const movieContent = document.querySelector('.movieContent')

    data.films.forEach(movie => {
      const movieEl = document.createElement('div')
      movieEl.classList.add('movie-info')
      movieEl.innerHTML = `
        <img
          class="movie-image"
          src=${movie.posterUrlPreview}
          alt="Постер к фильму ${movie.nameRu}"
        />
        <div class="movie-description">
          <p class="movie-year">${movie.year}</p>
          <p class="movie-title">${movie.nameRu}</p>
          <p class="movie-genre">${
            movie.genres.map(el => el.genre)
          }</p>
          <p class="movie-reiting movie-reiting_yellow">${
            9
          }</p>
        </div>
      `
      movieContent.appendChild(movieEl)
    })

  }

}

films()

