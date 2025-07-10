import express from "express";
import dotenv from "dotenv";
import { expressMiddleware } from "@as-integrations/express5";
import bodyParser from "body-parser";
import cors from "cors";

import { connectDB } from "./database/database.js";
import { connectGraphQl } from "./graphql/graphql.js";

dotenv.config({ path: "./.env", debug: true });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 5555;
const mongoURI = process.env.MONGO_URI!;

await connectDB(mongoURI);
const graphqlServer = await connectGraphQl();
await graphqlServer.start();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/graphql", expressMiddleware(graphqlServer));

app.get("/", (req, res) => {
  res.send("Hello from satyam local machine 123");
});

app.listen(3000);
