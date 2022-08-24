const mainURL = "https://starwars-server.vercel.app/movies";

window.onload = () => {
    init();
};

const init = async () => {
    const movies = await getMovies();
    mappedMovie(movies)
};

const getMovies = async () => {
    const movieAPI = await fetch(mainURL);
    const convertToJson = movieAPI.json();
    return convertToJson
};

const mappedMovie = (films) => {
    films.data.movies.map((movie) => {
        return printMovie({numero: movie.number,
                         nombre: movie.name,
                         año: movie.year,
                         imagen: movie.poster,
                         trama: movie.crawl,
                         filmMakers: getFilmMakers(movie.filmMakers)
        })
    })
};
const getFilmMakers = (filmMakers) => {
    const filmMakersList = []
    filmMakers.forEach(filmMaker => {
        filmMakersList.push(`${filmMaker.role}: ${filmMaker.name}`)        
    });
    return filmMakersList;
};

const printMovie = (movie) => {
    const movieContainer = document.querySelector('#films_container')
    movieContainer.innerHTML += `
    <figure class="figure_container">
        <div class="name_container">
            <h4>${movie.año}</h4>
            <h3 class="film_title">${movie.nombre}</h3>
        </div>
        <div class="poster_container">
            <img src=${movie.imagen} alt=${movie.nombre} referrerpolicy="no-referrer"/>
        </div>
        <h4>${movie.filmMakers.join('/')}</h4>
        <h4>Argument:</h5>
        <p>${movie.trama}</p>
    </figure>
    `
};

/*PARALLAX :3*/
$(window).scroll(function(e){
    parallax();
  });
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top',-(scrolled*0.2)+'px');
  }
