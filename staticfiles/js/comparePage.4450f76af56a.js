console.log(JSON.parse(sessionStorage.getItem('viewedVehicles')));
console.log(JSON.parse(sessionStorage.getItem('toCompare')));
let compareSection = document.querySelector('.compare-section');
let comparedVehicles = JSON.parse(sessionStorage.getItem('toCompare'));
let filterWithCompare = JSON.parse(sessionStorage.getItem('viewedVehicles'));
let newCompareList = []
let comparedTable = document.createElement('table');

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


for (i=0; i < filterWithCompare.length; i++){
    comparedVehicles.forEach(e1 => {
        if (e1['sortPicture'] == getPictureName(filterWithCompare[i]['vehiclePic']) && e1['sortTitle'] == filterWithCompare[i]['vehicleTitle']){
            newCompareList.push(filterWithCompare[i]);
        } 
    })
}

console.log(newCompareList);


comparedTable.setAttribute('id', 'compared-table');
compareSection.appendChild(comparedTable);

let tableBody = document.createElement('tbody');
comparedTable.appendChild(tableBody);

let tPic = document.createElement('tr');
let tTitle = document.createElement('tr');
let tViewDetails = document.createElement('tr');
let tPrice = document.createElement('tr');
let tYear = document.createElement('tr');
let tMake = document.createElement('tr');
let tModel = document.createElement('tr');
let tMPG = document.createElement('tr');
let tDoor = document.createElement('tr');
let tMiles = document.createElement('tr');
let tEngine = document.createElement('tr');
let tTrans = document.createElement('tr');
let tDriveline = document.createElement('tr');
let tExterior = document.createElement('tr');
let tInterior = document.createElement('tr');
let tStockNum = document.createElement('tr');
let tVin = document.createElement('tr');

tPic.setAttribute('id', 'table-pic');
tTitle.setAttribute('id', 'table-title');
tViewDetails.setAttribute('id', 'tViewDetails');
tPrice.setAttribute('id', 'tPrice');
tYear.setAttribute('id', 'tYear');
tMake.setAttribute('id', 'tMake');
tModel.setAttribute('id', 'tModel');
tMPG.setAttribute('id', 'tMPG');
tDoor.setAttribute('id', 'tDoor');
tMiles.setAttribute('id', 'tMiles');
tEngine.setAttribute('id', 'tEngine');
tTrans.setAttribute('id', 'tTrans');
tDriveline.setAttribute('id', 'tDriveline');
tExterior.setAttribute('id', 'tExterior');
tInterior.setAttribute('id', 'tInterior');
tStockNum.setAttribute('id', 'tStockNum');
tVin.setAttribute('id', 'tVin');

let appendedAttributes = [tPic, tViewDetails, tTitle, tPrice, tYear, tMake, tModel,
    tMPG, tDoor, tMiles, tEngine, tTrans, tDriveline, tExterior, 
    tInterior, tVin, tStockNum];
    
    for (i=0; i < appendedAttributes.length; i++){
        tableBody.appendChild(appendedAttributes[i])
    }

let thPic = document.createElement('th');
let thTitle = document.createElement('th');
let thViewDetails = document.createElement('th');
let thPrice = document.createElement('th');
let thYear = document.createElement('th');
let thMake = document.createElement('th');
let thModel = document.createElement('th');
let thMPG = document.createElement('th');
let thDoor = document.createElement('th');
let thMiles = document.createElement('th');
let thEngine = document.createElement('th');
let thTrans = document.createElement('th');
let thDriveline = document.createElement('th');
let thExterior = document.createElement('th');
let thInterior = document.createElement('th');
let thStockNum = document.createElement('th');
let thVin = document.createElement('th');

// thPic.textContent = 'Picture'
thTitle.textContent = 'Vehicle';
thPrice.textContent = 'Price';
thYear.textContent = 'Year';
thMake.textContent = 'Make';
thModel.textContent = 'Model';
thMPG.textContent = 'MPG';
thDoor.textContent = 'Doors';
thMiles.textContent = 'Mileage';
thEngine.textContent = 'Engine';
thTrans.textContent = 'Transmission'
thDriveline.textContent = 'Drive Line';
thExterior.textContent = 'Exterior Color';
thInterior.textContent = 'Interior Color';
thStockNum.textContent = 'Stock Number';
thVin.textContent = 'VIN';

tPic.appendChild(thPic);
tViewDetails.appendChild(thViewDetails);
tTitle.appendChild(thTitle);
tPrice.appendChild(thPrice);
tYear.appendChild(thYear);
tMake.appendChild(thMake);
tModel.appendChild(thModel);
tMPG.appendChild(thMPG);
tDoor.appendChild(thDoor);
tMiles.appendChild(thMiles);
tEngine.appendChild(thEngine);
tTrans.appendChild(thTrans);
tDriveline.appendChild(thDriveline);
tExterior.appendChild(thExterior);
tInterior.appendChild(thInterior);
tStockNum.appendChild(thStockNum);
tVin.appendChild(thVin);

for (i=0; i < newCompareList.length; i++){

    console.log(newCompareList[i]);
    
    let tdPic = document.createElement('td');
    let tdViewDetails = document.createElement('td');
    let tdTitle = document.createElement('td');
    let tdPrice = document.createElement('td');
    let tdYear = document.createElement('td');
    let tdMake = document.createElement('td');
    let tdModel = document.createElement('td');
    let tdMPG = document.createElement('td');
    let tdDoor = document.createElement('td');
    let tdMiles = document.createElement('td');
    let tdEngine = document.createElement('td');
    let tdTrans = document.createElement('td');
    let tdDriveline = document.createElement('td');
    let tdExterior = document.createElement('td');
    let tdInterior = document.createElement('td');
    let tdStockNum = document.createElement('td');
    let tdVin = document.createElement('td'); 

    let vehicleLink = document.createElement('a');
    tdViewDetails.appendChild(vehicleLink);
    console.log(newCompareList[i]['vehicleDoors']);
    
    vehicleLink.href = `${newCompareList[i]["vehicleLink"]}`;
    vehicleLink.textContent = 'View Vehicle';
    
    tdTitle.textContent = newCompareList[i]['vehicleTitle']
    tdPrice.textContent = newCompareList[i]['vehiclePrice']
    tdYear.textContent = newCompareList[i]['vehicleYear']
    tdMake.textContent = newCompareList[i]['vehicleMake']
    tdModel.textContent = newCompareList[i]['vehicleModel']
    tdMPG.textContent = newCompareList[i]['vehicleMPG']
    tdDoor.textContent = newCompareList[i]['vehicleDoors'];
    tdMiles.textContent = newCompareList[i]['vehicleMileage']
    tdEngine.textContent = newCompareList[i]['vehicleEngine']
    tdTrans.textContent = newCompareList[i]['vehicleTransmission']
    tdDriveline.textContent = newCompareList[i]['vehicleDriveLine']
    tdExterior.textContent = newCompareList[i]['exteriorColor']
    tdInterior.textContent = newCompareList[i]['interiorColor']
    tdStockNum.textContent = newCompareList[i]['vehicleStockNumber']
    tdVin.textContent = newCompareList[i]['vehicleVIN']
    
    tPic.appendChild(tdPic);
    tViewDetails.appendChild(tdViewDetails);
    tTitle.appendChild(tdTitle);
    tPrice.appendChild(tdPrice);
    tYear.appendChild(tdYear);
    tMake.appendChild(tdMake);
    tModel.appendChild(tdModel);
    tMPG.appendChild(tdMPG);
    tDoor.appendChild(tdDoor);
    tMiles.appendChild(tdMiles);
    tEngine.appendChild(tdEngine);
    tTrans.appendChild(tdTrans);
    tDriveline.appendChild(tdDriveline);
    tExterior.appendChild(tdExterior);
    tInterior.appendChild(tdInterior);
    tStockNum.appendChild(tdStockNum);
    tVin.appendChild(tdVin);

    let tdImg = document.createElement('img');
    tdPic.appendChild(tdImg);
    tdImg.src = newCompareList[i]['vehiclePic'];
};



