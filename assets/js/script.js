
/* 
* PRELOADER 
*/

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load" , () => {
    setTimeout(() => {
        preloader.classList.add("remove")
    }, 2000);
});


/* 
* ADD EVENTS ON MULTIPLE ELEMENTS 
*/

const addEventOnElements = function(elements , eventType , callback){
    for(i = 0 , len = elements.length ; i < len ; i++){
        elements[i].addEventListener(eventType , callback)
    }
}

/*
*  NAVBAR TOGGELER FOR MOBILE 
*/

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements(navToggler , "click" , toggleNav);

/*
* STCKY HEADER ANIMATION
*/

const header = document.querySelector("[data-header]");

window.addEventListener("scroll" , () => {
    
    header.classList[window.scrollY > 100 ? "add" : "remove" ]("active")

});


// SCROLLER

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header ul a[href="#${id}"]`).classList.add("active")
            });
        }
    });
};




const navLink = document.querySelectorAll('[data-nav-link]');
const headerM = document.querySelector("[data-header]");

function closeNavLinks(){
  
  headerM.classList.remove("active")
//   navbar.classList.remove("active");

}

closeNavLinks();

