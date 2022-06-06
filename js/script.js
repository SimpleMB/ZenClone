const hamburger = document.querySelector(".lang-link-anchor");
const menu = document.querySelector(".hello");

hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("menu click");
});
