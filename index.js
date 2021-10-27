const hamburger = document.querySelector(".hamburger");
const hamburgerIcon = document.querySelector(".hamburger__icon");
const nav = document.querySelector(".navlist__container");
const modalBg = document.querySelector(".modal-background");
const modal = document.querySelector(".modal");
const modalThanks = document.querySelector(".modal-thanks");
const navModalBg = document.querySelector(".nav-modal-background");
const cta = document.querySelector(".btn__cta");
const closeModalBtn = document.querySelector(".modal__close-btn");
const body = document.querySelector("body");
const continueBtn = document.querySelectorAll(".btn-continue");
const gotItBtn = document.querySelector(".btn-got-it");
const rewardBtn = document.querySelectorAll(".btn-reward");

hamburger.addEventListener("click", function () {
  nav.classList.toggle("hidden");
  navModalBg.classList.toggle("hidden");

  if (navModalBg.classList.contains("hidden")) {
    hamburgerIcon.src = "images/icon-hamburger.svg";
    body.classList.remove("modal-open");
  } else {
    hamburgerIcon.src = "images/icon-close-menu.svg";
    body.classList.add("modal-open");
  }
});

cta.addEventListener("click", function () {
  modalBg.classList.remove("hidden");
  body.classList.add("modal-open");
});

closeModalBtn.addEventListener("click", function () {
  modalBg.classList.add("hidden");
  body.classList.remove("modal-open");
});

continueBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    modalThanks.classList.remove("hidden");
    modal.classList.add("hidden");
  });
});

gotItBtn.addEventListener("click", function () {
  modalBg.classList.add("hidden");
  modalThanks.classList.add("hidden");
  modal.classList.remove("hidden");
  body.classList.remove("modal-open");
});

rewardBtn.forEach(function (button) {
  button.addEventListener("click", function () {
    modalBg.classList.remove("hidden");
    modal.classList.add("hidden");
    modalThanks.classList.remove("hidden");
  });
});
