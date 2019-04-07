// Declare variables globally for access in other functions
let navTop, headerHeight, mainTop
const navbar = document.getElementsByTagName("nav")[0];
const header = document.getElementsByTagName("header")[0];
const main = document.getElementsByTagName("main")[0];

//Get current year
function setYear(){
  const currentYear = new Date().getFullYear();
  document.getElementById("footer-text").textContent += ` ${currentYear}`;
}

//Calculate & set heights when the window is loaded or resized
function setHeights() {
  navTop = navbar.offsetTop;
  headerHeight = header.offsetHeight;
  navbar.style.marginTop = `${headerHeight}px`;
  mainTop = main.offsetTop;
}

// Make navigation sticky
function addStickyNav() {
  if (window.pageYOffset >= headerHeight) {
    navbar.classList.add("sticky");
    navbar.style.marginTop = 0;
    main.style.paddingTop = `${mainTop + navbar.offsetHeight + headerHeight}px`
  } else {
    navbar.classList.remove("sticky");
    navbar.style.marginTop = `${headerHeight}px`;
    main.style.paddingTop = `${mainTop}px`;
  }
}

window.addEventListener('load', () => {
  setYear();
  setHeights();
});

window.addEventListener('resize', () => {
  setHeights();
  addStickyNav();
});

window.addEventListener('scroll', addStickyNav);