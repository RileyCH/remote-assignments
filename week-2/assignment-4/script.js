const banner = document.querySelector(".banner");
const actionButton = document.querySelector(".content button");
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navbar");
const navMenu = document.querySelector(".nav-menu");
const closeButton = document.querySelector(".close-button");

// Request 1: Click to Change Text.
banner.addEventListener("click", () => {
  const welcomeMessage = document.querySelector(".banner h2");
  welcomeMessage.textContent = "Have a Good Time!";
});

//Request 2: Click to Show/Close Menu.
//www.youtube.com/watch?v=flItyHiDm7E&ab_channel=WebDevTutorials
hamburger.addEventListener("click", () => {
  navMenu.classList.add("active");
});

closeButton.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// Request 3: Click to Show More Content Boxes.
actionButton.addEventListener("click", () => {
  let contentBox2 = document.querySelector(".area-2");
  contentBox2.classList.remove("hidden");
});
