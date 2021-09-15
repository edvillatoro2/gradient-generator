const hex = document.querySelector("h4")
const color01 = document.querySelector(".color01")
const color02 = document.querySelector(".color02")
const gradient = document.getElementById("gradient")

function setGradient() {
    gradient.style.background = "linear-gradient(90deg, "
    + color01.value
    + ", "
    +color02.value
    + ")";
    hex.textContent = gradient.style.background;
}

color01.addEventListener("input", setGradient);
color02.addEventListener("input", setGradient);