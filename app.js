console.log("Connected!");

// Navbar manipulation - Modifies navbar transparency based on the scroll position
const navbar = document.querySelector("#navbar");
const navTransparency = () => {
  scrollY === 0
    ? (navbar.style.backgroundColor = "#fefefe00")
    : scrollY === 25
    ? (navbar.style.backgroundColor = "#ffffff3e")
    : scrollY === 50
    ? (navbar.style.backgroundColor = "#ffffff84")
    : scrollY === 75
    ? (navbar.style.backgroundColor = "#ffffffd0")
    : (navbar.style.backgroundColor = "#ffffff");
};

document.addEventListener("scroll", navTransparency);

// Feature - Changing the background gradient as per user input
const gradientStart = document.querySelector("#gradient-start");
const gradientEnd = document.querySelector("#gradient-end");
const btn = document.querySelector("#btn");

// Event listeners

gradientStart.addEventListener("input", () => {
  return gradientStart.value;
});

gradientEnd.addEventListener("input", () => {
  return gradientEnd.value;
});

btn.addEventListener("click", () => {
  document.body.style.background = `linear-gradient(to bottom, ${gradientStart.value}, ${gradientEnd.value})`;
});
