const menuButton = document.getElementById("menuButton");
const siteMenu = document.getElementById("siteMenu");
const menuLinks = siteMenu.querySelectorAll("a");
const revealItems = document.querySelectorAll(".reveal");
const year = document.getElementById("year");

menuButton.addEventListener("click", function () {
  const isOpen = siteMenu.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    siteMenu.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach(function (item) {
  observer.observe(item);
});

year.textContent = new Date().getFullYear();
