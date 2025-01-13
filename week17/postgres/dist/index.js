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
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pgClient = new pg_1.Client("postgresql://neondb_owner:M3Acn5hmLCqH@ep-falling-forest-a550wim2.us-east-2.aws.neon.tech/neondb?sslmode=require");
//2nd way to initilazie pg client
// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "M3Acn5hmLCqH",
//     port: 5432,
//     host: "ep-falling-forest-a550wim2.us-east-2.aws.neon.tech",
//     database: "neondb",
//     ssl: {
//       rejectUnauthorized: false, // Allows self-signed certificates (common in hosted environments like Neon)
//     },
//   });
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("connecting to neon");
        yield pgClient.connect();
        console.log("connected to neon");
        const response = yield pgClient.query("SELECT * FROM users;");
        //const response = await pgClient.query("UPDATE users SET username = 'surya' where id= 2")
        console.log(response.rows);
    });
}
main(); //just calling the main function
