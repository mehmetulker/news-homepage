const btn = document.querySelector(".mobile-menu-btn");
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const nav = document.querySelector(".navbar");

if (nav.classList.contains("active")) {
  mobileMenuIcon.src = "./assets/images/icon-menu-close.svg";
  mobileMenuIcon.alt = "Close Menu Icon";
  mobileMenuIcon.setAttribute("aria-expanded", "true");
  mobileMenuIcon.setAttribute("aria-label", "Close Menu");
} else {
  mobileMenuIcon.src = "./assets/images/icon-menu.svg";
  mobileMenuIcon.alt = "Open Menu Icon";
  mobileMenuIcon.setAttribute("aria-expanded", "false");
  mobileMenuIcon.setAttribute("aria-label", "Open Menu");
}
btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    mobileMenuIcon.src = "./assets/images/icon-menu-close.svg";
    mobileMenuIcon.alt = "Close Menu Icon";
    mobileMenuIcon.setAttribute("aria-expanded", "true");
    mobileMenuIcon.setAttribute("aria-label", "Close Menu");
  } else {
    mobileMenuIcon.src = "./assets/images/icon-menu.svg";
    mobileMenuIcon.alt = "Open Menu Icon";
    mobileMenuIcon.setAttribute("aria-expanded", "false");
    mobileMenuIcon.setAttribute("aria-label", "Open Menu");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    nav.classList.remove("active");
    mobileMenuIcon.src = "./assets/images/icon-menu.svg";
    mobileMenuIcon.alt = "Open Menu Icon";
    mobileMenuIcon.setAttribute("aria-expanded", "false");
    mobileMenuIcon.setAttribute("aria-label", "Open Menu");
  }
});
