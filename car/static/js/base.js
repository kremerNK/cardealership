let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let mobileNumber = document.getElementsByClassName('mobile-phone')[0];
navBarToggle.addEventListener('click', function () {
    mobileNumber.classList.toggle('hidephone');
    mainNav.classList.toggle('active');
}); 
    



window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementsByClassName('topbanner')[0].style.height = '8vh';
//         document.getElementById('leftbannerh4').style.display = 'none';
//         document.getElementsByClassName('rightbanner')[0].style.flexDirection = 'row';
//         document.getElementById('phonenumber').style.paddingRight = '50px';
//         document.getElementsByClassName('rightbanner')[0].style.alignItems = 'center';
        

         
//     } else {
//         document.getElementsByClassName('rightbanner')[0].style.flexDirection = 'column';
//         document.getElementsByClassName('topbanner')[0].style.height = '15vh';
//         document.getElementById('leftbannerh4').style.display = 'block';
//         document.getElementById('phonenumber').style.paddingRight = '0px';
//         document.getElementsByClassName('rightbanner')[0].style.alignItems = 'flex-end';
//     }
// };