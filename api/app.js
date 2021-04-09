// Nutchanon
// Tesing only
const express   = require("express");
const app       = express();
const pathArray = __dirname.split('api');
const path      = pathArray[0];
const port      = process.env.PORT || 3000;

app.use(express.json());

app.get('/' , (req,res) => {
    res.sendFile(path+"web/home.html");
});


app.get('/profile' , (req,res) => {
    res.sendFile(path+"web/profile.html");
})


app.get('/auth' , (req,res) => {
    res.sendFile(path+"web/auth.html");
});

app.get('/login' , (req,res) => {
    console.log("\x1b[36m"+"Request at [ /login ]\ndetails:")
    const usr = req.query.username;
    const passwd = req.query.password;
    const usersKeys = Object.keys(users);
    var status = false;
    usersKeys.forEach(element => {
        const userObj = users[element];
        if (userObj.username == usr && userObj.password == passwd) {
            console.log("\x1b[33m",`   - user ${usr} just logged in.`);
            status = true;
        } 
    });
    res.send({
        "loginStatus": status,
    });
})

app.get('/logout' , (req,res) => {
    console.log("\x1b[36m"+"Request at [ /logout ]\ndetails:")
})

app.get('/device' , (req,res) => {
    const user = req.user;
    const requirement = req.query.requirements;
    if (requirement == "all") {
        res.send(
            device[deviceId]
        )
    }
    else {
        res.send(
            device[deviceId][requirement]
        )
    }
})



app.get('/require', (req,res) => {
    res.sendFile(path+req.query.PATH);
})

app.listen(3000,() => {
    console.log("\x1b[32m"+__filename+" is now running on port: "+port);
    console.log("\x1b[32m"+"[path] is now at ",path);
})






/**
 * 
 * Just a test data.
 * Use this structure in database na kub.
 * 
 */

const users = {

    users_id_list: ["1010","0110","1101","0010"],
    "1010": {
        "username": "nutchanony",
        "password": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
        "displayName": "Beamu need healing",
        "lastLogin": Date.now(),
        "lastLocation": "5v5 Split B-Heaven",
    },
    "0110": {
        "username": "napasinity",
        "password": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
        "displayName": "FranKydeSU summer spoon",
        "lastLogin": Date.now(),
        "lastLocation": "Mother Sri House",
    },
    "1101": {
        "username": "chalanthorny",
        "password": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
        "displayName": "coconut Palm",
        "lastLogin": Date.now(),
        "lastLocation": "Mars",
    },
    "0010": {
        "username": "nicky",
        "password": "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4",
        "displayName": "cookies nickies tokyo drift",
        "lastLogin": Date.now(),
        "lastLocation": "5v5 Ascent A-site",
    }

}
const device = {
    "s3xy": {
        name: "Elon's bedroom",
        owner: "Elon Dust",
        location: "Tesla HQ",
        currentUser: "0110",
        cardPlace: true,
    }
}