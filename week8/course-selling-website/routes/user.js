const { Router } = require("express");

const userRouter = Router();
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const express = require("express");

userRouter.post("/signup", async function(req, res){
    const {email, password, firstName, lastName} = req.body;
    
    await userModel.create({
        email,
        password,
        firstName,
        lastName
    })
});

userRouter.post("/signin", function(req, res){
    const { email, password} = req.body();
});

userRouter.get("/purchases", function(req, res){

});

module.exports = {
    userRouter: userRouter
}
