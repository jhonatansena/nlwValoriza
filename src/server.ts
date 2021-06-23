import "reflect-metadata"
import express from "express";

import { router } from "./router";

import "./database"


const app = express();

app.use(express.json());


app.use(router);

const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port ", port);
})

