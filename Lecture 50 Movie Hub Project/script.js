const formMovie = document.querySelector("#formMovie")
const movieInput = document.querySelector("#movieInput")
const movieHub = document.querySelector("#movie-hub")


formMovie.addEventListener('submit', (e) => {
    e.preventDefault()

    let quary = movieInput.value.trim()

    if (!quary) {
        movieHub.innerHTML = `<p class="text-gray-500 col-span-full text-center">Please enter a movie name!</p>`;
        return;
    }

    console.log(quary);
    searchMovies(quary)
})

async function searchMovies(movieName) {


    movieHub.innerHTML = `<div class="loader text-white mx-auto col-span-full my-12"></div>`
    movieInput.value = ""

    try {
        let response = await fetch(`https://www.omdbapi.com/?apikey=9f64864c&s=${movieName}`);
        let data = await response.json();

        console.log(data);

        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            movieHub.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-gray-500 text-lg font-medium">Movie not found!</p>
                </div>
            `;
        }
    } catch (error) {
        console.error(error);
        movieHub.innerHTML = `
            <div class="col-span-full text-center py-12">
                <p class="text-red-500 text-lg font-medium">Something went wrong. Try again!</p>
            </div>
        `;
    }


}

function displayMovies(movies) {
    movieHub.innerHTML = "";

    movies.forEach((movie) => {
        const div = document.createElement("div");
        div.dataset.imdbID = movie.imdbID;

        div.setAttribute("class", "movie-card bg-[#14161d] rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col w-full max-w-[190px] cursor-pointer group border border-gray-900");

        div.innerHTML = `
            <div class="relative w-full h-[260px] bg-[#232733] overflow-hidden">
                <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://placeholder.com'}" 
                     alt="${movie.Title}" 
                     class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="p-3 flex flex-col justify-between flex-grow">
                <p class="font-bold text-sm text-white truncate mb-1 group-hover:text-[#e50914] transition-colors">${movie.Title}</p>
                <div class="flex items-center">
                    <span class="bg-[#0b0c10] text-gray-400 px-2 py-0.5 rounded text-[10px] font-medium border border-gray-800">${movie.Year}</span>
                </div>
            </div> `;

        movieHub.append(div);
    });
}


movieHub.addEventListener('click', (e) => {
    e.stopPropagation();

    const movieCard = e.target.closest(".movie-card")
    const imdbID = movieCard.dataset.imdbID
    location.href = `movie-details.html?id=${imdbID}`

})

let defaultMovies = [
    {
        "Title": "Spider-Man: No Way Home",
        "Year": "2021",
        "imdbID": "tt10872600",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "Title": "Spider-Man",
        "Year": "2002",
        "imdbID": "tt0145487",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZWM0OWVmNTEtNWVkOS00MzgyLTkyMzgtMmE2ZTZiNjY4MmFiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Spider-Man: Homecoming",
        "Year": "2017",
        "imdbID": "tt2250912",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODY2MTAzOTQ4M15BMl5BanBnXkFtZTgwNzg5MTE0MjI@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "Spider-Man 2",
        "Year": "2004",
        "imdbID": "tt0316654",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Spider-Man: Into the Spider-Verse",
        "Year": "2018",
        "imdbID": "tt4633694",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTQ3NjM@._V1_SX300.jpg"
    },
    {
        "Title": "The Amazing Spider-Man",
        "Year": "2012",
        "imdbID": "tt0948470",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_QL75_UX380_CR0,1,380,562_.jpg"
    },
    {
        "Title": "Spider-Man 3",
        "Year": "2007",
        "imdbID": "tt0413300",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODE2NzNhMDctYjUzMC00Y2M5LWI2Y2EtODJkZTFjN2Y5ODlmXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Spider-Man: Far from Home",
        "Year": "2019",
        "imdbID": "tt6320628",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_QL75_UX380_CR0,1,380,562_.jpg"
    },
    {
        "Title": "The Amazing Spider-Man 2",
        "Year": "2014",
        "imdbID": "tt1872181",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTA5NDYxNTg0OV5BMl5BanBnXkFtZTgwODE5NzU1MTE@._V1_QL75_UX380_CR0,0,380,562_.jpg"
    },
    {
        "Title": "Spider-Man: Across the Spider-Verse",
        "Year": "2023",
        "imdbID": "tt9362722",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNThiZjA3MjItZGY5Ni00ZmJhLWEwN2EtOTBlYTA4Y2E0M2ZmXkEyXkFqcGc@._V1_SX300.jpg"
    }
]

displayMovies(defaultMovies)