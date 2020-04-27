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

        console.log('toggle on');
        
        form.classList.toggle('active-form');
    } else {
        console.log('toggle off');
        
        form.classList.toggle('active-form');
    } 

    
})

let slide = document.querySelector('.slides');
let slideWidth = (slide.getBoundingClientRect().width * 0.95);
slide.style.width = slideWidth.toString().concat('px');
slide.style.margin = '0 auto';


//////phone number formatter on input///////////

////////automatically insert hyphen in Phone input////////////
const phoneInput = document.querySelector('#id_phone');


// phoneInput.value = '';
 
const phoneFormat = '{0}{1}{2}-{3}{4}{5}-{6}{7}{8}{9}';

phoneInput.addEventListener('input', (event) => {
  const inputStripped = phoneInput.value.replace(/\D/g, '');
  const inputIsValid = !isNaN(parseInt(event.data));

  if (event.inputType.includes('deleteContent')) {
    /*
     TODO Create input inequality when values are deleted
     that are NOT at the end of the input
     '(012) 34' -> '(012) 3' FINE
     '(012) 34' -> '(01x) 34' INEQUALITY TO FIX
    */
    return;
  }

  /*
    If text was inserted on 'input', and the current length is max (or input 
    value was not a number), then remove the last inputted value.
  */
  if (event.inputType == 'insertText' && (inputStripped.length > 10 || !inputIsValid)) {
    phoneInput.value = phoneInput.value.substring(0, phoneInput.value.length - 1);
    return;
  }

  if (inputStripped)
    phoneInput.value = formatPhoneInput(inputStripped);
});

const formatPhoneInput = (inputNumber) => {
  let inputNumArr = inputNumber.split('');
  let formatVar = inputNumArr.length - 1;
  
  // indexOf() + 3, so we can replace the entire '{x}' variable in phoneFormat
  let replaceIndex = phoneFormat.indexOf(`{${formatVar}}`) + 3;
  
  // Autocompletion to next input value
  switch (formatVar) {
    case 2:
      replaceIndex += 1;
      break;
    case 5:
      replaceIndex += 1;
      break;
    default:
      break;
  }
  
  // phoneFormat substring based on the current number length
  let formattedInput = phoneFormat.substring(0, replaceIndex);

  for (let i = 0; i < inputNumArr.length; i++) {
    formattedInput = formattedInput.replace(`{${i}}`, inputNumArr[i]);
  }

  return formattedInput;
}



/////////add vehicle info to localStorage///////////

function makeComparisonStorage(){

  if (sessionStorage.getItem('viewedVehicles') !== null){
    console.log('not null');
    pictureExists = false;
    let sessionArray = JSON.parse(sessionStorage.getItem('viewedVehicles'))
    let newDict = {}
    console.log(sessionArray);

    for (i=0; i < sessionArray.length; i++){
      console.log(sessionArray[i]['vehiclePic']);
      if (sessionArray[i]['vehiclePic'] == document.querySelector('.slick-track').children[1].getAttribute('src')){
            console.log('true, do not add this vehicle');
            
            pictureExists = true;
          }
    };
    console.log(pictureExists);
    
    if (pictureExists == false){
      newDict['vehicleTitle'] = document.querySelector('.vehicletitle').getElementsByTagName('p')[0].textContent;
      newDict['vehicleMake'] = document.querySelector('#vmake').textContent;
      newDict['vehicleModel'] = document.querySelector('#vmodel').textContent;
      newDict['vehicleYear'] = document.querySelector('#vyear').textContent;
      newDict['vehiclePrice'] = document.querySelector('.price').getElementsByTagName('div')[0].querySelector('#price').textContent;
      newDict['vehicleMileage'] = document.querySelector('.price').getElementsByTagName('div')[1].querySelector('#vehicle-mileage').textContent;
      newDict['vehicleMPG'] = document.querySelector('#mpg').textContent;
      newDict['exteriorColor'] = document.querySelector('#exterior-color').textContent;
      newDict['interiorColor'] = document.querySelector('#interior-color').textContent;
      newDict['vehicleTransmission'] = document.querySelector('#vehicle-transmission').textContent;
      newDict['vehicleEngine'] = document.querySelector('#vehicle-engine').textContent;
      newDict['vehicleDriveLine'] = document.querySelector('#vehicle-driveline').textContent;
      newDict['vehicleStockNumber'] = document.querySelector('#vehicle-stocknumber').textContent;
      newDict['vehicleVIN'] = document.querySelector('#vehicle-vin').textContent;
      newDict['vehiclePic'] = document.querySelector('.slick-track').children[1].getAttribute('src')
      newDict['vehicleLink'] = window.location.toString();
      newDict['vehicleDoors'] = document.querySelector('#vehicle-doors').textContent;
      console.log(newDict);
      sessionArray.push(newDict);
      sessionStorage.setItem('viewedVehicles', JSON.stringify(sessionArray));
      console.log(JSON.parse(sessionStorage.getItem('viewedVehicles')));
    } 

    

  } else {
    console.log('does not yet exist, crease session');
    //gather all attributes of vehicle to store in session, to access in compare
    
    // console.log(vehicleTitle, vehiclePrice, vehicleMileage, vehicleMPG, exteriorColor, interiorColor, vehicleTransmission, 
    //   vehicleEngine, vehicleDriveLine, vehicleStockNumber, vehicleVIN);
    let sessionArray = [];
    let sessionDict = {};
    sessionDict['vehicleTitle'] = document.querySelector('.vehicletitle').getElementsByTagName('p')[0].textContent;
    sessionDict['vehicleMake'] = document.querySelector('#vmake').textContent;
    sessionDict['vehicleModel'] = document.querySelector('#vmodel').textContent;
    sessionDict['vehicleYear'] = document.querySelector('#vyear').textContent;
    sessionDict['vehiclePrice'] = document.querySelector('.price').getElementsByTagName('div')[0].querySelector('#price').textContent;
    sessionDict['vehicleMileage'] = document.querySelector('.price').getElementsByTagName('div')[1].querySelector('#vehicle-mileage').textContent;
    sessionDict['vehicleMPG'] = document.querySelector('#mpg').textContent;
    sessionDict['exteriorColor'] = document.querySelector('#exterior-color').textContent;
    sessionDict['interiorColor'] = document.querySelector('#interior-color').textContent;
    sessionDict['vehicleTransmission'] = document.querySelector('#vehicle-transmission').textContent;
    sessionDict['vehicleEngine'] = document.querySelector('#vehicle-engine').textContent;
    sessionDict['vehicleDriveLine'] = document.querySelector('#vehicle-driveline').textContent;
    sessionDict['vehicleStockNumber'] = document.querySelector('#vehicle-stocknumber').textContent;
    sessionDict['vehicleVIN'] = document.querySelector('#vehicle-vin').textContent;
    sessionDict['vehiclePic'] = document.querySelector('.slick-track').children[1].getAttribute('src');
    sessionDict['vehicleLink'] = window.location.toString();
    sessionDict['vehicleDoors'] = document.querySelector('#vehicle-doors').textContent;
    sessionArray.push(sessionDict)
    sessionStorage.setItem('viewedVehicles', JSON.stringify(sessionArray));
  } 
}; 

 
window.onload = function(){
  let carDetails = {};
  carDetails['carTitle'] = document.querySelector('.vehicletitle').getElementsByTagName('p')[0].innerHTML;
  carDetails['carPrice'] = document.querySelector('#price').innerHTML;
  carDetails['carMiles'] = document.querySelector('#vehicle-mileage').innerHTML;
  carDetails['carURL'] = window.location.href;

  
  // carDetails['carCondition'] = 'used'; 
  carDetails['carPic'] = document.querySelector('.slick-track').children[1].getAttribute('src');

  if (localStorage.getItem('viewedCars')){
    let parsedStorage = JSON.parse(localStorage.getItem('viewedCars'));
    picExists = false;
    parsedStorage.forEach(e1 => {
      if (e1['carPic'].indexOf(carDetails['carPic']) != -1){
        picExists = true;
      }
    });

    if (picExists == false){
      parsedStorage.push(carDetails)
      localStorage.setItem('viewedCars', JSON.stringify(parsedStorage));
    } 

  } 
  else {
    let storageArray = [];
    storageArray.push(carDetails);
    localStorage.setItem('viewedCars', JSON.stringify(storageArray));
  }

  /////make the sessionStorage for comparison page////
  makeComparisonStorage();
}; 