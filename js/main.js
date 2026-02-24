
const username = document.getElementById("usernameInput")
const btn = document.querySelector(".search-btn")
const Profilecard = document.getElementById("profilecard")
const notFoundcard = document.getElementById("notFoundcard")
const seachcard = document.getElementById("seachcard")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    let apiurl = `https://api.github.com/users/${usernameInput} `
    fetch(apiurl)
        .then(response => response.json())
        .then(res => {
            if (res.status == "404") {
                notFoundcard.style.display = "block"
                Profilecard.style.display = "none"
            }
            else {
                notFoundcard.style.display = "block"
                Profilecard.style.display = "flex"
                Profilecard.innerHTML = `
                <div id="profilecard" class="gh-profile-card">
            <div class="banner"></div>
            <div class="content">
                <div class="main-info">
                    <img src="${res.avatar_url} " alt="User" class="avatar-large">
                    <div class="text-info">
                        <h1>${res.name}</h1>
                        <p class="username">${res.html_url}</p>
                    </div>
                </div>

                <p class="user-bio">${res.bio}</p>

                <div class="stats-grid">
                    <div class="stat-box">
                        <span class="num">${res.public_repos}</span>
                        <span class="label">Postlar</span>
                    </div>
                    <div class="stat-box">
                        <span class="num">${res.followers}</span>
                        <span class="label">Obunachilar</span>
                    </div>
                    <div class="stat-box">
                        <span class="num">${res.following}</span>
                        <span class="label">Obunalar</span>
                    </div>
                </div>
            </div>
        </div>`
            }
        })
        .catch(error => {
            console.log(error)
        })
})