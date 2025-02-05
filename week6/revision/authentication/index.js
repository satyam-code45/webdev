const express = require("express")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const JWT_SECRET = "satyam"


const { UserModel } = require("./db");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://satyamwrites23:satyamwrites23@cluster0.ducsp.mongodb.net/auth")

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.post("/signup",async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    await UserModel.create({
        email: email,
        password: password
    });
    res.json({
        "message":"You are signed up successfully!"
    })

})

app.post("/signin",async(req,res)=>{
    
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
    });
    if (!response) {
        res.status(403).json({
            message: "User does not exist"
        })
        return
    }
    if (password == response.password) {
        const token = jwt.sign({
            email: email
        },JWT_SECRET)
        
        console.log(token);
        res.json({
            "token": token,
            "message": "You signed in successfully!"
        })
    }
    else{
        res.status(404).json({
            message: "Incorrect creds"
        })
    }
})

function auth(req,res,next){
    const token = req.headers.token
    const decodedInfo = jwt.verify(token,JWT_SECRET)
    
    
    if (!decodedInfo) {
        res.status(403).json({
            message: "Please sign in"
        })
        return
    }
    req.email = decodedInfo.email
    next()
}

app.use(auth)

app.get("/me", async (req,res)=>{
        console.log(req.email);
        res.json({
            "Email" : req.email
        })
})
app.listen(3000)