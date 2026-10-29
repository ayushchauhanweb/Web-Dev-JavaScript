// localStorage.setItem("num1", 1)
// localStorage.setItem("num2", 1)
// localStorage.setItem("num3", 1)


// let result = localStorage.getItem("Ayush") // Ye null dega kyo ki Ayush key nhi hai localStorage mai
// console.log(result);

// let result2 = localStorage.key("1")
// console.log(result2);

// localStorage.removeItem("")

// document.querySelector("#clear-local-storage").addEventListener('click', () => {
//     localStorage.clear()
// })

// document.querySelector("#session-item-storage").addEventListener('click', () => {
//     sessionStorage.setItem("session", "num")
// })


// fetch("https://api.github.com/users/ayushchauhanweb").
//     then(data => data.json()).
//     then(data => console.log(data))


async function getUser(username = "ayushchauhanweb") {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    return data;
}

document.querySelector("#github-form").addEventListener('submit', async (e) => {
    e.preventDefault()

    let username = document.querySelector("#github-username").value
    const data = await getUser(username)

    document.querySelector("#github-details").innerHTML = `
    <img src=${data.avatar_url} alt="">
    <h2>${data.name}</h2>
    <i>Username: ${data.login}</i>
    <p>Date of Creation: ${data.created_at} </p>
    <p>Followers: ${data.followers}</p>
    <p>Repos: ${data.public_repos} </p>
    `
})

function updateStatus() {
    document.querySelector("#network-status").textContent = navigator.onLine ? "Online" : "Offline"
}

window.addEventListener('online', updateStatus)
window.addEventListener('offline', updateStatus)