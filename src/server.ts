import express, { response } from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Server is running on port ", port);
})

app.get("/test", (request, response) => {
   return response.send("Olá mundo");
} )


app.post("/", (req, res) => {
    return response.send("olá mundo no post")
})