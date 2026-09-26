const params = new URLSearchParams(location.search)
const imdbID = params.get("id")
const movieDetails = document.querySelector("#movie-details")

if (imdbID) {
    searchMovies(imdbID.trim())
}


async function searchMovies(imdbID) {
    let response = await fetch(`https://www.omdbapi.com/?apikey=9f64864c&i=${imdbID}&plot=full`)
    let data = await response.json()

    console.log(data);

    if (data.Response === "True") {
        displayMovie(data)
    } else {
        console.log(data.Error);
    }

}

function displayMovie(data) {
    movieDetails.innerHTML = `
        <div class="flex flex-col md:flex-row gap-10 items-center md:items-start bg-[#14161d] p-6 md:p-10 rounded-3xl border border-gray-900 shadow-2xl">
            
            <!-- Movie Poster Part -->
            <div class="w-full md:w-1/3 max-w-[300px] flex-shrink-0 bg-[#232733] rounded-2xl overflow-hidden shadow-xl border border-gray-800">
                <img src="${data.Poster !== 'N/A' ? data.Poster : 'https://placeholder.com'}" 
                     alt="${data.Title}" 
                     class="w-full h-auto object-cover">
            </div>
            
            <!-- Movie Info Content Part -->
            <div class="flex-1 w-full">
                <!-- Movie Title & Release Year -->
                <h2 class="text-3xl md:text-5xl font-black tracking-tight text-white mb-4 leading-tight">${data.Title}</h2>
                
                <!-- Quick Meta Badges Grid -->
                <div class="flex flex-wrap gap-2.5 mb-6 text-xs md:text-sm font-semibold">
                    <span class="bg-[#e50914]/10 text-[#e50914] px-3 py-1 rounded-md border border-[#e50914]/20 flex items-center gap-1">
                        ★ ${data.imdbRating || 'N/A'}
                    </span>
                    <span class="bg-gray-900 text-gray-300 px-3 py-1 rounded-md border border-gray-800">${data.Year}</span>
                    <span class="bg-gray-900 text-gray-300 px-3 py-1 rounded-md border border-gray-800">${data.Rated}</span>
                    <span class="bg-gray-900 text-gray-300 px-3 py-1 rounded-md border border-gray-800">${data.Runtime}</span>
                </div>

                <!-- Genre Badges Split (FIXED: Standard Tailwind Badge Layout Without Extra Arrays) -->
                <div class="flex flex-wrap gap-2 mb-6">
                    <span class="bg-[#232733] text-gray-300 px-4 py-1.5 text-xs font-semibold rounded-full border border-gray-800 shadow-sm uppercase tracking-wider">
                        ${data.Genre}
                    </span>
                </div>

                <!-- Movie Plot / Summary Description -->
                <div class="mb-8">
                    <h3 class="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Plot Summary</h3>
                    <p class="text-gray-300 leading-relaxed text-sm md:text-base bg-[#0b0c10] p-5 rounded-2xl border border-gray-900 font-normal">
                        ${data.Plot}
                    </p>
                </div>

                <!-- Structured Technical Metadata Grid -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-sm border-t border-gray-900 pt-6 mb-8">
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Director</span>
                        <p class="text-white font-medium">${data.Director}</p>
                    </div>
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Writer</span>
                        <p class="text-white font-medium">${data.Writer}</p>
                    </div>
                    <div class="sm:col-span-2">
                        <span class="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Cast / Actors</span>
                        <p class="text-white font-medium leading-relaxed">${data.Actors}</p>
                    </div>
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Available Languages</span>
                        <p class="text-white font-medium">${data.Language}</p>
                    </div>
                    <div>
                        <span class="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Country</span>
                        <p class="text-white font-medium">${data.Country}</p>
                    </div>
                </div>

                <!-- Action Button for External IMDb Redirect -->
                <div class="pt-2">
                    <a href=https://www.imdb.com/title/${data.imdbID} target="_blank" 
                       class="inline-flex items-center gap-2 px-6 py-3.5 bg-[#f5c518] hover:bg-[#dfb311] text-black font-extrabold rounded-xl transition-all shadow-lg text-sm tracking-wide transform active:scale-95">
                        Watch on IMDb
                    </a>
                </div>
            </div>
        </div>
    `;
}
