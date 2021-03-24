// function hash(stringy) {
//     console.log(stringy);
//     document.getElementById("output").innerHTML = hex_sha256(stringy);
// }

let _card_placed = false;

let mocked_data = {
    username: "nutchanonc",
    userDisplayname: "Beamu",
    userID: "somethingHere",
    timestampIn: Date.now(),
} 


const lightGreenForBox = "rgb(207, 255, 234)";
const lightGreenForBoxBorder = "rgb(26, 173, 109)"

const lightYellowForBox = "rgb(240, 239, 182)";


const defaultBorderColor = "rgb(48, 48, 48)";






function placeCard() {

    _card_placed = true;
    
}


function removeCard() {
    _card_placed = false;
}

function setInterfaceForCardPlaced(bool) {
    if (bool) {
        document.getElementById("device-bg").style.backgroundColor = lightGreenForBox;
        document.getElementById("device-bg").style.borderColor = lightGreenForBoxBorder;
        document.getElementById("device-status").innerHTML = 'card detected'
    }
    else {
        document.getElementById("device-bg").style.backgroundColor = "white";
        document.getElementById("device-bg").style.borderColor = defaultBorderColor;
        document.getElementById("device-status").innerHTML = '(not in used)'
    }
}





setInterval(() => {

    // Update UI
    setInterfaceForCardPlaced(_card_placed);

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



initializeCookie();
readAuthCookies_Home();