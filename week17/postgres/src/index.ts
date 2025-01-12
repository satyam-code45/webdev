import { Client } from "pg";
import express from "express";
const pgClient = new Client(
  "postgresql://neondb_owner:M3Acn5hmLCqH@ep-falling-forest-a550wim2.us-east-2.aws.neon.tech/neondb?sslmode=require"
);
//@ts-ignore
const app = express();
pgClient.connect();
app.use(express.json());

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const city = req.body.city;
  const country = req.body.country;
  const street = req.body.street;
  const pincode = req.body.pincode;
  try {
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1,$2,$3) RETURNING id;`;

    const addressInsertQuery = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1,$2,$3, $4, $5);`;

    await pgClient.query("BEGIN;");

    const response = await pgClient.query(insertQuery, [
      username,
      email,
      password,
    ]);

    const userid = response.rows[0].id;

    //await new Promise(x => setTimeout(x,100*1000)); //stops the control for 100s
    const addressesResponse = await pgClient.query(addressInsertQuery, [
      userid,
      city,
      country,
      street,
      pincode,
    ]);

    await pgClient.query("COMMIT;");

    res.json({
      message: "You have signed up",
    });
  } catch (error) {
    console.error("Error during signup:", error); // Log error details
    res.status(500).json({
      message: "Error while signing up",
    });
  }
});

app.get("/metadata", async (req, res) => {
  const id = req.query.id;
  const query1 = `SELECT username,email,id FROM users WHERE id =$1`;
  const response1 = await pgClient.query(query1, [id]);

  const query2 = `SELECT * FROM addresses WHERE user_id = $1`;

  const response2 = await pgClient.query(query2, [id]);

  res.json({
    user: response1.rows[0],
    addresses: response2.rows[0],
  });
});

app.get("/better-metadata", async (req, res) => {
  const id = req.query.id;
  const query1 = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users
    JOIN addresses ON users.id = addresses.user_id
    WHERE users.id = $1`;
  const response = await pgClient.query(query1, [id]);

  res.json({
    response: response.rows[0],
  });
});
app.listen(3000);
