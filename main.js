const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".container ul li");
const button = document.getElementById("btn");

window.addEventListener("scroll", () => {
  let current = "";
  //   console.log(pageYOffset); // how much we scrolled
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80 - 160;
    console.log(sectionTop); //calculate from top to section //160 = padding
    const sectionHeight = section.clientHeight; //section height
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
      setTimeout(() => {
        section.classList.add("show");
      }, 100);
      if (current === "about") {
        button.style.animation = "slide 1s linear forwards";
      }
    }
    if (pageYOffset <= sectionTop) {
      setTimeout(() => {
        section.classList.remove("show");
      }, 100);
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(`${current}z`)) {
      li.classList.add("active");
    }
  });
});
