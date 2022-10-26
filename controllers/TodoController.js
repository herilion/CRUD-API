import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "path";

const todos = [
  {
    id: 25545353,
    title: "Ma première tâche",
    completed: false,
  },
];
export default class TodoController {
  createTodo(req, res) {
    const todo = {
      id: Date.now(),
      title: req.body.title,
      completed: false,
    };
    todos.push(todo);
    return res.status(201).send(todo);
  }
  getAllTodos(req, res) {
    return res.status(200).send(todos);
  }
}
