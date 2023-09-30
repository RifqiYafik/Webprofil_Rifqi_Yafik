let typed = new Typed(".text", {
  strings: [
    "Infinite Learning Mentee",
    "Fronted Developer",
    "Web Developer",
    "UI/UX Design",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Scroll Section active link
// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       navLinks.forEach((links) => {
//         links.classList.remove("active");
//         document
//           .querySelector("header nav a[href*=" + id + "]")
//           .classList.add("active");
//       });
//     }
//   });
// };

// document.addEventListener("DOMContentLoaded", function () {
//   const navLinks = document.querySelectorAll(".navbar a");

//   navLinks.forEach(function (link) {
//     link.addEventListener("click", function (event) {
//       navLinks.forEach(function (navLink) {
//         navLink.classList.remove("active");
//       });

//       this.classList.add("active");
//     });
//   });
// });

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      document
        .querySelector(".navbar a[href='#" + id + "']")
        .classList.add("active");
    }
  });
});

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   sections.forEach((sec) => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute("id");

//     if (top >= offset && top < offset + height) {
//       // Tambahkan kelas "active" pada tautan menu yang sesuai
//       document.querySelectorAll("header nav a[href='#" + id + "']").forEach((link) => {
//         link.classList.add("active");
//       });
//     } else {
//       // Hapus kelas "active" dari tautan menu yang tidak sesuai
//       document.querySelectorAll("header nav a[href='#" + id + "']").forEach((link) => {
//         link.classList.remove("active");
//       });
//     }
//   });
// };

// function activeMenu() {
//   let len = sections.length;
//   while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
//   navLinks.forEach((sec) => sec.classList.remove("active"));
//   navLinks[len].classList.add("active");
// }

// activeMenu();
// window.addEventListener("scroll", activeMenu);

// /////Sticky Navbar/////
let header = document.querySelector("header");

header.classList.toggle("sticky", window.scrollY > 100);

// /////Clear Form Contact Before Unload/////

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

// /////Toggle Navbar Active /////
// const navSlide = () => {
//   const burger = document.querySelector(".burger");
//   const navbar = document.querySelector(".navbar");

//   burger.addEventListener("click", () => {
//     navbar.classList.toggle("active");
//     burger.classList.toggle("toggle-burger");
//   });
// };
// navSlide();

const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");

console.log(burger); // Untuk memeriksa apakah burger ditemukan
console.log(navbar); // Untuk memeriksa apakah navbar ditemukan

burger.addEventListener("click", () => {
  navbar.classList.toggle("navbar.active");
  burger.classList.toggle("toggle-burger");
});
