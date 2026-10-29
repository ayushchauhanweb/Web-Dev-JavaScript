const form = document.querySelector("#form")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkBox = document.querySelector("#check-box")
const country = document.querySelector("#country")
const password = document.querySelector("#password")
const passwordHint = document.querySelector("#password-hint")


const LIMIT = 150
LIMIT.textContent = `${LIMIT} Character remaining`

function showError(input, errorMessage) {
    input.parentElement.querySelector(".error-message").textContent = errorMessage
}

function clearError(input) {
    input.parentElement.querySelector(".error-message").textContent = ""
}

function validUserName(username) {
    console.log(username.parentElement.querySelector(".error-message"));
    if (username.value.trim().length === 0) {
        showError(username, "Enter your name")
        return false
    }

    if (username.value.trim().length < 3) {
        showError(username, "Name must be at least 3 character")
        return false
    }

    clearError(username)

    return true
}

function validPassword(password) {
    console.log(password.parentElement.querySelector(".error-message"));
    if (password.value.trim().length === 0) {
        showError(password, "Enter your password")
        return false
    }

    if (password.value.trim().length < 8) {
        showError(password, "Password must be at least 8 character")
        return false
    }

    clearError(password)

    return true
}

function validBio(bio) {
    console.log(bio.parentElement.querySelector(".error-message"));
    if (bio.value.trim().length === 0) {
        showError(bio, "Enter your bio")
        return false
    }

    if (bio.value.trim().length < 3) {
        showError(bio, "Bio must be at least 3 character")
        return false
    }

    clearError(bio)

    return true
}

function checkbox(checkBox) {
    console.log(checkBox.parentElement.querySelector(".error-message"));
    if (checkBox.checked === false) {
        showError(checkBox, "Please tick the box to accept terms and condition")
        return false
    }

    clearError(checkBox)
    return true
}


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const isValidUserName = validUserName(username)
    const isValidPasword = validPassword(password)
    const isValidBio = validBio(bio)
    const isChecked = checkbox(checkBox)

    if (isValidUserName && isValidPasword && isValidBio && isChecked) {
        document.querySelector("h1").classList.remove("hidden")
    } else {
        document.querySelector("h1").classList.add("hidden")
    }

    const email = document.querySelector("#email").value

    console.log({ username: username.value, password: password.value, email });
})



// bio.addEventListener('input', (e) => {
//     const remaining = LIMIT - bio.value.length;
//     charCount.textContent = `${remaining} Character remaining`
// })

// username.addEventListener('change', (e) => {
//     console.log("Change event:", username.value);
// })

// username.addEventListener('input', (e) => {
//     console.log("Input event:", username.value);
// })

// checkBox.addEventListener('change', (e) => {
//     console.log(checkBox.checked);
// })

// country.addEventListener('change', (e) => {
//     console.log(country.value);

// })

// username.addEventListener('focus', (e) => {
//     console.log("focus");
// })

// username.addEventListener('blur', (e) => {
//     console.log("blur");
// })

// password.addEventListener('focus', (e) => {
//     passwordHint.classList.remove("hidden")
// })

// password.addEventListener('blur', (e) => {
//     passwordHint.classList.add("hidden")
// })
