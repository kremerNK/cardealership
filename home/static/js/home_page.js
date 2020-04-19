
let searchForm = document.querySelector('.search-form').getBoundingClientRect().height * .50;


//set length of background image tire tracks////
let bg = document.querySelector('.mybg');
let bg2 = document.querySelector('.mybg2');
let bgBounding1 = bg.getBoundingClientRect();
let bgBounding2 = bg2.getBoundingClientRect();
let introBounding = document.querySelector('.intro');
let topBannerHeight = document.querySelector('.top-banner').getBoundingClientRect();
let navBarHeight = document.querySelector('#navbar').getBoundingClientRect();
let navHeight = document.querySelector('#navbar').getBoundingClientRect().height;
let bannerHeight = document.querySelector('.leftbanner').getBoundingClientRect().height;

bg.style.height = (((navHeight + bannerHeight + introBounding.offsetTop + introBounding.offsetHeight) * 1.1)).toString().concat('px');
bg2.style.height = (((navHeight + bannerHeight + introBounding.offsetTop + introBounding.offsetHeight) * 1.1)).toString().concat('px');


 

console.log((((navHeight + bannerHeight + introBounding.offsetTop + introBounding.offsetHeight) * 1.1)).toString().concat('px'));



//carousel//

$(document).ready(function(){
    $('#slideshowcontainer .slides').slick({
        slidesToShow: 4,
        slidesToScroll: 1, 
        autoplay: false,
        adaptiveHeight: true, 
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1, 
                    autoplay: true,
                    autoplaySpeed: 2000,
                    infinite: true,
                }
            },
            {
                breakpoint: 950, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1, 
                    autoplay: true,
                    autoplaySpeed: 2000,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true, 
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
        
    }) 
}); 

sessionStorage.setItem('make', document.querySelector('#makes').value);
sessionStorage.setItem('model', document.querySelector('#models').value);
sessionStorage.setItem('maxPrice', document.querySelector('#maxPrice').value);
sessionStorage.setItem('body', document.querySelector('#type').value);
  

function makeOnChange(){
    sessionStorage.setItem('make', document.querySelector('#makes').value);
}
 
function modelOnChange(){
    sessionStorage.setItem('model', document.querySelector('#models').value);
}

function priceOnChange(){
    sessionStorage.setItem('maxPrice', parseInt(document.querySelector('#maxPrice').value));
}

function typeOnChange(){
    sessionStorage.setItem('body', document.querySelector('#type').value);
}