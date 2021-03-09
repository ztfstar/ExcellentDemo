const button = document.querySelector(".main-circle");
const circles = document.querySelectorAll(".circles");
const cross = document.querySelector(".cross");
const crossbg = document.querySelector(".bg");
const boxicons = document.querySelectorAll(".icons svg");
button.addEventListener("click", function() {
  cross.classList.toggle("show");
  crossbg.classList.toggle("show");
  circles.forEach(element => {
    element.classList.toggle("show");
  });
  boxicons.forEach(element => {
    element.classList.toggle("colorchange");
  });
});
