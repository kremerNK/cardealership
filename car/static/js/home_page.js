//carousel//

$(document).ready(function(){
    $('#slideshowcontainer .slides').slick({
        slidesToShow: 4,
        slidesToScroll: 1, 
        autoplay: true,
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
sessionStorage.setItem('price', parseInt(document.querySelector('#maxPrice').value));
sessionStorage.setItem('type', document.querySelector('#type').value);
  

function test(){
    console.log('test');
    
}