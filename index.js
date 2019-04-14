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

//Update contact text based on which contact link is hovered over
function changeContactText(linkId) {
  let contactText = "";
  if (linkId === "github"){
    contactText = "Find My Work on Github";
  } else if (linkId === "linkedin"){
    contactText = "Connect With Me on LinkedIn";
  } else if (linkId === "email"){
    contactText = "Contact Me Via Email";
  }
  document.getElementById('contact-text').textContent = contactText;
}

function resetContactText(){
  document.getElementById('contact-text').textContent = "Get in Touch";
}

window.addEventListener('load', () => {
  setYear();
  setHeights();
});

window.addEventListener('resize', setHeights);

document.getElementById("github").addEventListener("mouseover", () => changeContactText("github"));
document.getElementById("linkedin").addEventListener("mouseover", () => changeContactText("linkedin"));
document.getElementById("email").addEventListener("mouseover", () => changeContactText("email"));

document.getElementById("github").addEventListener("focus", () => changeContactText("github"));
document.getElementById("linkedin").addEventListener("focus", () => changeContactText("linkedin"));
document.getElementById("email").addEventListener("focus", () => changeContactText("email"));

document.getElementById("contact-list").addEventListener("mouseleave", resetContactText);
document.getElementById("contact-list").addEventListener("focusout", resetContactText);