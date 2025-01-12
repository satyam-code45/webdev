"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
const pgClient = new pg_1.Client("postgresql://neondb_owner:M3Acn5hmLCqH@ep-falling-forest-a550wim2.us-east-2.aws.neon.tech/neondb?sslmode=require");
//@ts-ignore
const app = (0, express_1.default)();
pgClient.connect();
app.use(express_1.default.json());
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
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
        yield pgClient.query("BEGIN;");
        const response = yield pgClient.query(insertQuery, [
            username,
            email,
            password,
        ]);
        const userid = response.rows[0].id;
        //await new Promise(x => setTimeout(x,100*1000)); //stops the control for 100s
        const addressesResponse = yield pgClient.query(addressInsertQuery, [
            userid,
            city,
            country,
            street,
            pincode,
        ]);
        yield pgClient.query("COMMIT;");
        res.json({
            message: "You have signed up",
        });
    }
    catch (error) {
        console.error("Error during signup:", error); // Log error details
        res.status(500).json({
            message: "Error while signing up",
        });
    }
}));
app.get("/metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query1 = `SELECT username,email,id FROM users WHERE id =$1`;
    const response1 = yield pgClient.query(query1, [id]);
    const query2 = `SELECT * FROM addresses WHERE user_id = $1`;
    const response2 = yield pgClient.query(query2, [id]);
    res.json({
        user: response1.rows[0],
        addresses: response2.rows[0],
    });
}));
app.get("/better-metadata", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query1 = `SELECT users.id, users.username, users.email, addresses.city, addresses.country, addresses.street, addresses.pincode
    FROM users
    JOIN addresses ON users.id = addresses.user_id
    WHERE users.id = $1`;
    const response = yield pgClient.query(query1, [id]);
    res.json({
        response: response.rows[0],
    });
}));
app.listen(3000);
