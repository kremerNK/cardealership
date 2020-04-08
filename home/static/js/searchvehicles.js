
let sortDiv = document.querySelector('.sort');
let displayFilter = document.querySelector('.displayFilter');
let topHeight = document.querySelector('.top-banner').getBoundingClientRect().height + document.querySelector('.mobile-phone').getBoundingClientRect().height
displayFilter.style.marginTop = (topHeight * 1.15).toString().concat('px');
sortDiv.style.width = document.querySelector('.vehicleCard').getBoundingClientRect().width.toString().concat('px');
sortDiv.style.marginRight = (document.querySelector('.sort').getBoundingClientRect().left - 
document.querySelector('.vehicleCard').getBoundingClientRect().left).toString().concat('px');


/////get max price for nouislider///
let vehicleInfo = document.querySelectorAll('.vehicle-price');
let priceList = []
for (i=0; i < vehicleInfo.length; i++){

    priceList.push(parseInt(vehicleInfo[i].innerHTML.replace(/\D/g, '')))
    
}

function roundNumPrice(num){
    return Math.ceil(num / 5000) * 5000;
}

maxPrice = roundNumPrice(Math.max(...priceList));


////get max mileage for nouislider////////

let vehicleMileage = document.querySelectorAll('#mileageId');
let mileageList = [];
for (i=0; i < vehicleMileage.length; i++){
    mileageList.push(parseInt(vehicleMileage[i].innerHTML.replace(/\D/g, '')))
}

function roundNumMileage(num){
    return Math.ceil(num / 50000) * 50000;
}

maxMileage = roundNumMileage(Math.max(...mileageList));
console.log(maxMileage)

//////////////////////////model filter with session value from home page////////////////////////////////////

function modelSelectChange(){
    sessionStorage.setItem('model', document.querySelector('#modelFilter').value);
}
 
function modelSession(){

        if (sessionStorage.getItem('model')){
            return sessionStorage.getItem('model')
        } else {
            return 'any'
        };
};

let modelSelection = document.querySelector('#modelFilter');
modelSelection.value = modelSession()

/////////////////////////////////price min max propagate search to next page//////////////////////////////////////////////////////////////

function priceMaxHandle(){
    // console.log('priceMaxHandle');
    
    if (sessionStorage.getItem('maxPrice')){
        if (sessionStorage.getItem('maxPrice') == 'any'){
            return maxPrice;
        } else {
            return parseInt(sessionStorage.getItem('maxPrice'));
        }
        
    } else {
    
        return maxPrice;
    }
}
let slideMaxValue = priceMaxHandle()

function priceMinHandle(){
    if (sessionStorage.getItem('minPrice')){
        return parseInt(sessionStorage.getItem('minPrice'));
    } else {
        return 1;
    }
}
let slideMinValue = priceMinHandle()

////////////////make filter propagate search to next page///////////////////////////////////
function makeSession(){
    if (sessionStorage.getItem('make')){
        sessionStorage.setItem('make', document.querySelector('#makeFilter').value)
        return sessionStorage.getItem('make')
    } else {
        sessionStorage.setItem('make', document.querySelector('#makeFilter').value)
        return sessionStorage.getItem('make');
    }
}

function makeFilterPageLoad(){
    if (!sessionStorage.getItem('make')){
        return 'any';
    } else {
        return sessionStorage.getItem('make');
    }
};
document.querySelector('#makeFilter').value = makeFilterPageLoad()

////////////////mileage min max propagate search to next page/////////////////////

function mileageSessionMin(){
 
    
    if (sessionStorage.getItem('minMileage')){
        return parseInt(sessionStorage.getItem('minMileage'));
    } else {
        return 1;
    }
}
let mileageSessionValueMin = mileageSessionMin()


function mileageSessionMax(){
    if (sessionStorage.getItem('maxMileage')){
        return parseInt(sessionStorage.getItem('maxMileage'));
    } else {
        return maxMileage;
    }
}
let mileageSessionValueMax = mileageSessionMax();


////////////////year min and max propagate search to next page/////////////////////

function yearSessionMin(){
    sessionStorage.setItem('yearMin', document.querySelector('#selectYearMin').value)

    if (parseInt(sessionStorage.getItem('yearMin')) > parseInt(document.querySelector('#selectYearMax').value)){
        sessionStorage.setItem('yearMin', document.querySelector('#selectYearMax').value)
        document.querySelector('#selectYearMin').value = sessionStorage.getItem('yearMin')
    } 
}

function yearMinPageLoad(){
    if (sessionStorage.getItem('yearMin')){
        return sessionStorage.getItem('yearMin')
    } else {
        document.querySelector('#selectYearMin').value = '1995';
        return '1995';
    }
}
document.querySelector('#selectYearMin').value = yearMinPageLoad();

function yearSessionMax(){
    console.log('yearsessionMax()');
    console.log(document.querySelector('#selectYearMin').value);
    
    sessionStorage.setItem('yearMax', document.querySelector('#selectYearMax').value)

    console.log(sessionStorage.getItem('yearMax'));
    console.log(document.querySelector('#selectYearMin').value);
    
    if (parseInt(sessionStorage.getItem('yearMax')) < parseInt(document.querySelector('#selectYearMin').value)){
        sessionStorage.setItem('yearMax', document.querySelector('#selectYearMin').value)
        document.querySelector('#selectYearMax').value = sessionStorage.getItem('yearMax')
    } 
}

function yearMaxPageLoad(){
  
    
    if (sessionStorage.getItem('yearMax')){
        return sessionStorage.getItem('yearMax')
    } else {
        document.querySelector('#selectYearMax').value = '2020';
        return '2020';
    }
}
document.querySelector('#selectYearMax').value  = yearMaxPageLoad();

////////////////fuel efficiency propagate search to next page/////////////////////

function fuelSession(){
    console.log('fuelsession()');
    
    if (sessionStorage.getItem('fuel')){
        console.log('fuel session exists');
        
        sessionStorage.setItem('fuel', document.querySelector('#fuelEfficiencyFilter').value)
        return sessionStorage.getItem('fuel')
    } else {
        console.log('fuel session does not exist');
        
        sessionStorage.setItem('fuel', document.querySelector('#fuelEfficiencyFilter').value)
        return sessionStorage.getItem('fuel');
    }
}

function fuelFilterPageLoad(){
  
    
    if (!sessionStorage.getItem('fuel')){
        return 'any';
    } else {
        return sessionStorage.getItem('fuel');
    }
};
document.querySelector('#fuelEfficiencyFilter').value = fuelFilterPageLoad()

////////////////body style propagate search to next page/////////////////////

function bodySession(){
    console.log('bodysession()');
    
    if (sessionStorage.getItem('type')){
        console.log('body session exists');
        
        sessionStorage.setItem('type', document.querySelector('#bodyStyleFilter').value)
        return sessionStorage.getItem('type')
    } else {
        console.log('body session does not exist');
        
        sessionStorage.setItem('type', document.querySelector('#bodyStyleFilter').value)
        return sessionStorage.getItem('type');
    }
}

function bodyPageLoad(){
    
    if (!sessionStorage.getItem('type')){
        return 'any';
    } else {
        return sessionStorage.getItem('type');
    }
};
document.querySelector('#bodyStyleFilter').value = bodyPageLoad()


////session of vehicle per page and sort option selections//////////



if (sessionStorage.getItem('vehiclePP')){

    sessionStorage.getItem('vehiclePP')
    
    document.querySelector('#vehicle-pp').value = sessionStorage.getItem('vehiclePP');
}
else {
    sessionStorage.setItem('vehiclePP', document.querySelector('#vehicle-pp').value)
}

if (sessionStorage.getItem('sort')){


    document.querySelector('#sort').value = sessionStorage.getItem('sort');
}
else {
    sessionStorage.setItem('sort', document.querySelector('#sort').value)
}

function setSortSession(){
    sessionStorage.setItem('sort', document.querySelector('#sort').value)
}

function setVehiclePPSession(){
    sessionStorage.setItem('vehiclePP', document.querySelector('#vehicle-pp').value)
    console.log('pp session');
    
}

// //////////////////type style propagate search to next page/////////////////////

// function TypeSession(){
//     console.log('bodysession()');
    
//     if (sessionStorage.getItem('body')){
//         console.log('body session exists');
        
//         sessionStorage.setItem('body', document.querySelector('#bodyStyleFilter').value)
//         return sessionStorage.getItem('body')
//     } else {
//         console.log('body session does not exist');
        
//         sessionStorage.setItem('body', document.querySelector('#bodyStyleFilter').value)
//         return sessionStorage.getItem('body');
//     }
// }

// function bodyStylePageLoad(){
    
//     if (!sessionStorage.getItem('body')){
//         return 'any';
//     } else {
//         return sessionStorage.getItem('body');
//     }
// };


// document.querySelector('#bodyStyleFilter').value = bodyStylePageLoad()


// wNumb is their tool to format the number. We us it to format the numbers that appear in the handles
let dollarPrefixFormat = wNumb({prefix: '$', decimals: 0})
let regularSlider = document.querySelector('.regular-slider');
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
    range: {min: 1, max: maxPrice}
    
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

regularSlider.noUiSlider.on('update', function(){

    
    max.value = topslider.innerText.substring(1, topslider.innerText.length);
    min.value = bottomslider.innerText.substring(1, bottomslider.innerText.length);
    sessionStorage.setItem("maxPrice", max.value);
    sessionStorage.setItem("minPrice", min.value);
    changePage(1, 'currentPageAdjust');

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
    // filterVehicles();
    // filter();
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
    range: {min: 1, max: maxMileage}
}) 

let bottomSliderMileage = document.getElementsByClassName('noUi-tooltip')[2];
let topSliderMileage = document.getElementsByClassName('noUi-tooltip')[3];
let mileageMin = document.getElementById('mileageMin');
let mileageMax = document.getElementById('mileageMax');
let mileageDetails = document.getElementsByName('mileage');
mileageMax.value = topSliderMileage.innerText;
mileageMin.value = bottomSliderMileage.innerText;
uiConnect = document.querySelectorAll('.noUi-connect');
for (i=0; i < uiConnect.length; i++){
    uiConnect[i].style.backgroundColor = '#2f74a3';
}

//update input boxes
mileageSlider.noUiSlider.on('update', function(){
   
    
    mileageMax.value = topSliderMileage.innerText;
    mileageMin.value = bottomSliderMileage.innerText;
    // filterVehicles();
    let parseMMax = parseInt(mileageMax.value);
    let parseMMin = parseInt(mileageMin.value);
    
    for (i=0; i < mileageDetails.length; i++){
        let parseMileage = parseInt(mileageDetails[i].innerHTML)
        if (parseMileage <= parseMMax) {

        } else {

        }
    }
    sessionStorage.setItem('maxMileage', parseInt(mileageMax.value));
    sessionStorage.setItem('minMileage', parseInt(mileageMin.value));
    changePage(1, 'currentPageAdjust');
})

function mileageSliderChange(val){
    //put filter function here also
    console.log('mileage input change slider');
    
    if (val.id == 'mileageMax'){
      
        
        if (parseInt(val.value) > parseInt(mileageMin.value)) {
            mileageSlider.noUiSlider.set([null, parseInt(val.value)])
        } 
        sessionStorage.setItem('maxMileage', parseInt(val.value));
        
    } else if (val.id == 'mileageMin'){
   
        console.log('mileageset');
        
        if (parseInt(val.value) < parseInt(mileageMax.value)){
            mileageSlider.noUiSlider.set([parseInt(val.value), null])
        }
        sessionStorage.setItem('minMileage', parseInt(val.value));
     
        
    }
}; 

let noUiPips = document.getElementsByClassName('noUi-pips noUi-pips-horizontal');
noUiPips[0].style.height = '0px';
noUiPips[1].style.height = '0px';
let hidePips = document.querySelectorAll('.noUi-marker.noUi-marker-horizontal.noUi-marker-normal');
for (i=0; i < hidePips.length; i++){
    hidePips[i].style.display = 'none';
}

//////////////////////////filter function//////////////////////////////////////

function filterVehicles(){
    let searchCards = document.querySelector('.searchresults');
    if (typeof filteredVehicleCards == 'undefined'){
       
        allVehicleCards = document.querySelectorAll('.vehicleCard');
        filteredVehicleCards = document.createElement('div');
        filteredVehicleCards.classList.add('createddiv');
        let z = document.querySelector('.searchresults');
        z.insertBefore(filteredVehicleCards, z.childNodes[1])
    } else {
        filteredVehicleCards.innerHTML = '';
    }

    let testdiv = document.querySelector('.extra');
    
    let newtest = document.createElement('testdiv');

    
    //specified elements to filter with
    let tooltip = document.querySelectorAll('.noUi-tooltip');
    if (tooltip.length === 4){
        
        let makefilter = document.getElementById('makeFilter');
        let vehicleCards = document.getElementsByClassName('vehicleCard');
        //specified elements to filter with above
        let vehiclePrice = document.querySelectorAll('.vehicle-price');
        let vehicleMake =  document.getElementById('makeFilter');

        for (i=0; i < allVehicleCards.length; i++){
            
            //get data from vehicle cards
            let priceFiltered = parseInt(allVehicleCards[i].querySelector('.vehicle-price').innerHTML.replace('$','').replace(',',''));
            let makeFiltered = allVehicleCards[i].querySelector('#make').getAttribute('value');
            let mileageFiltered = parseInt(allVehicleCards[i].querySelector('#mileageId').innerHTML.replace(',',''));
            let yearFiltered = parseInt(allVehicleCards[i].querySelector('.vehicleYear').innerHTML);
            let mpgFiltered = parseInt(allVehicleCards[i].querySelector('#mpg').innerHTML);
            let bodyFiltered = allVehicleCards[i].querySelector('.vehicleTitle').getAttribute('value');
            let modelFiltered = allVehicleCards[i].querySelector('#make').getAttribute('name')
            
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
            let modelSearch = document.querySelector('#modelFilter').value
                
            //filtration expressions
            let priceEval = (priceFiltered > pricemaxtooltip || priceFiltered < pricemintooltip);
            let makeEval = (makeFiltered != makeSearch && makeSearch != 'any');
            let mileageEval = (mileageFiltered > mileagemaxtooltip || mileageFiltered < mileagemintooltip);
            let yearEval = (yearFiltered > yearMaxSearch || yearFiltered < yearMinSearch)
            let mpgEval = (mpgSearch != 'any' && mpgFiltered < mpgSearch);
            let bodyEval = (bodyTypeSearch != 'any' && bodyTypeSearch != bodyFiltered);
            let modelEval = (modelSearch != 'any' && modelSearch != modelFiltered)
            
            if (priceEval || makeEval ||
            mileageEval || yearEval || mpgEval || bodyEval || modelEval)  { //try just removing an operand
       
            } else {
                let clone = allVehicleCards[i].cloneNode(true);
            
                filteredVehicleCards.appendChild(clone)
    
                
                allVehicleCards[i].style.display = '';
            }
        }
    }   
    return [...filteredVehicleCards.children]
}

//js for search carets/////////////////////

function findAncestor(e1, findClass){

    while (e1.parentNode) {
       //'search' for compared object
        // if (e1.className == 'search'){
        //     console.log(e1.className);
            
        //     return e1
        // }
        e1 = e1.parentNode;  
        console.log(e1)   
        if (e1.classList.contains(findClass)){
            return e1
        } 
    } 
}

function findAncestor2(el, cls){

    
    while ((el = el.parentElement) && !el.classList.contains(cls));

    
    return el;
}

let testCard = document.querySelector('.vehicleCard');
let caret = document.querySelectorAll('#leftcaret');
searchSection = document.querySelectorAll('#dropDownTarget')

function displaySection(){
    let section = findAncestor(this, 'search')
    let dropDown = section.querySelector('.dropDown');
    let caret = section.querySelector('#leftcaret');
    if (dropDown.classList.contains('display')){
        dropDown.classList.toggle('display');
        dropDown.style.cursor = 'pointer';
        caret.classList.remove('fa-angle-down');
        caret.classList.add('fa-angle-left');
    } else {
        dropDown.classList.toggle('display')
        dropDown.style.cursor = 'auto';
        caret.classList.remove('fa-angle-left');
        caret.classList.add('fa-angle-down');
    }
}
searchSection.forEach(e1 => e1.addEventListener('click', displaySection));
//////////////////////////filter vehicle cards on mobile////////////////

let showFilter = document.querySelector('.showFilter');
let searchBar = document.querySelector('.searchbar');
let searchResults = document.querySelector('.searchresults');
let hidePagination = document.querySelector('.pagination');
showFilter.addEventListener('click', function(){
    let mobileSortDiv = document.querySelector('.mobile-sort-div');
    let searchBarMargin = document.querySelector('.searchbar');
    let displayFilter = document.querySelector('.displayFilter');
    let leftBannerHeight = document.querySelector('.leftbanner').getBoundingClientRect().height
    let mobilePhoneHeight = document.querySelector('.mobile-phone').getBoundingClientRect().height
    let body = document.querySelector('.body');
    body.style.paddingBottom = '0px';
    displayFilter.style.marginTop = '0px';
    searchBarMargin.style.marginTop = (leftBannerHeight + mobilePhoneHeight).toString().concat('px');
    mobileSortDiv.style.display = 'none';
    searchResults.style.display = 'none';
    searchBar.style.display = 'flex';
    showFilter.style.display = 'none';
    hidePagination.style.display = 'none'; 
})

let hideFilter = document.querySelector('#hideFilter');

function closeMobileFilter(){
    let mobileSortDiv = document.querySelector('.mobile-sort-div');
    let body = document.querySelector('.body');
    let paginationDiv = document.querySelector('.pagination-container');
    let totalMatches = document.querySelector('#totalMatches');
    console.log(totalMatches.innerHTML[0]);
    if (totalMatches.innerHTML[0] != '0'){
        paginationDiv.style.display = '';
    } else {
        paginationDiv.style.display = 'none';

    }
    body.style.paddingBottom = '5%';
    displayFilter.style.marginTop = (topHeight * 1.15).toString().concat('px');
    mobileSortDiv.style.display = '';
    searchResults.style.display = 'flex';
    searchBar.style.display = 'none';
    showFilter.style.display = '';
    hidePagination.style.display = '';
}

hideFilter.addEventListener('click', closeMobileFilter)


//////sticky side search bar////////////////////
 
let searchBarSticky = document.getElementsByClassName('searchbar')[0];
let navheight = document.querySelector('#navbar').offsetHeight;
let stickBar = searchBarSticky.offsetTop - navheight;
let searchResultsLeft = searchResults.offsetLeft;
let getCardWidth = searchResults.offsetWidth;
let x = window.matchMedia("(min-width: 1000px)");
// searchResults.style.marginLeft = (searchResultsLeft - searchBarSticky.offsetWidth).toString().concat('px');
window.addEventListener('scroll', stickSearch);

function stickSearch(){
    if (window.matchMedia("(min-width: 1000px)").matches == false){}
    else if (window.pageYOffset >= stickBar){

        searchBarSticky.classList.add('stickBar');
        searchBarSticky.style.top = (navheight + 0).toString().concat('px');
        searchResults.style.width =  '70vw';
        stickyBarWidth = searchBarSticky.offsetWidth.toString().concat('px');
        matchingVW = '3vw'
        searchResults.style.marginLeft = `calc(${stickyBarWidth} + ${matchingVW})`;
    } else {
        searchResults.style.marginLeft = '3vw';
        searchResults.style.width = '70vw';
        searchBarSticky.classList.remove('stickBar');
    }
}
 
window.addEventListener('load', function(){
        footer = document.querySelector('.footer');
        searchBarSize = document.querySelector('.searchbar');
})

document.onscroll = function(){
    let searchBound = searchBarSize.getBoundingClientRect();
    let footBound = footer.getBoundingClientRect()
    let height = (window.pageYOffset + window.innerHeight) - footBound.height
    let dropDown = document.querySelector('.dropDownContainer').querySelectorAll('.search');
    let lastDropDown = dropDown[dropDown.length - 1]

    // if (window.matchMedia("(min-width: 1000px)").matches == false){
        
    // }
    if ((searchBound.bottom) >= footBound.top){
        lastDropDown.style.marginBottom = (footBound.height * 1).toString().concat('px');
    } else {
        lastDropDown.style.marginBottom = '0px';
    }
}

function cardHighlightIn(card){
    let moreInfo = card.querySelector('.moreInfo');
    let topVehicleCard = card.querySelector('.topVehicleCard');
    moreInfo.style.transition = "background-color 0.1s ease";
    topVehicleCard.style.transition = "background-color 0.1s ease, border 0.1s";
    moreInfo.style.backgroundColor = '#2f75a338';
    topVehicleCard.style.backgroundColor = '#2f75a338';
    card.style.transition = "border 0.1s ease";
    // card.style.border = "1px solid black";
}
 
function cardHighlightOut(card){
    let moreInfo = card.querySelector('.moreInfo');
    let topVehicleCard = card.querySelector('.topVehicleCard');
    moreInfo.style.transition = "background-color 0.2s ease";
    topVehicleCard.style.transition = "background-color 0.2s ease";
    moreInfo.style.backgroundColor = '#999999c2';
    topVehicleCard.style.backgroundColor = '#cecece';
    card.style.transition = "border 0.1s ease";
    card.style.border = "";
} 
 
////////////////vehicle per page and sort page///////////////
let vehiclePP = document.querySelectorAll('#vehicle-pp');
let sort = document.querySelectorAll('#sort');
vehiclePP.forEach(e1 => e1.addEventListener('change', function(){
    console.log('vehiclepp hit');
    whichVehiclePP = e1;
    changePage(1, '');
}));

sort.forEach(e1 => e1.addEventListener('change', function(){
    sortVehicle = e1;
    changePage(1,'');
}));

function AZ(val){

    function compare(a,b){
        var bandA = a.querySelector('#make').getAttribute('value');
        var bandB = b.querySelector('#make').getAttribute('value');
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison
    }
    return allNodes.sort(compare);
}

function ZA(val){
 
    function compare(a,b){
        var bandA = a.querySelector('#make').getAttribute('value');
        var bandB = b.querySelector('#make').getAttribute('value');
        let comparison = 0;
        if (bandA > bandB) {
            comparison = -1;
        } else if (bandA < bandB) {
            comparison = 1;
        }
        return comparison
    }
    return allNodes.sort(compare);
}

function HiLo(val){
    
    function compare(a,b){
        var bandA = parseInt(a.querySelector('.vehicle-price').innerHTML.replace('$','').replace(',',''));
        var bandB = parseInt(b.querySelector('.vehicle-price').innerHTML.replace('$','').replace(',',''));
        let comparison = 0;
        if (bandA > bandB) {
            comparison = -1;
        } else if (bandA < bandB) {
            comparison = 1;
        }
        return comparison
    }
    return allNodes.sort(compare);
}

function LoHi(val){
 
    function compare(a,b){
        var bandA = parseInt(a.querySelector('.vehicle-price').innerHTML.replace('$','').replace(',',''));
        var bandB = parseInt(b.querySelector('.vehicle-price').innerHTML.replace('$','').replace(',',''));
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison
    }
    return allNodes.sort(compare);
}

function NO(val){

    function compare(a,b){
        var bandA = parseInt(a.querySelector('.vehicleYear').innerHTML.substring(1,5));
        var bandB = parseInt(b.querySelector('.vehicleYear').innerHTML.substring(1,5));
        let comparison = 0;
        if (bandA > bandB) {
            comparison = -1;
        } else if (bandA < bandB) {
            comparison = 1;
        }
        return comparison
    }
    return allNodes.sort(compare);
}

function ON(val){

    function compare(a,b){
        var bandA = parseInt(a.querySelector('.vehicleYear').innerHTML.substring(1,5));
        var bandB = parseInt(b.querySelector('.vehicleYear').innerHTML.substring(1,5));
        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison
    }
    return allNodes.sort(compare);

}

function sortVehicles(){
 
    
    if (allNodes.length == 0){
        return allNodes
    }
    else if ((sortValue == 'default') || (sortValue == 'AZ')) {
        return AZ()
    }
    else if (sortValue == 'HiLo'){
        return HiLo()
    }
    else if (sortValue == 'LoHi'){
        return LoHi()
    }
    else if (sortValue == 'ZA'){
        return ZA()        
    }
    else if (sortValue == 'ON'){
        return ON()
    }
    else if (sortValue == 'NO'){
        return NO()
    }
}

///////////////////////////////vehicle results pagination///////////////////////////////////////////////////////////////
var current_page = 1;
var records_per_page = 3;

var allCards = document.querySelectorAll('.vehicleCard');
filteredCards = document.querySelector('.searchresults');

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page, '');
    } else {
        console.log('broken prev page');
    }
}

function nextPage()
{
    console.log(numPages(), 'numPages in nextPage()');
    
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page, '');
    } 
    // else {
    //     console.log('broke');

    //     current_page = 1;
    //     page = 1;
    //     nextPage();
    //     // changePage(current_page, '');
        
    // }
   
}
    
function changePage(page, boolean)
{
    // console.log('change page()');
    
    if (boolean != ''){
        page = 1;
        current_page = 1;
    } 
    allNodes = filterVehicles();

    
    
    if (typeof whichVehiclePP !== 'undefined'){
        if (isNaN(whichVehiclePP.value)){
            vehiclePPValue = 3
        } else {
            vehiclePPValue = parseInt(whichVehiclePP.value)
        }
    } else {
        vehiclePPValue = 3;
    }
    bothSorts = document.querySelectorAll('#sort');
    let web = window.getComputedStyle(document.querySelector('.sort-hide-mobile')).display
    let mobile = window.getComputedStyle(document.querySelector('.mobile-sort-div')).display
    function getSortValue(val){
        for (i=0; i < bothSorts.length; i++){
            pageSort = findAncestor2(bothSorts[i], val)
            if (pageSort != null){
                sortValue = pageSort.querySelector('#sort').value;
            }
        }
    }
    if (web != 'none'){
        value = 'sort-hide-mobile';
    } else if (mobile != 'none'){
        value = 'mobile-sort-div';
    }
    getSortValue(value)
    records_per_page = vehiclePPValue;
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.querySelector('.searchresults');
    var page_span = document.getElementById("page");
    var totalPage = document.getElementById('totalpage');
    current_page = page
    // Validate page 
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    
    allNodes = sortVehicles();
    console.log(allNodes);
    
    
    if (allNodes.length == 0){
        let paginationDiv = document.querySelector('.pagination');
        paginationDiv.style.display = 'none';
    } 
    else {
        let paginationDiv = document.querySelector('.pagination');
        paginationDiv.style.display = '';
    }
    listing_table.innerHTML = "";
    let totalMatches = document.querySelectorAll('#totalMatches');
    totalMatches[0].innerHTML = allNodes.length.toString().concat(' matches')
    totalMatches[1].innerHTML = allNodes.length.toString().concat(' matches')
    

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        if (typeof allNodes[i] == 'undefined'){
       
            
        } else {
            clone = allNodes[i].cloneNode(true);
            listing_table.appendChild(clone);
        }
    }
    totalPage.innerHTML = Math.ceil(allNodes.length / records_per_page);
    page_span.innerHTML = page;
    

    if (page == 1) {
        // btn_prev.style.visibility = "hidden";
        btn_prev.style.display = 'none';     
    } else {
        // btn_prev.style.visibility = "visible";
        btn_prev.style.display = '';
    }

    if (page == numPages()) {
        // btn_next.style.visibility = "hidden";
        btn_next.style.display = 'none';
    } else {
        // btn_next.style.visibility = "visible"; 
        btn_next.style.display = '';
    }
}

function numPages()
{
    return Math.ceil(allNodes.length / records_per_page);
}

let resetButton = document.querySelectorAll('#reset-button');
resetButton.forEach(e1 => e1.addEventListener('click', function(){
    //reset session values
    sessionStorage.setItem('fuel', 'any')
    sessionStorage.setItem('make', 'any')
    sessionStorage.setItem('maxMileage', maxMileage)
    sessionStorage.setItem('maxPrice', maxPrice)
    sessionStorage.setItem('minMileage', 1)
    sessionStorage.setItem('minPrice', 1)
    sessionStorage.setItem('model', 'any')
    sessionStorage.setItem('sort', 'default')
    sessionStorage.setItem('type', 'any')
    sessionStorage.setItem('vehiclePP', 'default')
    sessionStorage.setItem('yearMax', '2020')
    sessionStorage.setItem('yearMin', '1995')

    //reset sliders
    regularSlider.noUiSlider.reset();
    mileageSlider.noUiSlider.reset();

    //reset filter values
    document.querySelector('#makeFilter').value = 'any';
    document.querySelector('#modelFilter').value = 'any';
    document.querySelector('#selectYearMin').value = '1995';
    document.querySelector('#selectYearMax').value = '2020';
    document.querySelector('#fuelEfficiencyFilter').value = 'any';
    document.querySelector('#bodyStyleFilter').value = 'any';
    document.querySelectorAll('#vehicle-pp')[0].value = 'default';
    document.querySelectorAll('#sort')[0].value = 'default';

    //reset filter values specific to mobile
    document.querySelectorAll('#vehicle-pp')[1].value = 'default';
    document.querySelectorAll('#sort')[1].value = 'default';

    //reset vehicle card filter

    if (window.matchMedia("(min-width: 1000px)").matches == false){
        closeMobileFilter();
    }
    changePage(1, '')
}));

