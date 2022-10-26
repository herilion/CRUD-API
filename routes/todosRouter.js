import express from "express";
import TodoController from "../controllers/TodoController.js";
const todosRouter = express.Router();
const todoObj = new TodoController();
todosRouter.post('/add', todoObj.createTodo);
export default todosRouter;