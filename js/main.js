
const usernameInput = document.getElementById("usernameInput")
const btn = document.querySelector(".search-btn")
const profilecard = document.getElementById("profile-card")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    let apiurl =`https://api.github.com/users/${username} `
    fetch(apiurl)
        .then(response => response.json())
        .then(res => {
            if (res.status == "404") {
                let notfound =`        <div class="gh-blankslate">
            <div class="gh-blankslate-icon">
                <svg height="40" viewBox="0 0 24 24" width="40" fill="currentColor">
                    <path
                        d="M10.25 2a8.25 8.25 0 0 1 6.34 13.53l5.69 5.69a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-5.69-5.69A8.25 8.25 0 1 1 10.25 2ZM3.5 10.25a6.75 6.75 0 1 0 13.5 0 6.75 6.75 0 0 0-13.5 0Z">
                    </path>
                </svg>
            </div>

            <h2 class="gh-blankslate-heading">Hech qanday natija topilmadi</h2>
            <p class="gh-blankslate-text">
                Sizning qidiruvingizga mos keladigan ma'lumot topilmadi. Qidiruv kalit so'zlarini o'zgartirib ko'ring
                yoki filtrlarni tozalang.
            </p>

            <div class="gh-blankslate-actions">
                <button class="gh-btn-primary" onclick="resetSearch()">Qidiruvni tozalash</button>
                <a href="#" class="gh-link">Yordam olish</a>
            </div>
        </div>`
        profilecard.append(notfound)
            }
        })
        .catch(err => {
            console.log(err)
        }) 
})