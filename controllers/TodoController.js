import query from "../config/index.js";
export default class TodoController {
  createTodo(req, res) {
    const todo = {
      id: Date.now(),
      title: req.body.title,
      completed: false,
    };
    const sql = `
    INSERT INTO todos(title) VALUES($1)
    `;
    try {
      (async () => {
        await query(sql, [todo.title]);
      })();
    } catch (e) {
      console.log(e);
    }
    return res.status(201).send(todo);
  }
  getAllTodos(req, res) {
    const sql = `SELECT * FROM todos`;
    return query(sql, [])
      .then((results) => {
        return res.status(200).send(results.rows);
      })
      .catch((e) => {
        return console.log(e);
      });
  }

  updateTodo(req, res){

  }
}
