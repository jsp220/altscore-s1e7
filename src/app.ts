import express, { Router } from "express";
import router from "./routes";

const app = express();

app.use(express.json());

// Routes
app.use("/", router);

export default app;
