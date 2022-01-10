// ================================================================ //
// MOBILE NAVIGATION REVEAL
// ================================================================ //
const mobileMenuToggle = document.getElementById("mobile-toggle");
const mobileNav = document.getElementById("mobile-nav");

const preventPageScrolling = () => {
  document.body.style.position = "fixed";
  document.body.style.top = `-${window.scroll}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
};

const allowPageScrolling = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};

mobileMenuToggle.addEventListener("click", () => {
  // mobileNav.classList.toggle("show-nav");
  const isOpen = mobileNav.classList.contains("show-nav");
  const className = "show-nav";

  if (isOpen) {
    mobileNav.classList.remove(className);
    allowPageScrolling();

  } else {
    mobileNav.classList.add(className);
    preventPageScrolling();
  }

});


// ================================================================ //
// UPDATE IMAGE & ROOT VARIABLE "--COLOR-PRIMARY" ON IMAGE CLICK
// ================================================================ //

const drinkDisplay = document.getElementById("drink-display");
const drinkBackground = document.getElementById("drink-background");
const thumbnails = document.querySelectorAll(".drink-display__thumbnail-image");

thumbnails.forEach((thumbnail) => {

  thumbnail.addEventListener("click", () => {
    drinkDisplay.src = thumbnail.getAttribute("data-image-path");
    drinkBackground.style.backgroundColor = thumbnail.getAttribute("data-color");
    document.body.style.setProperty("--color-primary", thumbnail.getAttribute("data-color"));
  });

});
