import {Client} from "pg";

const pgClient = new Client("postgresql://neondb_owner:M3Acn5hmLCqH@ep-falling-forest-a550wim2.us-east-2.aws.neon.tech/neondb?sslmode=require");
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
  
async function main(){
  console.log("connecting to neon");
    await pgClient.connect();
    console.log("connected to neon");
    
    const response = await pgClient.query("SELECT * FROM users;");
    //const response = await pgClient.query("UPDATE users SET username = 'surya' where id= 2")


    console.log(response.rows);
    
}
main(); //just calling the main function
