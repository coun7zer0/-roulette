let movies = [];

function addMovie() {
    const name = document.getElementById('movieName').value;
    const probabilityStr = parseInt(document.getElementById('movieProbability').value);

    let probability = 1;
    if (parseInt(probabilityStr) > 0) {
        probability = parseInt(probabilityStr);
    }

    if (name && probability) {
        movies.push({ name, probability });
        displayMovies();
        document.getElementById('movieName').value = '';
        document.getElementById('movieProbability').value = '';
    } else {
        alert('Por favor ingrese un nombre válido');
    }
}

function displayMovies() {
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = '';
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.name} - ${movie.probability}`;
        movieList.appendChild(li);
    });
}

function spinWheel() {
    if (movies.length === 0) {
        alert('Agrega películas a la lista antes de girar la ruleta.');
        return;
    }

    const weightedMovies = [];
    movies.forEach(movie => {
        for (let i = 0; i < movie.probability; i++) {
            weightedMovies.push(movie.name);
        }
    });

    const randomIndex = Math.floor(Math.random() * weightedMovies.length);
    const selectedMovie = weightedMovies[randomIndex];

    document.getElementById('result').textContent = selectedMovie;
}
