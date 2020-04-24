let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let mobileNumber = document.getElementsByClassName('mobile-phone')[0];
navBarToggle.addEventListener('click', function () {
    mobileNumber.classList.toggle('hidephone');
    mainNav.classList.toggle('active');
}); 

// navHeight = document.querySelector('#navbar').getBoundingClientRect().height;
// bannerHeight = document.querySelector('.leftbanner').getBoundingClientRect().height;


window.onscroll = function () {myFunction()};


const sticky = navbar.offsetTop; 
const test1 = navbar.getBoundingClientRect();
const topbanner = document.querySelector('.top-banner');
 
const navSpaceHeight = document.querySelector('#nav-space').getBoundingClientRect().height;
const navLeftHeight = document.querySelector('.navleft').getBoundingClientRect().height;


navbar = document.querySelector('.navleft');
const stickyClass = document.querySelector('.sticky');

function myFunction(){
    if (window.pageYOffset >= topbanner.offsetHeight){
        navbar.classList.add('sticky');
        navbar.style.height = (navSpaceHeight).toString().concat('px');
    } else {
        navbar.classList.remove('sticky');
    }
}

const topbannerBound = topbanner.getBoundingClientRect();
 

/////////////viewed popup//////////////



carInfo = JSON.parse(localStorage.getItem('viewedCars'));
if (carInfo != null){
    console.log(carInfo);
    var popup = document.querySelector('#viewed-popup');
    for (i=0; i < carInfo.length; i++){
        console.log(i);
        
        let index = i;
        
        console.log(carInfo[i]);
        let card = document.createElement('div');
        card.setAttribute('id', 'carCardPopup')
        popup.appendChild(card)
        let carPictureDiv = document.createElement('div');
        let carImage = document.createElement('img');
        carImage.src = carInfo[i]['carPic'];
        carPictureDiv.appendChild(carImage);
        
        carPictureDiv.setAttribute('id', 'carPicPopup');
        card.appendChild(carPictureDiv);

        let carInfoDivPopup = document.createElement('div')
        carInfoDivPopup.setAttribute('id', 'carInfoDivPopup');
        card.appendChild(carInfoDivPopup)

        let carTitle = document.createElement('h2');
        
        let carPrice = document.createElement('p');
        carPrice.setAttribute('id', 'carPricePopup');
        let carMiles = document.createElement('p');
        carMiles.setAttribute('id', 'carMilesPopup');
        
        carInfoDivPopup.append(carTitle);
        carInfoDivPopup.append(carPrice);
        carInfoDivPopup.append(carMiles);

        carTitle.textContent = carInfo[i]['carTitle'];
        carPrice.textContent = carInfo[i]['carPrice'];
        carMiles.textContent = carInfo[i]['carMiles'] + ' miles';

        let viewBtn = document.createElement('button');
        viewBtn.onclick = function(){
            console.log(carInfo[index]['carURL']);
            window.location = carInfo[index]['carURL'];
        }
        viewBtn.setAttribute('id', 'viewBtn')
        card.appendChild(viewBtn);
        viewBtn.textContent = 'View';
        

        };
}

let popupClick = document.querySelector('#click-popup');
popupClick.addEventListener('click', function(){
    let popup = document.querySelector('#viewed-popup')
    if (popup.style.display == ''){
        popup.style.display = 'block';
    } else {
        popup.style.display = '';
    }
    
})

