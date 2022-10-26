import express from "express";
import todosRouter from "./routes/todosRouter.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/todos", todosRouter);
app.listen(3001, () => {
  console.log("le serveur est lancé au port 3001");
});
