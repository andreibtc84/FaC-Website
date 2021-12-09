console.log("Connected!");

// Navbar manipulation
const navbar = document.querySelector("#navbar");

document.addEventListener(
  "scroll",
  () => (navbar.style.backgroundColor = "#fff")
);

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
