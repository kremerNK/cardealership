// let slidePics = document.querySelectorAll('.slides');
// slidePics.forEach(e1 => e1.style.display = 'none');
// for (i = 0; i < 3; i++){
//     slidePics[i].style.display = '';
// }
// let slideCount = -1;

$(document).ready(function(){
    $('#slideshowcontainer .slides').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        adaptiveHeight: true,
        autoplaySpeed: 2000, 
        responsive: [
            {
                breakpoint: 1024, 
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





// let slideInterval = setInterval('slideFunction(slideCount)', 2000);




// function slideFunction(){
//     if (slideCount < slidePics.length - 3){
//         slideCount++;
//     } else {
//         slideCount = 0
//     };

//     let emptyArray = [];


//     for (i=slideCount; i < slideCount + 3; i++){
//         emptyArray.push(i)
//     }

//     console.log(emptyArray);
    
//     // for (i=0; i < emptyArray.length; i++)
//     slidePics.forEach(e1 => e1.style.display = 'none');

//     slidePics[emptyArray[0]].style.display = '';
//     slidePics[emptyArray[1]].style.display = '';
//     slidePics[emptyArray[2]].style.display = '';
        

//     // slidePics.forEach(e1 => {
//     //     // console.log(e1);
        
        
//     //     // for (i=0; i < emptyArray.length; i++){
//     //     //    console.log(e1);
           
            
            
            
            
            
//     //     //     if (e1 == slidePics[emptyArray[i]]){
                
//     //     //         console.log('true');
                
                
//     //     //         e1.style.display = '';
//     //     //     } 
//     //     //     else {
//     //     //         e1.style.display = 'none';
//     //     //     }
            
//     //     // }
//     // })


//     //     if (slideCount < slidePics.length - 1){
//     //         slideCount++;
//     //     } else {
//     //         slideCount = 0;
//     //     }

//     //     if (e1 == slidePics[slideCount]){
//     //         e1.style.display = '';
//     //     } else {
//     //         e1.style.display = 'none';
//     //     }
//     // })
//     };
    
    
