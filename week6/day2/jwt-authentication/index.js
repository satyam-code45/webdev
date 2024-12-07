const express = require('express');

const jwt = require('jsonwebtoken');
const JWT_SECERET = "anything";

const app = express();
app.use(express.json());

const users = [];
console.log(users);

function logged(req, res, next) {
    const userName = req.body.userName;
    const password = req.body.password;

    let founduser = null;

    for (let i = 0; i < users.length; i++) {
       if(users[i].userName == userName && users[i])
            founduser = users[i];
    }
    if (founduser){
        res.json({
            message: "Username already exists."
        })
    }
    else{
        next();
    }
}

function  logger(req, res, next) {
    console.log(req.method + " request came.");
    next();
}

app.get("/",function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})
app.post("/signup", logger, logged, function(req, res){
    const userName = req.body.userName;
    const password = req.body.password;


    users.push({
        userName : userName,
        password: password
    })

    res.json({
        message: "You are signed up."
    })
    console.log(users);
})

app.post("/signin", logger, function(req, res){
    
    const userName = req.body.userName;
    const password = req.body.password;

    let founduser = null;

    for (let i = 0; i < users.length; i++) {
       if(users[i].userName == userName && users[i])
            founduser = users[i];
    }

    if (founduser){
        const token = jwt.sign({
            userName: userName
        },JWT_SECERET);

        //founduser.token = token;
        res.json({
            token: token
        })
    }
    else{
        res.json({
            message: "Invalid Credentials"
        })       
    }
})

function auth(req, res, next) {
    const token = req.headers.token;
    const decodeInformation = jwt.verify(token, JWT_SECERET);

    if (decodeInformation.userName) {
        req.userName = decodeInformation.userName;
        next();
    }
    else{
        res.json({
            message:"You are not logged in."
        })
    }
}

app.get("/me", logger, auth, function(req, res){

    let founduser = null;

    for (let i = 0; i< users.length; i++) {
      if (req.userName == users[i].userName) {
         founduser = users[i];
      }       
    }
    if(founduser){
        res.json({
            userName: founduser.userName,
            password: founduser.password
        })
    }
    else{
        message: "User not found"
    }
})
app.listen(3000);