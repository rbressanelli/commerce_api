import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Express } from "express";
import routes from "./routes";

dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.json());


routes(app)

app.listen(3001);
console.log("servidor iniciou");
