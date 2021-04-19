const username_e = document.getElementById("username");
const password_e = document.getElementById("password");
const signInButton_e = document.getElementById("sign-in-button");




// signInButton_e.addEventListener("keyup", function(event) {
//     // Number 13 is the "Enter" key on the keyboard
//     if (event.keyCode === 13) {
//       // Cancel the default action, if needed
//       event.preventDefault();
//       // Trigger the button element with a click
//       signInButton_e.click();
//     }
// });


function signIn() {

    const password =  hex_sha256(password_e.value);
    
    fetch(`https://practicum-po.herokuapp.com/login?username=${username_e.value}&password=${password}`)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        if (res.loginStatus == true) {
            document.cookie = `username=${username_e.value}`;
            document.cookie = `password=${password}`;
            location.href = 'https://practicum-po.herokuapp.com';
        }
        else {
            alert("Your username or password is incorrect.");
        }
    });
}



readAuthCookies_Auth();


