


//reset search bar values on refresh
// let yearMinSearch = document.querySelector('#selectYearMin');
// let yearMaxSearch = document.querySelector('#selectYearMax');
// yearMinSearch.value = '1995';
// yearMaxSearch.value = '2020';
// let mpgSearch = document.querySelector('#fuelEfficiencyFilter');
// let bodyTypeSearch = document.querySelector('#bodyStyleFilter'); 
// mpgSearch.value = 'any';
// bodyTypeSearch.value = 'any';
// let resetMakeSearch = document.querySelector('#makeFilter');
// resetMakeSearch.value = 'any';


//reset drop downs on refresh
let test = document.querySelectorAll('.dropDown');
for (i = 0; i < test.length; i ++){
    test[i].style.display = '';
}

///propagates search to next page///////
function priceMaxHandle(){
    if (sessionStorage.getItem('maxPrice')){
        console.log(sessionStorage.getItem('maxPrice'));
        return parseInt(sessionStorage.getItem('maxPrice'));
    } else {
        console.log('15000');
        return 15000;
    }
}
let slideMaxValue = priceMaxHandle()

function priceMinHandle(){
    if (sessionStorage.getItem('minPrice')){
        return parseInt(sessionStorage.getItem('minPrice'));
    } else {
        return 2000;
    }
}
let slideMinValue = priceMinHandle()


function makeSession(){
    console.log('maksession runs');
    
    if (sessionStorage.getItem('make')){
        sessionStorage.setItem('make', document.querySelector('#makeFilter').value)
        console.log(sessionStorage.getItem('make'))
        console.log('if executed');
        
        return sessionStorage.getItem('make')
    } else {
        sessionStorage.setItem('make', document.querySelector('#makeFilter').value)
        console.log(sessionStorage.getItem('make'))
        console.log('else executed');
        
        return sessionStorage.getItem('make');
    }
 
}

function makeFilterPageLoad(){
    console.log('test');
    
    if (!sessionStorage.getItem('make')){
        return 'any';
    } else {
        return sessionStorage.getItem('make');
    }
    
}
document.querySelector('#makeFilter').value = makeFilterPageLoad()

function mileageSessionMin(){
    if (sessionStorage.getItem('minMileage')){
        return parseInt(sessionStorage.getItem('minMileage'));
    } else {
        return 5000;
    }
}
let mileageSessionValueMin = mileageSessionMin()

function mileageSessionMax(){
    if (sessionStorage.getItem('maxMileage')){
        return parseInt(sessionStorage.getItem('maxMileage'));
    } else {
        return 250000;
    }
}
let mileageSessionValueMax = mileageSessionMax()

let regularSlider = document.querySelector('.regular-slider');
// wNumb is their tool to format the number. We us it to format the numbers that appear in the handles
let dollarPrefixFormat = wNumb({prefix: '$', decimals: 0})



let slider = noUiSlider.create(regularSlider, {

    
    // two handles
    start: [slideMinValue, slideMaxValue],
    // they are connected
    connect: true,
    // their minimal difference is 5 - this makes sense, because we want the user to always find items
    margin: 1,
    // tooltip for handle 1 and handle 2
    tooltips: [dollarPrefixFormat, dollarPrefixFormat],
    pips: {
        mode: 'steps',
        density: 1,
        format: dollarPrefixFormat
    },
    // start and end point of the slider - we are going to calculate that later based on a set of items
    range: {min: 1, max: 15000}
    
})




let uiConnect = document.querySelectorAll('.noUi-connect');
for (i=0; i < uiConnect.length; i++){
    uiConnect[i].style.backgroundColor = '#2f74a3';
}

var bottomslider = document.getElementsByClassName('noUi-tooltip')[0];
var topslider = document.getElementsByClassName('noUi-tooltip')[1];
let min = document.getElementById('min');
let max = document.getElementById('max');
min.value = bottomslider.innerText.substring(1, bottomslider.innerText.length);
max.value = topslider.innerText.substring(1, topslider.innerText.length)

regularSlider.noUiSlider.on('change', function(){
    max.value = topslider.innerText.substring(1, topslider.innerText.length);
    min.value = bottomslider.innerText.substring(1, bottomslider.innerText.length);
 
    
    sessionStorage.setItem("maxPrice", max.value);
    sessionStorage.setItem("minPrice", min.value);

    let sendPriceRange = new XMLHttpRequest()
    sendPriceRange.onload = function(){
        if (sendPriceRange.status == 200){
            console.log('success');
            
        } else {
            console.log('request failed');
            
        }
    }

    sendPriceRange.open('POST', '', true);
    sendPriceRange.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    sendPriceRange.send(JSON.stringify({'min':'like', 'max':'heartint'})); 

    filterVehicles()
})

function sliderChange(val){
    console.log('slide change');
    
    if (val.id == 'max'){
        if (parseInt(val.value) > parseInt(min.value)) {
            regularSlider.noUiSlider.set([null, parseInt(val.value)])
        } 
    } else if (val.id == 'min'){
        if (parseInt(val.value) < parseInt(max.value)){
            regularSlider.noUiSlider.set([parseInt(val.value), null])
        }
    }
    filterVehicles();
}; 
////////////////////////////////////////////////////////////////////////////////////////


let mileageSlider = document.querySelector('.mileage-slider');
// wNumb is their tool to format the number. We us it to format the numbers that appear in the handles
let mileagePrefixFormat = wNumb({prefix: '', decimals: 0})
let mileage = noUiSlider.create(mileageSlider, {
    // two handles
    start: [mileageSessionValueMin, mileageSessionValueMax],
    // they are connected
    connect: true,
    // their minimal difference is 5 - this makes sense, because we want the user to always find items
    margin: 1,
    // tooltip for handle 1 and handle 2
    tooltips: [mileagePrefixFormat, mileagePrefixFormat],
    pips: {
        mode: 'steps',
        density: 1,
        format: mileagePrefixFormat
    },
    // start and end point of the slider - we are going to calculate that later based on a set of items
    range: {min: 1, max: 250000}
})

let bottomSliderMileage = document.getElementsByClassName('noUi-tooltip')[2];
let topSliderMileage = document.getElementsByClassName('noUi-tooltip')[3];
let mileageMin = document.getElementById('mileageMin');
let mileageMax = document.getElementById('mileageMax');
let mileageDetails = document.getElementsByName('mileage');
uiConnect = document.querySelectorAll('.noUi-connect');
for (i=0; i < uiConnect.length; i++){
    uiConnect[i].style.backgroundColor = '#2f74a3';
}

//update input boxes
mileageSlider.noUiSlider.on('update', function(){
    mileageMax.value = topSliderMileage.innerText;
    mileageMin.value = bottomSliderMileage.innerText;
    
    
    
    filterVehicles();
    let parseMMax = parseInt(mileageMax.value);
    let parseMMin = parseInt(mileageMin.value);
    
    for (i=0; i < mileageDetails.length; i++){
        let parseMileage = parseInt(mileageDetails[i].innerHTML)

        if (parseMileage <= parseMMax) {

        } else {

        }
    }
})

function mileageSliderChange(val){
    //put filter function here also
    console.log('mileage input change slider');
    
    if (val.id == 'mileageMax'){
      
        
        if (parseInt(val.value) > parseInt(mileageMin.value)) {
            mileageSlider.noUiSlider.set([null, parseInt(val.value)])
            
        } 
    } else if (val.id == 'mileageMin'){
   
        
        if (parseInt(val.value) < parseInt(mileageMax.value)){
            mileageSlider.noUiSlider.set([parseInt(val.value), null])
        }
    }
    filterVehicles();
}; 



let noUiPips = document.getElementsByClassName('noUi-pips noUi-pips-horizontal');
noUiPips[0].style.height = '0px';
noUiPips[1].style.height = '0px';
let hidePips = document.querySelectorAll('.noUi-marker.noUi-marker-horizontal.noUi-marker-normal');
for (i=0; i < hidePips.length; i++){
    hidePips[i].style.display = 'none';
}

//filter function

function filterVehicles(){
    let vehicleCard = document.getElementsByClassName('vehicleCard');
    for (i=0; i < vehicleCard.length; i++){
        vehicleCard[i].style.display = '';
    }
    
    //specified elements to filter with

    
    let tooltip = document.querySelectorAll('.noUi-tooltip');
    if (tooltip.length === 4){

        let makefilter = document.getElementById('makeFilter');
        let vehicleCards = document.getElementsByClassName('vehicleCard');

        //specified elements to filter with above
        let vehiclePrice = document.querySelectorAll('.vehicle-price');
        // let vehicleMileage = document.getElementsByName('mileage');
        let vehicleMake =  document.getElementById('makeFilter');
        for (i=0; i < vehicleCards.length; i++){
             
            //get data from vehicle cards
            let priceFiltered = parseInt(vehicleCards[i].querySelector('.vehicle-price').innerHTML.replace('$','').replace(',',''));
            let makeFiltered = vehicleCards[i].querySelector('#make').getAttribute('value');
            let mileageFiltered = parseInt(vehicleCards[i].querySelector('#mileageId').innerHTML.replace(',',''));
            let yearFiltered = parseInt(vehicleCards[i].querySelector('.vehicleYear').innerHTML);
            let mpgFiltered = parseInt(vehicleCards[i].querySelector('#mpg').innerHTML);
            let bodyFiltered = vehicleCards[i].querySelector('.vehicleTitle').getAttribute('value');
       
            
            // get data from search bar
            let pricemintooltip = parseInt(tooltip[0].innerHTML.replace('$','').replace(',',''));
            let pricemaxtooltip = parseInt(tooltip[1].innerHTML.replace('$','').replace(',',''));
            let makeSearch = document.querySelector('#makeFilter').value;
            let mileagemintooltip = parseInt(tooltip[2].innerHTML.replace('$','').replace(',',''));
            let mileagemaxtooltip = parseInt(tooltip[3].innerHTML.replace('$','').replace(',',''));
            let yearMinSearch = document.querySelector('#selectYearMin').value; //can get year from select dom with value
            let yearMaxSearch = document.querySelector('#selectYearMax').value;
            let mpgSearch = document.querySelector('#fuelEfficiencyFilter').value; //will have to replcae substrings
            let bodyTypeSearch = document.querySelector('#bodyStyleFilter').value;
                
                
 
            //filtration expressions
            let priceEval = (priceFiltered > pricemaxtooltip || priceFiltered < pricemintooltip);
            let makeEval = (makeFiltered != makeSearch && makeSearch != 'any');
            let mileageEval = (mileageFiltered > mileagemaxtooltip || mileageFiltered < mileagemintooltip);
            let yearEval = (yearFiltered > yearMaxSearch || yearFiltered < yearMinSearch)
            let mpgEval = (mpgSearch != 'any' && mpgFiltered < mpgSearch);
            let bodyEval = (bodyTypeSearch != 'any' && bodyTypeSearch != bodyFiltered);
       
            
            

            if (priceEval || makeEval ||
            mileageEval || yearEval || mpgEval || bodyEval)  { //try just removing an operand
           

                vehicleCards[i].style.display = 'none';    
                let parentElement = vehicleCards[i].parentElement;
                let moreInfo = parentElement.getElementsByClassName('moreInfo')[i];
                moreInfo.style.display = 'none';
            } else {
       
                let parentElement = vehicleCards[i].parentElement;
                let moreInfo = parentElement.getElementsByClassName('moreInfo')[i];
                vehicleCards[i].style.display = '';
                moreInfo.style.display = '';
            }
        }
    }
}

//js for search carets

let caret = document.querySelectorAll('#leftcaret');

function findAncestor(e1, findClass){
    while (e1.parentNode) {
        e1 = e1.parentNode;
        if (e1.classList.contains('search')){

            return e1 
        }
    } 
}

caret.forEach(e1 => e1.addEventListener('click', function() {
    let cls = '.search';
    let ancestor = findAncestor(e1, cls);

    let dropDown = ancestor.querySelector('.dropDown');
    

    if (e1.classList.contains('fa-angle-left')) {
        e1.classList.remove('fa-angle-left');
        e1.classList.add('fa-angle-down');
        dropDown.style.display = 'flex';
        dropDown.style.flexDirection = 'column';
    } else {
        e1.classList.add('fa-angle-left');
        dropDown.style.display = 'none';
    }
}));  


let showFilter = document.querySelector('.showFilter');
let searchBar = document.querySelector('.searchbar');
let searchResults = document.querySelector('.searchresults');
showFilter.addEventListener('click', function(){
    searchResults.style.display = 'none';
    searchBar.style.display = 'flex';
})

let hideFilter = document.querySelector('#hideFilter');
hideFilter.addEventListener('click', function(){
    searchResults.style.display = 'flex';
    searchBar.style.display = 'none';
})

///sticky side search bar

let searchBarSticky = document.getElementsByClassName('searchbar')[0];
let navheight = document.querySelector('#navbar').offsetHeight;
let stickBar = searchBarSticky.offsetTop - navheight;
let searchResultsLeft = searchResults.offsetLeft;
let testing = stickBar + navheight;
window.addEventListener('scroll', stickSearch);

function stickSearch(){
    if (window.pageYOffset >= stickBar){
        searchResults.style.marginLeft = searchResultsLeft.toString().concat('px')
        searchBarSticky.classList.add('stickBar');
        searchBarSticky.style.top = (navheight + 0).toString().concat('px');
    } else {
        searchResults.style.marginLeft = '3%';
        searchBarSticky.classList.remove('stickBar');
    }
}


function cardHighlightIn(card){
    let moreInfo = card.querySelector('.moreInfo');
    let topVehicleCard = card.querySelector('.topVehicleCard');
    moreInfo.style.transition = "background-color 0.1s ease";
    topVehicleCard.style.transition = "background-color 0.1s ease";
    moreInfo.style.backgroundColor = '#dee9f0';
    topVehicleCard.style.backgroundColor = '#dee9f0';
  
}
 
function cardHighlightOut(card){
    let moreInfo = card.querySelector('.moreInfo');
    let topVehicleCard = card.querySelector('.topVehicleCard');
    moreInfo.style.transition = "background-color 0.2s ease";
    topVehicleCard.style.transition = "background-color 0.2s ease";
    moreInfo.style.backgroundColor = '#999999c2';
    topVehicleCard.style.backgroundColor = '#cecece';
} 

///post request for filtering all paginated model objects

// let sendPriceRange = new XMLHttpRequest()
// sendPriceRange.onload = function(){
//     if (sendPriceRange.status == 200){
//         console.log('success');
        
       
//     } else {
//         console.log('request failed');
        
//     }
// }

// sendPriceRange.open('POST', '', true);
// sendPriceRange.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
// sendPriceRange.send(JSON.stringify({'min':'like', 'max':'heartint'})); 

const pageNumber = document.querySelectorAll('.pagination-number');


pageNumber.forEach(e1 => e1.addEventListener('click', function(){
    // let xhr = new XMLHttpRequest();
    // xhr.onload = function(){
    //     if (xhr.status == 200){
    //         console.log('success');
 
    //     } else {
    //         console.log('fail');
            
    //     }
    // }
    // xhr.open('GET', '', true);
    // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    // xhr.send(JSON.stringify({'min':'like', 'max':'heartint'}));
    
    
}))