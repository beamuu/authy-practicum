const fetch = require("node-fetch");

setInterval(()=> {
    let p = process.env.place;
    let status_card = process.env.status;
    let userId = process.env.userId;

    if(status_card == 1){
        fetch(`http://localhost:3000/testfetch?place=${p}&id=${userId}`);
    }
},3000);