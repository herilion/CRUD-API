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
    const id = parseInt(req.params.id);
    const sql ="UPDATE todos SET title = $1 , completed =$2 WHERE id =$3";

    try {
        (async (title, completed, id) => {
            await query(sql, [title, completed, id]);
          })();
    } catch (error) {
        
    }

  }
}
