

const username_e = document.getElementById("username");
const password_e = document.getElementById("password");
deleteAllCookies();
function signIn() {

    
    const password =  hex_sha256(password_e.value);
    document.cookie = `username=${username_e.value}`;
    document.cookie = `password=${password}`;
    console.log(password);
}



function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}