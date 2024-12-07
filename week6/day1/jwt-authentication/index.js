const express = require('express');

const jwt = require('jsonwebtoken');
const JWT_SECERET = "anything";
const app = express();
app.use(express.json());

const users = [];
console.log(users);


app.post("/signup", function(req, res){
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

app.post("/signin", function(req, res){
    
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
})

app.get("/me", function(req, res){
    const token = req.headers.token;
    const decodeInformation = jwt.verify(token, JWT_SECERET);
    const userName = decodeInformation.userName;
    let founduser = null;

    for (let i = 0; i< users.length; i++) {
      if (userName == users[i].userName) {
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