// function hash(stringy) {
//     console.log(stringy);
//     document.getElementById("output").innerHTML = hex_sha256(stringy);
// }



let device;




let _card_placed = false;
let _card_placed_cache = false;


const id_e = document.getElementById("device-name");
const status_e = document.getElementById("device-status");
const location_e = document.getElementById("device-location");



const lightGreenForBox = "rgb(207, 255, 234)";
const lightGreenForBoxBorder = "rgb(26, 173, 109)"

const redForBoxBorder = "rgb(252, 3, 82)";
const redForBox = "rgb(255, 217, 221)";

const lightYellowForBox = "rgb(240, 239, 182)";


const defaultBorderColor = "rgb(48, 48, 48)";





function placeCard() {

    _card_placed = true;
    
}


function removeCard() {
    _card_placed = false;
}

function checkCard() {
    if (_card_placed == !_card_placed_cache) {
        setInterfaceForCardPlaced(_card_placed);
        _card_placed_cache = _card_placed;
    }
}

function setInterfaceForCardPlaced(bool) {
    if (bool) {
        document.getElementById("device-bg").style.backgroundColor = lightGreenForBox;
        document.getElementById("device-bg").style.borderColor = lightGreenForBoxBorder;
        document.getElementById("device-status").innerHTML = 'card detected'
    }
    else {

        document.getElementById("device-bg").style.backgroundColor = redForBox;
        document.getElementById("device-bg").style.borderColor = redForBoxBorder;
        document.getElementById("device-status").innerHTML = 'card removed'
        setTimeout(() => {
            document.getElementById("device-bg").style.backgroundColor = "white";
            document.getElementById("device-bg").style.borderColor = defaultBorderColor;
            document.getElementById("device-status").innerHTML = '(not in used)'
        } , 1000);
    }
}





setInterval(() => {

    // Update UI
    checkCard(_card_placed , _card_placed_cache);
    getDeviceStatus();
    updateDeviceUI();
},1000);



// Extra functions
var toHHMMSS = (secs) => {
    var sec_num = parseInt(secs, 10)
    var hours   = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}


async function getDeviceStatus() {
    await fetch('https://practicum-po.herokuapp.com/device?id=s3xy&requirements=all')
    .then(res => res.json())
    .then(res => device = res);
}

function printDeviceStatus() {
    console.log(device);
}

function updateDeviceUI() {
    document.getElementById("device-name").innerHTML = `${device.name} `;
    document.getElementById("device-location").innerHTML = `${device.location}`;
}


initializeCookie();
readAuthCookies_Home();