$(document).ready(function(){
    $('.carousel-container .slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true,
        adaptiveHeight: true,
        autoplaySpeed: 2000, 
        
    })
});

let slideImageCount = document.querySelectorAll('.slide-images');
let totalImages = document.querySelector('.total-images');
totalImages.innerHTML = slideImageCount.length;


$('.slides').on('afterChange', function(){
    let currentIndex = parseInt(document.querySelector('.slick-slide.slick-current.slick-active').attributes.getNamedItem('data-slick-index').value) + 1;
    let currentImageInnerHTML = document.querySelector('.current-image');
    currentImageInnerHTML.innerHTML = currentIndex
})

let form = document.querySelector('.contact-form');
let formDisplayButton = document.querySelector('#form-submit')

formDisplayButton.addEventListener('click', function(){
    if (form.style.display == ''){

        form.style.display = 'block';
    } else {

        form.style.display = '';
    } 

    
})