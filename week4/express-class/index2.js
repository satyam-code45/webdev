const express = require("express");
const app = express();

var users = [{
    name:"John",
    kidneys:[{
        healthy: false
    }]
}]

app.use(express.json());

app.get("/", function(req, res) {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i< johnKidneys.length; i++) {
      if (johnKidneys[i].healthy) {
        numberOfHealthyKidneys += 1;
      }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})
app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req,res){
    for (let i = 0; i < users[0].kidneys.length; i++) {
       if(!users[0].kidneys[i].healthy) users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "Put Done!"
    })
})
app.delete("/", function(req,res){
    if (!unhealthykidney()) {
        res.status(411).json({
            msg:"You have no bad kidneys"
        })
    }
    const newKidenys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) newKidenys.push({
            healthy: true
        });
    } 
    users[0].kidneys = newKidenys;
    res.json({
        msg: "Delete Done!"
    })     
})
function unhealthykidney() {
    let numberOfUnhealthyKidneys = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy) numberOfUnhealthyKidneys = true;
    }   
    return numberOfUnhealthyKidneys;
}
app.listen(3000);