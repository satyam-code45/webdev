const express = require("express");

const app = express();

app.get("/add/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const ans = a+b;
    res.json({
        ans
    })
});

app.get("/subtract", function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    const ans = a-b;
    res.json({
        ans,
    })
});
app.get("/multiply", function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    const ans = a*b;
    res.json({
        ans
    })
});

app.get("/divide", function(req, res){
    const a = req.query.a;
    const b = req.query.b;
    const ans = a/b;
    res.json({
        ans
    })
});
app.listen(3000);