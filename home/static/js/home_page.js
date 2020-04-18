// let blueBar = document.querySelector('.blue');
let searchForm = document.querySelector('.search-form').getBoundingClientRect().height * .50;
// if (window.matchMedia("(min-width: 1000px)").matches == false){

// } else {
//     blueBar.style.height = searchForm.toString().concat('px');
// }

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