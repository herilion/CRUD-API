import express from "express";
import TodoController from "../controllers/TodoController.js";
const todosRouter = express.Router();
const todoObj = new TodoController();
todosRouter.post("/add", todoObj.createTodo);
todosRouter.get("/", todoObj.getAllTodos);
todosRouter.put("/update/:id", todoObj.updateTodo)

export default todosRouter;
