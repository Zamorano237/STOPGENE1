'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

var acc = document.getElementsByClassName("accordions");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("actives");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


const plansSwitch = document.querySelector(".plans-switch");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener("change", () => {
    if (plansSwitch.checked) {
        
        professionalPrice.innerText = "39,99 €";
        businessPrice.innerText = "41,99 €";
        planDuration.forEach(p => {
            p.innerHTML= " /an"
        })
    } else {
        professionalPrice.innerText = "3,99 €";
        businessPrice.innerText = "4,99 €";
        planDuration.forEach(p => {
          p.innerHTML= " /mois";
        })
    }
})