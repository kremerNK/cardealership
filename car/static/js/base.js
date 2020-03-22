let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let mobileNumber = document.getElementsByClassName('mobile-phone')[0];
navBarToggle.addEventListener('click', function () {
    mobileNumber.classList.toggle('hidephone');
    mainNav.classList.toggle('active');
}); 


window.onscroll = function () {myFunction()};

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function myFunction(){
    if (window.pageYOffset >= sticky){
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

