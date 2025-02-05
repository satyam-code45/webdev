import {Client} from "pg";

// const pgClient = new Client("postgresql://neondb_owner:npg_wdNWGQonk3H5@ep-orange-grass-a98vquro.gwc.azure.neon.tech/neondb?sslmode=require");

//2nd way to initilazie pg client
const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_wdNWGQonk3H5",
    port: 5432,
    host: "ep-orange-grass-a98vquro.gwc.azure.neon.tech",
    database: "neondb",
    ssl: {
      rejectUnauthorized: false, 
    },
  });
  
async function main(){
    await pgClient.connect();
    const response = await pgClient.query("SELECT * FROM users;");
    
    console.log(response.rows);
    
}
main(); //just calling the main function
