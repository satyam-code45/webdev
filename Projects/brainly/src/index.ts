//@ts-ignore //do not use it //ugly way
import express from 'express'; //error in express as cannot find declaration file
import mongoose, { mongo } from 'mongoose';
import jwt from 'jsonwebtoken'; 
mongoose.connect("mongodb+srv://satyam:QUyZfw3gnLjzVpDT@cluster0.nhpny.mongodb.net/brainly");
import { UserModel } from './db';
const app = express()
app.use(express.json());

app.post("/api/v1/signup", async (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    await UserModel.create({
        username: username,
        password: password
    })
    res.json({
        message: "You are signed up"
    })
})
app.post("/api/v1/signin", (req, res) =>{

})
app.post("/api/v1/content", (req, res) =>{

})
app.get("/api/v1/content", (req, res) =>{

})
app.delete("/api/v1/content", (req, res) =>{

})
app.post("/api/v1/brain/share", (req, res) =>{

})
app.get("/api/v1/brain/:sharelink", (req, res) =>{

})
app.listen(3000);