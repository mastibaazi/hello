const nav_items = document.querySelectorAll("nav li.nav-item")
const about_us = document.querySelector("#main > div.about_us")
const feedback  = document.querySelector("#main > div.feedback")
const header  = document.querySelector("#main > header")
const footer  = document.querySelector("#main > footer")
const home_page  = document.querySelector("#main > div.home_page")
const profile = document.querySelector("#main > div.profile")

const internet_connection = document.querySelector("#main > div.internet_connection")

const card = document.querySelectorAll("#accordion .card")

const msgbotBadge = document.querySelector(".msgBot .badge")

setInterval(() => {
    msgbotBadge.innerHTML = card.length
}, 100);

const aboutmeBtn = document.querySelector("#main > div.about_us > div.container-fluid > div.text_container > button")

document.body.onload = el => {
    document.body.classList.remove("d-none")
    home_page.classList.remove("d-none")

    if (false) {
        internet_connection.classList.remove("d-none")
        home_page.classList.add("d-none")
        feedback.classList.add("d-none")
        about_us.classList.add("d-none")
        profile.classList.add("d-none")
        header.classList.add("d-none")
        footer.classList.add("d-none")
    }else {
        internet_connection.classList.add("d-none")
        header.classList.remove("d-none")
        footer.classList.remove("d-none")
    }
}

console.log(navigator.onLine)

function profileFun() {
    home_page.classList.add("d-none")
    feedback.classList.add("d-none")
    about_us.classList.add("d-none")
    profile.classList.remove("d-none")
}

function aboutUs() {
    home_page.classList.add("d-none")
    feedback.classList.add("d-none")
    about_us.classList.remove("d-none")
    profile.classList.add("d-none")
}

function home() {
    profile.classList.add("d-none")
    about_us.classList.add("d-none")
    feedback.classList.add("d-none")
    home_page.classList.remove("d-none")
}

function feedbackFun() {
    profile.classList.add("d-none")
    about_us.classList.add("d-none")
    feedback.classList.remove("d-none")
    home_page.classList.add("d-none")
}

// aboutmeBtn.onclick = () => {
//     home_page.classList.add("d-none")
//     about_us.classList.add("d-none")
//     profile.classList.remove("d-none")
// }


// nav_items.forEach(nav_item => {
//     console.log(nav_item);
//     nav_item.addEventListener("click", el => {
//         // el.target.parentElement.classList.add("active")
//         nav_item.classList.remove("active")
//     })
// });

