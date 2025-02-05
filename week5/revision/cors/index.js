const express = require("express") 
const cors = require("cors")
const app = express();

app.use(express.json());
app.use(cors()); // if we use this it will allow request for any domins


app.post("/sum",(req,res) =>{
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    res.json({
        "sum": a+b
    })
})
app.listen(3002)