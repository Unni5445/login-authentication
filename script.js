const loginOpen = document.getElementById("login-btn")
const loginClose = document.querySelector(".close-btn")
const loginClick = document.getElementById("log")
const signupClick = document.getElementById("sign")
const signupClose = document.querySelector(".close-signbtn")

loginOpen.addEventListener('click', function () {
    document.querySelector(".login-popup").style.display = "flex";
})
loginClose.addEventListener('click', function () {
    document.querySelector(".login-popup").style.display = "none";
})
loginClick.addEventListener('click', function () {
    document.querySelector(".signup-pop").style.display = "none";
    document.querySelector(".login-popup").style.display = "flex";
})


signupClick.addEventListener('click', function () {
    document.querySelector(".signup-pop").style.display = "flex";
    document.querySelector(".login-popup").style.display = "none";
})
signupClose.addEventListener('click', function () {
    document.querySelector(".signup-pop").style.display = "none";
})