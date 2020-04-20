let background1 = document.querySelector('.background1').getBoundingClientRect();
let bgtest = document.querySelector('.mybg2')


let rightTrack = document.querySelector('.mybg');
let leftTrack = document.querySelector('.mybg2');



// let searchForm = document.querySelector('.search-form').getBoundingClientRect().height * .50;


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

let testbg = document.querySelector('.mybg').getBoundingClientRect();
let testbg2 = document.querySelector('.mybg2').getBoundingClientRect();
holder = 0;
window.onload = function(){
    footer = document.querySelector('.footer').offsetTop;
    console.log(footer);
    bg.style.height = (footer + (introBounding.offsetHeight * 0.6)).toString().concat('px');
    bg2.style.height = (footer + (introBounding.offsetHeight * 0.6)).toString().concat('px');
    bvavg = ((testbg.x + testbg2.x) / 2);
    console.log(Math.abs(bvavg));
    

    window.addEventListener('scroll', function(){
        console.log('roll');
        let car = document.querySelector('#svg2')
        bg.classList.add('roll');
        bg2.classList.add('roll');
        roll = document.querySelectorAll('.roll');
        roll.forEach(e1 => e1.style.maxHeight = (footer + Math.abs(testbg2.x)).toString().concat('px'));
        console.log(footer);
        //wait X seconds for roll animation
        setTimeout(function(){
            holder += 1;
            console.log(holder);
            if (holder <= 1){
                car.style.visibility = 'hidden';
                car.style.height = '0px';
                // car.style.display = 'none';

            }
            
        }, 10000)
            

        
        
    })
}

//fade in divs//
//.search-form, #slideshowcontainer, .intro

// let searchForm = document.querySelector('.search-form');
// let slideShowContainer = document.querySelector('#slideshowcontainer');
// let introDiv = document.querySelector('.intro');

// function fadeIn(element){
//     op = 0.1;
//     element.style.display = 'flex';
//     var timer = setInterval(function () {
//         if (op >= 1){
//             clearInterval(timer);
//         }
//         element.style.opacity = op;
//         element.style.opacity = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1;
//     }, 20);
// }

// window.addEventListener('scroll', function(){
//     // console.log(window.pageYOffset);
//     console.log(searchForm.getBoundingClientRect().bottom + searchForm.getBoundingClientRect().height);
    
    
// })

//tire transition//





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