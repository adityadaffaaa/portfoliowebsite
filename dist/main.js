// <-- Header Nav -->
window.onscroll = function () {
  const navbar = document.querySelector("nav");
  const fixedNavbar = navbar.offsetTop;
  const backToTop = document.querySelector("#backtop");

  if (window.pageYOffset > fixedNavbar) {
    navbar.classList.remove("w-full");
    navbar.classList.add("md:w-3/4");
    navbar.classList.add("w-4/5");
    navbar.classList.add("md:rounded-b-[16px]");
    navbar.classList.remove("md:bg-primary");
    navbar.classList.add("md:bg-[rgba(238,106,94,0.6)]");
    navbar.classList.add("md:backdrop-blur-2xl");
    backToTop.classList.remove("invisible");
  } else {
    navbar.classList.remove("md:w-3/4");
    navbar.classList.remove("w-4/5");
    navbar.classList.add("w-full");
    navbar.classList.remove("md:rounded-b-[16px]");
    navbar.classList.remove("bg-[#313131]");
    navbar.classList.add("md:bg-primary");
    navbar.classList.remove("md:bg-[rgba(238,106,94,0.6)]");
    navbar.classList.remove("md:backdrop-blur-2xl");
    backToTop.classList.add("invisible");
  }
};

// <-- Hamburger -->
const hamburger = document.querySelector("#hamburger");
const listNav = document.querySelector("#listnav");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  listNav.classList.toggle("hidden");
});

// <-- More Menu -->
const more = document.querySelector("#more");
const menu = document.querySelector("#menu");
const moremenuback = document.querySelector("#moremenuback");
more.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
moremenuback.addEventListener("click", () => {
  menu.classList.add("hidden");
});

// <-- Nav Hyperlink -->
// const navItem = document.querySelectorAll(".nav-item");
// const section = document.querySelectorAll("section");

// window.addEventListener("scroll", () => {
//   let current = "";
//   section.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     const sectionH = section.clientHeight;
//     if (window.pageYOffset >= sectionTop - sectionH / 4) {
//       current = section.getAttribute("id");
//     }
//   });

//   navItem.forEach((li) => {
//     li.classList.remove("text-text1");
//     if (li.classList.contains(current)) {
//       li.classList.add("text-text1");
//     }
//   });
// });

// window.onscroll = function () {
//   navItem.forEach((item) => {
//     item.classList.remove("hover:text-text1 transition-all ease-in-out duration-200");
//     if (item.href.includes("home")) {
//       item.classList.add("text-text1");
//     } else {
//       item.classList.remove("text-text1");
//     }
//   });
// };

// function activeMenu() {
//   let panjang = section.length;
//   while (--panjang && window.scrollY < section[panjang].offsetTop) {}
//   navItem.forEach((navItem) => navItem.classList.remove("hover:text-text1 transition-all ease-in-out duration-200"));
//   navItem[panjang].classList.add("text-text1");
// }
// activeMenu();
// window.addEventListener("scroll", activeMenu);
