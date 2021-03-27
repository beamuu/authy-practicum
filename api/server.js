const express = require('express');
const app = express();
const moment = require('moment');
const mongoose = require('mongoose');
const pathArray = __dirname.split('api');
const path      = pathArray[0];
const bcrypt = require('bcrypt');
const salt = 10;
const PORT = process.env.PORT || 3000;

const logger = (req, res, next)=> {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}:${moment().format()} status: ${res.statusCode} METHOD: ${req.method}`);
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
    lastlogin: String
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
    bcrypt.hash(req.body.password, salt, (err, hash) => {
        if(err){
            return res.json({massage: 'something wrong'});
        }
        const newUser = new user({
            firstname: info.firstname,
            lastname: info.lastname,
            password: hash,
            username: info.username,
            userID: info.userID,
            lastlogin: moment().format('LLL')
        });
        user.insertMany(newUser);
        return res.json({massage: 'sucessful'});
    })
});

app.get('/auth' , (req,res) => {
    res.sendFile(path+"web/auth.html");
});

app.get('/login',(req, res) => {
    let info = req.body;
    if(info.username && info.password){
        user.findOne({username: info.username}, (err, find_result) => {
            if(err){
                throw err;
            }
            if(find_result){
                bcrypt.compare(info.password, find_result.password, (err, result) => {
                    if(result == true){
                        console.log(`User ${info.username} login at ${moment().format('LLL')}`);
                        let myquery = {username: info.username};
                        let newvalue = {lastlogin: moment().format('LLL')};
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
                })
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


app.listen(PORT,() => console.log(`Running at port ${PORT}`));


// "firstname" : "Chalanthorn",
// "lastname": "Aenguthaivadt",
// "password" : "1q2w3e4r",
// "username": "GuAengggggg",
// "userID" : 10