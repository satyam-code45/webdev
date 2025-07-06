const express = require("express");
const cors = require("cors")

const app = express();
app.use(cors({
    origin: ["http://localhost:33219/"]
}
))
app.use(express.json())

app.post("/sum", function(req, res) {
    console.log(req.body.a);
    console.log(req.body.b);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.json({
        ans: a + b
    })
});

app.listen(3000);