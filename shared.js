var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNobutton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");

var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    // modal.className = 'open'; //this will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});

modalNobutton?.addEventListener("click", closeModal);

function closeModal() {
  backdrop.classList.remove("open");
  modal?.classList.remove("open");
  // backdrop.style.display = "none";
  // modal.style.display = "none";
}

toggleButton.addEventListener("click", function () {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

ctaButton.addEventListener("animationstart", function (event) {
  console.log("Animation started", event);
});

ctaButton.addEventListener("animationend", function (event) {
  console.log("Animation ended", event);
});

ctaButton.addEventListener("animationiteration", function (event) {
  console.log("Animation iteration", event);
});
