const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "jfghdfikdjfkjf";

mongoose.connect("mongodb+srv://satyam:satyam123@cluster0.nhpny.mongodb.net/todo");
const app = express();

app.use(express.json());

 
function auth(req, res, next) {
    const token = req.headers.token;

    const decodeData = jwt.verify(token, JWT_SECRET);

    if(decodeData){
        req.userId = decodeData.id;
        next();
    }
    else{
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }
}

app.post("/signup", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });

    res.json({
        message: "You are Logged in"
    })
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);
    
    if (user) {
        const token = jwt.sign({
            id: user._id.toString()
        },JWT_SECRET);
        res.json({
            token: token
        });
    }
    else{
        res.status(403).json({
            message: "Invalid Credentials"
        })
    }
});

app.post("/todo", auth, async function(req, res){
    const userId = req.userId;
    const title = req.body.title;

    TodoModel.create({
        title,
        userId
    })
    res.json({
        userId: userId
    });
});

app.get("/todos", auth, async function(req, res){
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })
    res.json({
        todos
    });
});

app.listen(3000);