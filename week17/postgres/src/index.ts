import {Client} from "pg";
import express from "express";
const pgClient = new Client("postgresql://neondb_owner:M3Acn5hmLCqH@ep-falling-forest-a550wim2.us-east-2.aws.neon.tech/neondb?sslmode=require");
//@ts-ignore
const app = express();
pgClient.connect();
app.use(express.json());
app.post("/signup", async (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    try {
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1,$2,$3);`;

        const response = await pgClient.query(insertQuery, [username,email,password]);
        res.json({
            message: "You have signed up"
        })
    } catch (error) {
       res.json({
        message: "Error while signing up"
       })
        
    }
} )

app.listen(3000);