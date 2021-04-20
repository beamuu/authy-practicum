const { forEach } = require("core-js/core/array");

function initializeCookie() {
    if (!document.cookie) {
        document.cookie = "username=";
        document.cookie = "password=";
    }
    console.log("Cookies initialized");
    return;
}


function readAuthCookies_Home() {

    
    var Cookie = document.cookie.split('; ');
    console.log("read this , ",Cookie);
    const username,password = Cookie.forEach(e => {
        if (e.toString().includes("username=")) {
            username = e.toString().split('=')[1];
        }
        if (e.toString().includes("password=")) {
            password = e.toString().split('=')[1];
        }
        return username,password;
    })
    console.log(username);
    console.log(password);
    if (!username || !password) {
        location.href = "https://practicum-po.herokuapp.com/auth";
    }
    else {
        fetch(`https://practicum-po.herokuapp.com/userInfo?username=${username}`)
        .then(res => res.json())
        .then(res => username_e.innerHTML = res.username);
    }
}
function readAuthCookies_Auth() {

    var Cookie = document.cookie.split('; ');
    console.log("read this , ",Cookie);
    const [username,password] = Cookie.forEach(e => {
        if (e.toString().includes("username=")) {
            username = e.toString().split('=')[1];
        }
        if (e.toString().includes("password=")) {
            password = e.toString().split('=')[1];
        }
        return [username,password];
    })
    console.log(username);
    console.log(password);
    if (username && password) {
        location.href = "https://practicum-po.herokuapp.com";
    }
    console.log(document.cookie);
    console.log(username);
    console.log(password);
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