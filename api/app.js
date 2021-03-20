// Nutchanon

const express   = require("express");
const app       = express();
const path = "/mnt/c/Users/nutchanonc/Desktop/practicum/"
console.log(__dirname+"/../home.html")

app.use(express.json());

app.get('/' , (req,res) => {

    // Root (Send web)
    res.sendFile(path+"web/home.html");
    

});


app.get('/auth' , (req,res) => {
    res.sendFile(path+"web/auth.html");
});


app.get('/require', (req,res) => {
    res.sendFile(path+req.query.PATH);
})

app.listen(3000,() => {
    console.log("Runninggggggg");
})