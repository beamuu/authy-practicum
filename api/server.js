const express = require('express');
const app = express();
const mongoose = require('mongoose');
const pathArray = __dirname.split('api');
const path      = pathArray[0];
const PORT = process.env.PORT || 3000;
const hex = require('./sha256-min');

const nnn = new Date();
const logger = (req, res, next)=> {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${nnn.getHours()}.${nnn.getMinutes()}.${nnn.getSeconds()} status: ${res.statusCode} METHOD: ${req.method}`);
    next();
};

app.use(express.json());

mongoose.connect('mongodb+srv://Palm:1q2w3e4r@cluster0.tqsvi.mongodb.net/practicum', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const db = mongoose.connection;
db.once('open', () => console.log('Connect to Database'));
app.use(logger);

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    password: String,
    username: String,
    userID: Number,
    lastlogin: Date
});
const user = mongoose.model('users', userSchema);

app.get('/' , (req,res) => {
    res.sendFile(path+"web/home.html");
});

app.get('/profile' , (req,res) => {
    res.sendFile(path+"web/profile.html");
})

app.post('/register', (req, res) => {
    let info = req.body;
    if(!info.firstname || !info.lastname || !info.password || !info.username || !info.userID){
        return res.json({massage: 'miss info'});
    }
    let passwd = hex.hex_sha256(info.password);
    const newUser = new user({
        firstname: info.firstname,
        lastname: info.lastname,
        password: passwd,
        username: info.username,
        userID: info.userID,
        lastlogin: Date.now()
    });
    user.insertMany(newUser);
    return res.json({massage: 'sucessful'});
});

app.get('/auth' , (req,res) => {
    res.sendFile(path+"web/auth.html");
});

app.get('/login',(req, res) => {
    let info = req.query;
    console.log(info);
    if(info.username && info.password){
        user.findOne({username: info.username}, (err, find_result) => {
            if(err){
                throw err;
            }
            if(find_result) {

                if(passwd === find_result.password){
                    console.log(`User ${info.username} login at ${Date.now()}`);
                    let myquery = {username: info.username};
                    let newvalue = {lastlogin: Date.now()};
                    user.updateOne(myquery, newvalue, (err, statusupdate) => {
                        if(err){
                            throw err;
                        }
                        console.log('Update successful');
                    });
                    return res.json({loginStatus: true});
                }
                else{
                        return res.json({loginStatus: 'wrong password'});
                }
            }
            else{
                return res.json({loginStatus: 'mai mee username in DB'});
            }
        });
    }
    else{
        res.json({loginStatus: 'miss info'});
    }
});

app.get('/require', (req,res) => {
    res.sendFile(path+req.query.PATH);
})


app.listen(PORT,() => console.log(`Running at port ${PORT}`));


// "firstname" : "Chalanthorn",
// "lastname": "Aenguthaivadt",
// "password" : "1q2w3e4r",
// "username": "GuAengggggg",
// "userID" : 10