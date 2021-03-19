// Nutchanon

const express   = require("express");
const app       = express();

console.log(__dirname)

app.use(express.json());

app.get('/' , (req,res) => {

    // Root (Send web)
    res.sendFile(__dirname+"/../index.html");
    

});