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


const lightGreenForBox = "rgb(168, 237, 196)";
const lightYellowForBox = "rgb(240, 239, 182)";

const profile       = document.getElementById("profile");
const cardReader    = document.getElementById("card-reader");

const cardStatus    = document.getElementById("card-status");
const Location      = document.getElementById("location");
const duration      = document.getElementById("duration");






function placeCard() {

    _card_placed = true;
    profile.style.backgroundColor = lightYellowForBox;
    cardReader.style.backgroundColor = lightGreenForBox;
    cardStatus.innerHTML = mocked_data.userDisplayname;
    duration.innerHTML = toHHMMSS((Date.now()-mocked_data.timestampIn)/1000);


    setTimeout(() => {
        profile.style.backgroundColor = "white";
    },700);
    
}


function removeCard() {

}






setInterval(() => {

    // Update duration
    if (_card_placed) duration.innerHTML = toHHMMSS((Date.now()-mocked_data.timestampIn)/1000);
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