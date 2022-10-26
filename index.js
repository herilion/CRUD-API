import express from "express";
import todosRouter from "./routes/todosRouter.js";
import * as pg from "pg";

const app = express();

const {Client}=pg;
const client = new Client({
    host: "localhost",
    user : "postgres",
    port : 5432,
    password :"",
    database :"postgres"

});

client.connect();

console.log("connexion réussie")


app.use('/todos', todosRouter)
app.listen(3001, () => {
    console.log('le serveur est lancé au port 3001')
});