const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const {z} = require("zod")
const { UserModel, TodoModel } = require("./db")

const isAuthenticated = require("./middlewares/auth.js")
const JWT_SECRET = "satyam"
const app = express()
app.use(express.json())

app.post("/signup",async (req,res)=>{
    try {

        //zod schema
        const requiredBody = z.object({
            email: z.string().min(3).max(100).email(),
            name: z.string().min(3).max(100),
            password: z.string().min(3).max(100)
        })
        // const parsedData = requiredBody.parse(req.body)
        const parsedDataWithSucess = requiredBody.safeParse(req.body)

        if (!parsedDataWithSucess.success) {
            return res.json({
                "message": "Incorrect format!",
                "error": parsedDataWithSucess.error
            })
        }


        const email = req.body.email;
        const password = req.body.password;
        const name =  req.body.name;
        
        if(!email || !password || !name){
            return res.json({
                "message":"Please fill the required fields!"
            })
        }
        const response = await UserModel.findOne({
            email: email
        })
        console.log(response);
        
        if (response) {
            return res.json({
                "message": "Email already exists!"
            })
        } else {
            const hashedPassword = await bcrypt.hash(password, 5);
            await UserModel.create({
                email:email,
                password:hashedPassword,
                name: name
            })
            res.json({
                "message":"You are signed up sucessfully!"
            })
        }

    } catch (error) {
        console.log(error);
    }
})

app.post("/signin",async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
    
        if(!email || !password){
            return res.json({
                "message":"Please fill the required fields!"
            })
        }
        const response = await UserModel.findOne({
            email: email
        })
        if(!response){
            return res.status(403).json({
                "message":"User does not exists!"
            })
        }
        const passwordMatch = await bcrypt.compare(password,response.password)

        if (passwordMatch) {
            const token = jwt.sign({
                id: response._id.toString()
            },JWT_SECRET)
            res.json({
                "token": token
            })
        } else {
            res.json({
                "message":"Invalid password!"
            })
        }

    } catch (error) {
        console.log(error);
    }
})

app.post("/create-todos",isAuthenticated,async (req,res)=>{
    try {
        const userId = req.userId
        const title = req.body.title
        await TodoModel.create({
            title:title,
            userId:userId
        })
        res.json({
            "message": "Todo created sucessfully!"
        })
    } catch (error) {
        console.log(error);
    }
})

app.get("/todos",isAuthenticated,async (req,res)=>{
    try {
        const userId = req.userId
        const todos = await TodoModel.find({
            userId: userId
        })
        res.json({
            todos
        })
    } catch (error) {
        console.log(error);
    }   
})

app.listen(3000)