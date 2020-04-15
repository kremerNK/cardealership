let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let mobileNumber = document.getElementsByClassName('mobile-phone')[0];
navBarToggle.addEventListener('click', function () {
    mobileNumber.classList.toggle('hidephone');
    mainNav.classList.toggle('active');
}); 


window.onscroll = function () {myFunction()};

// const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop; 
const test1 = navbar.getBoundingClientRect();
const topbanner = document.querySelector('.top-banner');

const navSpaceHeight = document.querySelector('#nav-space').getBoundingClientRect().height;
const navLeftHeight = document.querySelector('.navleft').getBoundingClientRect().height;


// navbar = document.getElementById('nav-space');
navbar = document.querySelector('.navleft');
const stickyClass = document.querySelector('.sticky');

function myFunction(){
    if (window.pageYOffset >= topbanner.offsetHeight){
        navbar.classList.add('sticky');
        navbar.style.height = (navSpaceHeight).toString().concat('px');
        // navbar.style.height = '44px';
    } else {
        navbar.classList.remove('sticky');
    }
}

const topbannerBound = topbanner.getBoundingClientRect();