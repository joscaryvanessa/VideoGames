// menu hamburguesa //
const navbarcustom1 = document.querySelector("#navbarcustom1");
const abrirmenu = document.querySelector("#abrirmenu");
const cerrarmenu = document.querySelector("#cerrarmenu");

abrirmenu.addEventListener("click", () => {
  navbarcustom1.classList.add("visible");
  abrirmenu.style.display = "none";
  cerrarmenu.style.display = "block";
});
cerrarmenu.addEventListener("click", () => {
  navbarcustom1.classList.remove("visible");
  abrirmenu.style.display = "block";
  cerrarmenu.style.display = "none";
});

 // STARS //
function rateStar(star) {
  const ratingContainer = star.parentNode;
  const stars = ratingContainer.getElementsByClassName("star");
  const starValue = Array.prototype.indexOf.call(stars, star);

  ratingContainer.setAttribute("data-rating", starValue);

  for (let i = 0; i < stars.length; i++) {
    if (i >= starValue) {
      stars[i].classList.add("checked");
    } else {
      stars[i].classList.remove("checked");
    }
  }
}


