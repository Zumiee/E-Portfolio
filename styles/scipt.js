const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  //toggle
  burger.addEventListener("click", () => {
    //toggle
    nav.classList.toggle("nav-active");

    //animation
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation =
          "navLinksFade 0.5s ease forwards ${index / 7 + 1.3}s";
      }
    });

    //burger
    burger.classList.toggle("toggle");
  });

  //animate
};

navSlide();
