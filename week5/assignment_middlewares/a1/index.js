const express = require("express");

const app = express();

function middleware(req,res,next) {
    console.log("Method is " + req.method);
    console.log("url is " + req.url);
    console.log("date : " + new Date());
    next();
}
let  requestCount = 0;
function requestIncreaser(req, res, next) {
    requestCount += 1;
    console.log("Total number of requests = " + requestCount);
    next();
}
function realSum(req, res) {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    const ans = a+b;
    res.json({
        ans
    })
}
function realSub(req, res) {
    const a = req.params.a;
    const b = req.params.b;
    const ans = a-b;
    res.json({
        ans
    })
}
function realmul(req, res) {
    const a = req.params.a;
    const b = req.params.b;
    const ans = a*b;
    res.json({
        ans
    })
}
function realdiv(req, res) {
    const a = req.params.a;
    const b = req.params.b;
    const ans = a/b;
    res.json({
        ans
    })
}
app.use(middleware);
app.get("/add/:a/:b", requestIncreaser, realSum);

app.get("/subtract/:a/:b",realSub); // this will not use middleware  requestIncreaser

app.use(requestIncreaser); // functions after this will automatically first call requestIncreaser  as middlewarw


app.get("/multiply/:a/:b",realmul);

app.get("/divide/:a/:b",realdiv);
app.listen(3000);