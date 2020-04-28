document.getElementById('userinput').value = ''; 

////////set margins////////



let h2headermobile = document.querySelector('#h2-header-mobile');
let topHeight = document.querySelector('.top-banner').getBoundingClientRect().height + document.querySelector('.mobile-phone').getBoundingClientRect().height;
h2headermobile.style.marginTop = (topHeight).toString().concat('px'); 