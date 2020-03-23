let bannerHeight = document.querySelector('.top-banner').offsetHeight;
let phoneHeight = document.querySelector('.mobile-phone').offsetHeight;
let marginTop = bannerHeight + phoneHeight;
let body = document.querySelector('.mobile-margin');



body.style.marginTop = ((marginTop * 1.1).toString() + 'px'); 