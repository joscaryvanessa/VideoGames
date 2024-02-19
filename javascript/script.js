// menu hamburguesa //
function inicializarMenuHamburguesa() {
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
}
inicializarMenuHamburguesa();

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

//SHOPPING CARD

document.addEventListener("DOMContentLoaded", function () {
  var numeroArticulosElement = document.getElementById("numeroArticulos");
  var cantidadArticulos = 0;

  function agregarAlCarrito() {
    cantidadArticulos++;
    actualizarNumeroArticulos();
  }

  function actualizarNumeroArticulos() {
    numeroArticulosElement.textContent = cantidadArticulos;
  }

  var carritoIcono = document.querySelector(".carrito i");
  carritoIcono.addEventListener("click", function () {
    agregarAlCarrito();
  });
});
