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
 
document.addEventListener('click', function(){
    //try runnning a delay here
    console.log('document click');
    var ignore = document.getElementById('close-btn');
    console.log(event.target);
    // console.log(findAncestorById(event.target, 'popup-container'));
    let popup = document.querySelector('#viewed-popup');
    let compareDiv = document.querySelector('#compare-div');
    let popupContainer = document.querySelector('#popup-container');
    if (findAncestorById(event.target, 'popup-container') === null && 
    findAncestorById(event.target, 'click-popup') === null &&
    !(event.target == ignore || ignore.contains(event.target))){
    // if (event.target == ignore || ignore.contains(event.target)){
        // console.log('outside container');
        console.log('ignore target');
        
        popup.style.display = '';
        compareDiv.style.display = '';
        popupContainer.style.display = '';
    } else {
        console.log('inside');
   
    }
}, true);


/////////////viewed popup//////////////



carInfo = JSON.parse(localStorage.getItem('viewedCars'));
if (carInfo != null){
    let popupContainer = document.createElement('section');

    let popup = document.querySelector('#viewed-popup');
    for (i=0; i < carInfo.length; i++){
        
        let index = i;
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
            window.location = carInfo[index]['carURL'];
        } 
        viewBtn.setAttribute('id', 'viewBtn')
        card.appendChild(viewBtn);
        viewBtn.textContent = 'View';

        let compareInputForm = document.createElement('form');
        compareInputForm.setAttribute('id', 'compare-form');
        compareInputForm.action = "";
        card.appendChild(compareInputForm);
        let compareFormLabel = document.createElement('label');
        compareFormLabel.setAttribute('class', 'compare-form-label');
        compareInputForm.appendChild(compareFormLabel)
        let compareFormInput = document.createElement('input');
        compareFormInput.setAttribute('id', 'compare-form-input');
        compareFormInput.type = 'checkbox';
        compareFormLabel.appendChild(compareFormInput);
        let compareFormSpan = document.createElement('span');
        compareFormSpan.setAttribute('class', 'compare-form-checkmark');
        compareFormLabel.appendChild(compareFormSpan)        
        
        let closeBtn = document.createElement('i');
        closeBtn.classList.add('fas');
        closeBtn.classList.add('fa-times');
        closeBtn.classList.add('fa-2x');
        closeBtn.setAttribute('id', 'close-btn');
        card.appendChild(closeBtn);
        closeBtn.onclick = function(){
            console.log('close btn click');
            
            let removedCarName = this.parentElement.querySelector('#carInfoDivPopup').getElementsByTagName('h2')[0].textContent;
            for (i=0; i < carInfo.length; i++){
                if (carInfo[i]['carTitle'] == removedCarName){
                    getIndex = i;
                }
            }
            carInfo.splice(getIndex, 1)
            localStorage.setItem('viewedCars', JSON.stringify(carInfo));
            totalViewedCount();
            popup.removeChild(card);
            if (popup.children.length == 0){
                popup.style.visibility = 'hidden';
                document.querySelector('#total-viewed').style.visibility = 'hidden';
                document.querySelector('#popup-container').style.display = '';


            }
        }
        };
    let compareDiv = document.createElement('div');
    compareDiv.setAttribute('id', 'compare-div');
    document.querySelector('#popup-container').appendChild(compareDiv);
    let buttonAnchor = document.createElement('a');
    buttonAnchor.href = '/compare';
    compareDiv.appendChild(buttonAnchor);
    let compareBtn = document.createElement('button');
    
    compareBtn.textContent = 'Compare';
    compareBtn.setAttribute('id', 'compare-btn');
    buttonAnchor.appendChild(compareBtn);

     

} 

////////click to make pop up appear////////
let popupClick = document.querySelector('#click-popup');
popupClick.addEventListener('click', function(){
    let popup = document.querySelector('#viewed-popup');
    let compareDiv = document.querySelector('#compare-div');
    let totalViewed = document.querySelector('#total-viewed');
    console.log(document.querySelector('#carCardPopup'));
    let popupContainer = document.querySelector('#popup-container');
    
    if (popup.style.display == '' &&
    JSON.parse(localStorage.getItem('viewedCars')).length > 0 &&
    document.querySelector('#carCardPopup') !== null){
        popup.style.display = 'block';
        compareDiv.style.display = 'block';
        popupContainer.style.display = 'block';
    } else {
        popup.style.display = '';
        compareDiv.style.display = '';
        popupContainer.style.display = '';
    }
})




/////////session Storage for compared vehicles/////
//////might need to check the localstorage viewedCars on the compare page///
///to verify that the car is still in the viewed list/////
let compareCheckmarks = document.querySelectorAll('#compare-form-input');


function findAncestorById (el, eleid) {
    while ((el = el.parentElement) && !el.id.includes(eleid));
    return el;
}

function getPictureName(str){
    
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    var sliceStr = joinArray.split('/')
    var splitString = sliceStr[0].split('');
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join('');

    return joinArray;
}

// compareCheckmarks.forEach(e1 => e1.addEventListener('click', function(){
//     console.log(e1.id);
//     let parentCard = findAncestorById(e1, 'carCardPopup')
//     console.log(parentCard);
//     let sortPicture = parentCard.querySelector('#carPicPopup').getElementsByTagName('img')[0].src;
//     let sortTitle = parentCard.querySelector('#carInfoDivPopup').getElementsByTagName('h2')[0];
//     console.log(getPictureName(sortPicture), sortTitle.textContent);
//     ///care compare session and then send it to django with ajax
//     let compareArray = [];
//     let compareDict = {}
//     if (sessionStorage.getItem('toCompare') !== null){
//         console.log('storage exists');
//         let compareArray = JSON.parse(sessionStorage.getItem('toCompare'));
//         compareDict['sortPic'] = sortPicture;
//         compareDict['sortTitle'] = sortTitle;
//         compareArray.push(compareDict);
//         sessionStorage.setItem('toCompare', JSON.stringify(compareArray))
//         console.log(JSON.parse(sessionStorage.getItem('toCompare')));
        
//     } else {
//         console.log('storage does not exist');
//         compareDict['sortPic'] = sortPicture;
//         compareDict['sortTitle'] = sortTitle;
//         compareArray.push(compareDict);
//         sessionStorage.setItem('toCompare', JSON.stringify(compareArray));
//         console.log(JSON.parse(sessionStorage.getItem('toCompare')));
//     }
    
// }));


if (JSON.parse(localStorage.getItem('viewedCars')) === null){

} else { 
    let compareBtn = document.querySelector('#compare-btn');
    compareBtn.addEventListener('click', function(){
        sessionStorage.removeItem('toCompare');
        console.log(compareCheckmarks);
        let compareArray = [];
        
        compareCheckmarks.forEach(e1 => {
            let compareDict = {}
            console.log(e1.checked);
            if (e1.checked === true){
                let parentCard = findAncestorById(e1, 'carCardPopup')
                console.log(parentCard);
                let sortPicture = parentCard.querySelector('#carPicPopup').getElementsByTagName('img')[0].src;
                let sortTitle = parentCard.querySelector('#carInfoDivPopup').getElementsByTagName('h2')[0].textContent;
                compareDict['sortPicture'] = getPictureName(sortPicture);
                compareDict['sortTitle'] = sortTitle;
                compareArray.push(compareDict);
            }
        });     
        sessionStorage.setItem('toCompare', JSON.stringify(compareArray));
    }); 
}


//////////change number of viewed according to amount in localstorage//////
let totalViewed = document.querySelector('#total-viewed');
function totalViewedCount(){
    if (JSON.parse(localStorage.getItem('viewedCars')).length == 0){
        totalViewed.style.visibility = 'hidden';
    } else {
      totalViewed.style.visibility = 'visible';
    }
    if (JSON.parse(localStorage.getItem('viewedCars')) === null){
        totalViewed.style.visibility = 'hidden';
        totalViewed.style.display = 'none';
    } else {
        let total = JSON.parse(localStorage.getItem('viewedCars')).length;
        totalViewed.textContent = total.toString();
        // totalViewed.style.backgroundColor = '#2db82d';
        totalViewed.style.backgroundColor = '#ff0000';
        totalViewed.style.display = 'inline';
    }
}
totalViewedCount();




    // (event.target !== document.querySelector('#close-btn')