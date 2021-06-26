import "reflect-metadata"
import express, {Request, Response, NextFunction } from "express";
import "express-async-errors";
require('dotenv/config');


import { router } from "./router";

import "./database"


const app = express();
const cors = require("cors");

app.use(express.urlencoded({ extended: false}));
app.use(express.json());


app.use(router);
app.use(cors());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            err: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
})

const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port ", port);
})

