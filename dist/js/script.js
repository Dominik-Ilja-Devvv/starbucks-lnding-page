const drinkDisplay = document.getElementById("drink-display");
const drinkBackground = document.getElementById("drink-background");
const thumbnails = document.querySelectorAll(".thumbnail-image");

thumbnails.forEach((thumbnail) => {

  thumbnail.addEventListener("click", () => {
    drinkDisplay.src = thumbnail.getAttribute("data-image-path");
    drinkBackground.style.backgroundColor = thumbnail.getAttribute("data-color");
  });

});
