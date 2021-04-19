function initializeCookie() {
    if (!document.cookie) {
        document.cookie = "username=";
        document.cookie = "password=";
    }
    console.log("Cookies initialized");
    return;
}

function readAuthCookies_Home() {

    var username,password;
    var Cookie = document.cookie.split(';');
    username = Cookie[0].split('username=')[1];
    password = Cookie[1].split('password=')[1];
    if (username == "" || password == "") {
        location.href = "https://practicum-po.herokuapp.com/auth";
    }
}
function readAuthCookies_Auth() {

    var username,password;
    var Cookie = document.cookie.split(';');
    username = Cookie[0].split('username=')[1];
    password = Cookie[1].split('password=')[1];
    if (username != "" || password != "") {
        location.href = "https://practicum-po.herokuapp.com";
    }
}

function signOut() {
    document.cookie = "username=";
    document.cookie = "password=";
    location.reload();
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