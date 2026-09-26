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
        let response = await fetch(`http://www.omdbapi.com/?apikey=9f64864c&s=${movieName}`);
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
            </div>
        `;

        movieHub.append(div);
    });
}


movieHub.addEventListener('click', (e) => {
    e.stopPropagation();

    const movieCard = e.target.closest(".movie-card")
    const imdbID = movieCard.dataset.imdbID
    location.href = `movie-details.html?id=${imdbID}`

})