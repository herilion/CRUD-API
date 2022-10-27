import express from "express";
import TodoController from "../controllers/TodoController.js";
const todosRouter = express.Router();
const todoObj = new TodoController();
todosRouter.post("/add", todoObj.createTodo);
todosRouter.get("/", todoObj.getAllTodos);
<<<<<<< HEAD
todosRouter.delete("/delete/:id", todoObj.deleteTodo)
=======
todosRouter.put("/update/:id", todoObj.updateTodo)
>>>>>>> 8a45fd0ce9d0b792f9e35556d34243853c3385dc

export default todosRouter;
